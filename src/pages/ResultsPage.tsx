import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Home, Download, RotateCcw, CheckCircle, AlertTriangle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { getToolById, HealthTool } from "@/data/tools";

interface LocationState {
  answers: Record<string, string>;
  score: number;
  tool: HealthTool;
}

interface PatientInfo {
  name: string;
  age: string;
  sex: string;
  contactNumber: string;
  dateOfBirth: string;
}

// Custom Circular Progress Component
const CircularRiskIndicator = ({ percentage, riskLevel }: { percentage: number; riskLevel: string }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  const getRiskConfig = (level: string) => {
    const configs = {
      high: { 
        color: '#dc2626', 
        bgColor: '#fef2f2',
        icon: AlertCircle,
        label: 'HIGH RISK'
      },
      moderate: { 
        color: '#d97706', 
        bgColor: '#fffbeb',
        icon: AlertTriangle,
        label: 'MODERATE'
      },
      low: { 
        color: '#16a34a', 
        bgColor: '#f0fdf4',
        icon: CheckCircle,
        label: 'LOW RISK'
      }
    };
    return configs[level as keyof typeof configs] || configs.low;
  };

  const config = getRiskConfig(riskLevel);
  const Icon = config.icon;
  
  const radius = 60;
  const strokeWidth = 6;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div className="flex items-center gap-4 print:scale-75">
      <div className="relative">
        <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke={config.color}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            style={{ 
              strokeDashoffset,
              transition: 'stroke-dashoffset 2s ease-in-out'
            }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon className="h-6 w-6 mb-1" style={{ color: config.color }} />
          <div className="text-lg font-bold" style={{ color: config.color }}>
            {percentage}%
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm font-semibold">{config.label}</div>
        <div className="text-xs text-gray-600">Risk Assessment</div>
      </div>
    </div>
  );
};

export default function ResultsPage() {
  const { toolId } = useParams<{ toolId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [tool, setTool] = useState<HealthTool | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [patientInfo, setPatientInfo] = useState<PatientInfo | null>(null);

  useEffect(() => {
    const state = location.state as LocationState;
    
    if (state && state.tool && state.answers) {
      setTool(state.tool);
      setScore(state.score);
      setAnswers(state.answers);
    } else if (toolId) {
      const foundTool = getToolById(toolId);
      if (foundTool) {
        setTool(foundTool);
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [toolId, location.state, navigate]);

  if (!tool) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <Navigation />
        <div className="text-center mt-20">
          <div className="animate-spin h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading results...</p>
        </div>
      </div>
    );
  }

  const maxScore = tool.questions.reduce((sum, q) => {
    const maxVal = Math.max(...q.options.map(o => o.value));
    return sum + maxVal;
  }, 0);

  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  
  const getRiskLevel = (percentage: number) => {
    if (percentage >= 70) return "high";
    if (percentage >= 40) return "moderate"; 
    return "low";
  };

  const riskLevel = getRiskLevel(percentage);
  const recommendations = tool.recommendations?.[riskLevel as keyof typeof tool.recommendations];

  const promptPatientInfo = (): PatientInfo => {
    const name = window.prompt("Enter Patient's Full Name:", "") || "Not Provided";
    const age = window.prompt("Enter Patient's Age:", "") || "Not Provided";
    const sex = window.prompt("Enter Patient's Sex (Male/Female/Other):", "") || "Not Provided";
    const contactNumber = window.prompt("Enter Patient's Contact Number:", "") || "Not Provided";
    const dateOfBirth = window.prompt("Enter Patient's Date of Birth (DD/MM/YYYY):", "") || "Not Provided";
    
    return { name, age, sex, contactNumber, dateOfBirth };
  };

  const handlePrint = () => {
    if (!patientInfo) {
      const info = promptPatientInfo();
      setPatientInfo(info);
      
      // Wait for state update then print
      setTimeout(() => {
        window.print();
      }, 100);
    } else {
      window.print();
    }
  };

  const handleRetake = () => {
    navigate(`/quiz/${toolId}`);
  };

  const currentDate = new Date();
  const reportId = Math.random().toString(36).substr(2, 9).toUpperCase();

  // Get answered questions details
  const answeredQuestions = tool.questions.map(q => {
    const answerId = answers[q.id];
    const selectedOption = q.options.find(opt => opt.id === answerId);
    return {
      question: q.text,
      answer: selectedOption?.text || "Not answered",
      score: selectedOption?.value || 0
    };
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* PROFESSIONAL DENSE PRINT STYLES */}
      <style>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          body {
            margin: 0 !important;
            padding: 15mm !important;
            background: white !important;
            color: black !important;
            font-family: "Arial", sans-serif !important;
            font-size: 10pt !important;
            line-height: 1.3 !important;
          }
          
          .no-print {
            display: none !important;
          }
          
          .print-container {
            background: white !important;
            color: black !important;
          }
          
          .print-header {
            background: #2563eb !important;
            color: white !important;
            padding: 15px !important;
            margin-bottom: 10px !important;
            border-radius: 5px !important;
          }
          
          .print-title {
            font-size: 18pt !important;
            font-weight: bold !important;
            margin-bottom: 5px !important;
          }
          
          .print-subtitle {
            font-size: 11pt !important;
            opacity: 0.9 !important;
          }
          
          .info-section {
            background: #f8f9fa !important;
            border: 1px solid #dee2e6 !important;
            padding: 8px !important;
            margin-bottom: 8px !important;
            border-radius: 3px !important;
          }
          
          .info-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
            font-size: 9pt !important;
          }
          
          .info-row {
            display: flex !important;
            justify-content: space-between !important;
            padding: 2px 0 !important;
            border-bottom: 1px dotted #ccc !important;
          }
          
          .section-title {
            font-size: 12pt !important;
            font-weight: bold !important;
            color: #2563eb !important;
            margin: 10px 0 5px 0 !important;
            padding-bottom: 3px !important;
            border-bottom: 2px solid #2563eb !important;
          }
          
          .question-item {
            background: #f8f9fa !important;
            border-left: 3px solid #2563eb !important;
            padding: 6px !important;
            margin-bottom: 4px !important;
            font-size: 9pt !important;
          }
          
          .risk-display {
            text-align: center !important;
            background: #e9ecef !important;
            border: 2px solid #2563eb !important;
            padding: 15px !important;
            margin: 10px 0 !important;
            border-radius: 5px !important;
          }
          
          .recommendations-section {
            background: #fff3cd !important;
            border: 1px solid #ffc107 !important;
            padding: 10px !important;
            margin: 8px 0 !important;
            border-radius: 3px !important;
          }
          
          .recommendation-item {
            font-size: 9pt !important;
            margin-bottom: 3px !important;
            padding-left: 15px !important;
            position: relative !important;
          }
          
          .recommendation-item::before {
            content: "•" !important;
            position: absolute !important;
            left: 0 !important;
            color: #2563eb !important;
          }
          
          .disclaimer-box {
            background: #f8d7da !important;
            border: 1px solid #dc3545 !important;
            padding: 8px !important;
            margin: 8px 0 !important;
            border-radius: 3px !important;
            font-size: 8pt !important;
            line-height: 1.2 !important;
          }
          
          .footer {
            margin-top: 15px !important;
            padding-top: 10px !important;
            border-top: 2px solid #2563eb !important;
            font-size: 8pt !important;
            text-align: center !important;
            color: #666 !important;
          }
          
          @page {
            size: A4 !important;
            margin: 15mm !important;
          }
        }
      `}</style>
      
      <Navigation className="no-print" />
      
      <div className="pt-20 px-4 print:pt-0 print:px-0 print-container">
        {/* Print Header */}
        <div className="hidden print:block print-header">
          <div className="print-title">Medical Report - {tool.title}</div>
          <div className="print-subtitle">
            FitScan Health Assessment Platform • Report ID: {reportId} • Generated: {currentDate.toLocaleString()}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Navigation Header - Hidden in print */}
          <div className="flex items-center justify-between mb-8 no-print">
            <Button variant="outline" onClick={() => navigate("/")}>
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleRetake}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Retake Quiz
              </Button>
              <Button variant="outline" onClick={handlePrint}>
                <Download className="h-4 w-4 mr-2" />
                Print Results
              </Button>
            </div>
          </div>

          {/* Patient Information - Print Only */}
          {patientInfo && (
            <div className="hidden print:block info-section">
              <div className="section-title">Patient Information</div>
              <div className="info-grid">
                <div className="info-row"><strong>Name:</strong> {patientInfo.name}</div>
                <div className="info-row"><strong>Patient ID:</strong> {reportId}</div>
                <div className="info-row"><strong>Date of Birth:</strong> {patientInfo.dateOfBirth}</div>
                <div className="info-row"><strong>Date of Report:</strong> {currentDate.toLocaleDateString()}</div>
                <div className="info-row"><strong>Age:</strong> {patientInfo.age}</div>
                <div className="info-row"><strong>Referring Physician:</strong> Self-Assessment</div>
                <div className="info-row"><strong>Sex:</strong> {patientInfo.sex}</div>
                <div className="info-row"><strong>Specialty:</strong> {tool.category}</div>
                <div className="info-row"><strong>Contact:</strong> {patientInfo.contactNumber}</div>
                <div className="info-row"><strong>Contact Information:</strong> hollyman2313@gmail.com</div>
              </div>
            </div>
          )}

          {/* Assessment Introduction - Print Only */}
          <div className="hidden print:block info-section">
            <div className="section-title">Introduction</div>
            <p style={{ fontSize: '9pt', lineHeight: '1.3', margin: '0' }}>
              This medical report is prepared for {patientInfo?.name || '[Patient Name]'}, following their completion of 
              the {tool.title} assessment on {currentDate.toLocaleDateString()}. The purpose of this report is to document 
              the patient's current health status based on their self-reported symptoms and outline the recommended 
              management plan based on our findings.
            </p>
          </div>

          {/* Medical History - Print Only */}
          <div className="hidden print:block info-section">
            <div className="section-title">Medical History & Assessment Details</div>
            <p style={{ fontSize: '9pt', margin: '0 0 8px 0' }}>
              Patient completed a comprehensive {tool.difficulty.toLowerCase()} difficulty {tool.category.toLowerCase()} 
              assessment containing {tool.questions.length} questions with an estimated completion time of {tool.estimatedTime}. 
              Assessment focuses on {tool.description.toLowerCase()}.
            </p>
          </div>

          {/* Presenting Complaints - Print Only */}
          <div className="hidden print:block info-section">
            <div className="section-title">Presenting Complaints & Responses</div>
            {answeredQuestions.map((qa, index) => (
              <div key={index} className="question-item">
                <strong>Q{index + 1}:</strong> {qa.question}
                <br />
                <strong>Response:</strong> {qa.answer} <span style={{ color: '#666', fontSize: '8pt' }}>(Score: {qa.score})</span>
              </div>
            ))}
          </div>

          {/* Results Display */}
          <Card className="mb-8 print:hidden">
            <CardHeader>
              <CardTitle className="text-xl">Assessment Results Summary</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center py-8">
              <div className="text-center">
                <CircularRiskIndicator percentage={percentage} riskLevel={riskLevel} />
                <div className="mt-6 text-center">
                  <div className="text-sm text-muted-foreground mb-2">
                    <strong>Final Score:</strong> {score} out of {maxScore} points ({percentage}%)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Print Results Summary */}
          <div className="hidden print:block risk-display">
            <div className="section-title" style={{ margin: '0 0 10px 0', border: 'none' }}>Assessment Results Summary</div>
            <CircularRiskIndicator percentage={percentage} riskLevel={riskLevel} />
            <div style={{ marginTop: '10px', fontSize: '10pt' }}>
              <strong>Final Score:</strong> {score} out of {maxScore} points ({percentage}%)
            </div>
          </div>

          {/* Diagnostic Tests - Print Only */}
          <div className="hidden print:block info-section">
            <div className="section-title">Diagnostic Tests Conducted</div>
            <div style={{ fontSize: '9pt' }}>
              • Comprehensive {tool.category} Symptom Assessment ({tool.questions.length} parameters)
              <br />
              • Risk Stratification Analysis (Scoring Algorithm Applied)
              <br />
              • Symptom Severity Evaluation (Scale: 0-{tool.questions.reduce((sum, q) => sum + Math.max(...q.options.map(o => o.value)), 0)})
              <br />
              • Clinical Decision Support System Analysis
            </div>
          </div>

          {/* Treatment Plan & Recommendations */}
          {recommendations && (
            <>
              <Card className="mb-8 print:hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {riskLevel === 'high' && <AlertCircle className="h-5 w-5 text-red-600" />}
                    {riskLevel === 'moderate' && <AlertTriangle className="h-5 w-5 text-yellow-600" />}
                    {riskLevel === 'low' && <CheckCircle className="h-5 w-5 text-green-600" />}
                    {recommendations.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed mb-6">
                    {recommendations.advice}
                  </p>
                  <h4 className="font-semibold text-foreground mb-4">Recommended Actions:</h4>
                  <ul className="space-y-3">
                    {recommendations.suggestions.map((suggestion, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-foreground leading-relaxed">{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Print Recommendations */}
              <div className="hidden print:block recommendations-section">
                <div className="section-title">{recommendations.title}</div>
                <div style={{ fontSize: '9pt', marginBottom: '8px' }}>
                  <strong>Assessment Summary:</strong> {recommendations.advice}
                </div>
                <div>
                  <strong style={{ fontSize: '10pt' }}>Recommended Treatment Plan:</strong>
                  {recommendations.suggestions.map((suggestion, index) => (
                    <div key={index} className="recommendation-item">
                      {suggestion}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Follow-up Plan - Print Only */}
          <div className="hidden print:block info-section">
            <div className="section-title">Follow-up Plan & Monitoring</div>
            <div style={{ fontSize: '9pt' }}>
              • Patient advised to follow recommended treatment plan as outlined above
              <br />
              • Regular monitoring of symptoms and progress assessment recommended
              <br />
              • Follow-up consultation scheduled as per physician's recommendation
              <br />
              • Patient education provided regarding condition management and prevention
              <br />
              • Emergency contact information provided for urgent concerns
            </div>
          </div>

          {/* Medical Disclaimer */}
          <Card className="mb-8 print:hidden">
            <CardHeader>
              <CardTitle className="text-red-600 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Medical Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm leading-relaxed">
                <p><strong>Important Notice:</strong> This health assessment is for informational and educational purposes only. 
                It should not be used as a substitute for professional medical advice, diagnosis, or treatment. 
                Always consult with a qualified healthcare provider for proper medical evaluation and treatment recommendations.</p>
              </div>
            </CardContent>
          </Card>

          {/* Print Disclaimer */}
          <div className="hidden print:block disclaimer-box">
            <strong>Medical Disclaimer:</strong> This assessment is for informational purposes only and should not replace 
            professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider for 
            proper medical evaluation. If experiencing a medical emergency, call emergency services immediately.
            <br /><br />
            <strong>Accuracy Note:</strong> While based on established medical guidelines, individual results may vary. 
            This tool does not replace clinical judgment or comprehensive medical evaluation by healthcare professionals.
          </div>

          {/* Action Buttons - Hidden in print */}
          <div className="text-center pb-8 no-print">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate("/")}>
                Take Another Assessment
              </Button>
              <Button size="lg" variant="outline" onClick={handleRetake}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Retake This Quiz
              </Button>
            </div>
          </div>

          {/* Professional Footer */}
          <div className="hidden print:block footer">
            <div><strong>FitScan Health Assessment Platform</strong></div>
            <div>Professional Health Screening & Diagnostic Tools</div>
            <div>Visit: www.fitscan.life | Contact: hollyman2313@gmail.com | Developer: BroxGit</div>
            <div>Report Generated: {currentDate.toLocaleString()} | This report contains confidential medical information</div>
          </div>
        </div>
      </div>
    </div>
  );
}
