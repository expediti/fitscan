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

// Custom Circular Progress Component (No Package Needed)
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
  
  const radius = 70;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-6 print:gap-4">
      <div className="relative print:scale-75">
        {/* SVG Circular Progress */}
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          {/* Background Circle */}
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* Progress Circle */}
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
        
        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon className="h-8 w-8 mb-2 print:h-6 print:w-6" style={{ color: config.color }} />
          <div className="text-2xl font-bold print:text-xl" style={{ color: config.color }}>
            {percentage}%
          </div>
        </div>
      </div>
      
      {/* Risk Label */}
      <div 
        className="px-6 py-3 rounded-full text-sm font-bold tracking-wide print:px-4 print:py-2 print:text-xs"
        style={{ 
          backgroundColor: config.bgColor, 
          color: config.color,
          border: `2px solid ${config.color}40`
        }}
      >
        {config.label}
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

  const getRiskLevelDisplay = (level: string) => {
    const displays = {
      high: { 
        level: "High", 
        description: "Significant symptoms detected" 
      },
      moderate: { 
        level: "Moderate", 
        description: "Some concerning symptoms" 
      },
      low: { 
        level: "Low", 
        description: "Few or mild symptoms" 
      }
    };
    return displays[level as keyof typeof displays] || displays.low;
  };

  const riskLevel = getRiskLevel(percentage);
  const riskDisplay = getRiskLevelDisplay(riskLevel);
  const recommendations = tool.recommendations?.[riskLevel as keyof typeof tool.recommendations];

  const handlePrint = () => {
    window.print();
  };

  const handleRetake = () => {
    navigate(`/quiz/${toolId}`);
  };

  const currentDate = new Date();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Professional Print Styles */}
      <style jsx>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          body {
            margin: 0 !important;
            padding: 2cm !important;
            background: white !important;
            color: black !important;
            font-family: "Times New Roman", serif !important;
            font-size: 12pt !important;
            line-height: 1.6 !important;
          }
          
          .no-print {
            display: none !important;
          }
          
          .print-header {
            display: block !important;
            margin-bottom: 2rem !important;
            padding-bottom: 1rem !important;
            border-bottom: 3px solid #2563eb !important;
          }
          
          .print-title {
            font-size: 24pt !important;
            font-weight: bold !important;
            color: #1e40af !important;
            margin-bottom: 0.5rem !important;
            text-align: center !important;
          }
          
          .print-subtitle {
            font-size: 14pt !important;
            color: #6b7280 !important;
            text-align: center !important;
          }
          
          .print-date {
            font-size: 10pt !important;
            color: #6b7280 !important;
            text-align: right !important;
            margin-top: 1rem !important;
          }
          
          .card {
            box-shadow: none !important;
            border: 1px solid #d1d5db !important;
            border-radius: 8px !important;
            margin-bottom: 1.5rem !important;
            padding: 1.5rem !important;
            background: white !important;
            break-inside: avoid !important;
          }
          
          .card-title {
            font-size: 16pt !important;
            font-weight: bold !important;
            color: #1f2937 !important;
            margin-bottom: 1rem !important;
            padding-bottom: 0.5rem !important;
            border-bottom: 1px solid #e5e7eb !important;
          }
          
          .recommendations-list {
            list-style: none !important;
            padding-left: 0 !important;
          }
          
          .recommendations-list li {
            margin-bottom: 0.75rem !important;
            padding-left: 1.5rem !important;
            position: relative !important;
          }
          
          .recommendations-list li::before {
            content: "•" !important;
            color: #2563eb !important;
            font-weight: bold !important;
            position: absolute !important;
            left: 0 !important;
          }
          
          .risk-score {
            text-align: center !important;
            padding: 2rem !important;
            background: #f9fafb !important;
            border-radius: 8px !important;
            border: 2px solid #e5e7eb !important;
          }
          
          .disclaimer {
            background: #fef3cd !important;
            border: 1px solid #fbbf24 !important;
            border-radius: 8px !important;
            padding: 1rem !important;
            font-size: 11pt !important;
            line-height: 1.4 !important;
          }
          
          .print-footer {
            display: block !important;
            margin-top: 3rem !important;
            padding-top: 1rem !important;
            border-top: 1px solid #d1d5db !important;
            font-size: 10pt !important;
            color: #6b7280 !important;
            text-align: center !important;
          }
          
          .page-break {
            page-break-before: always !important;
          }
          
          @page {
            size: A4 !important;
            margin: 2cm !important;
          }
          
          h1, h2, h3, h4 {
            color: black !important;
          }
          
          svg {
            print-color-adjust: exact !important;
          }
        }
      `}</style>
      
      <Navigation className="no-print" />
      
      <div className="pt-20 px-4 print:pt-0 print:px-0">
        {/* Print Header - Only visible when printing */}
        <div className="hidden print:block print-header">
          <div className="print-title">FitScan Health Assessment Report</div>
          <div className="print-subtitle">Professional Health Screening Results</div>
          <div className="print-date">
            Generated: {currentDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
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

          {/* Results Header */}
          <div className="text-center mb-8 print:mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 print:text-2xl print:mb-4">
              {tool.title} Results
            </h1>
            <p className="text-muted-foreground print:text-black">{riskDisplay.description}</p>
          </div>

          {/* Patient Information Card - Print Only */}
          <Card className="mb-8 hidden print:block">
            <CardHeader>
              <CardTitle className="card-title">Assessment Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong>Assessment Type:</strong> {tool.title}</div>
                <div><strong>Category:</strong> {tool.category}</div>
                <div><strong>Difficulty Level:</strong> {tool.difficulty}</div>
                <div><strong>Estimated Time:</strong> {tool.estimatedTime}</div>
                <div><strong>Total Questions:</strong> {tool.questions.length}</div>
                <div><strong>Assessment Date:</strong> {currentDate.toLocaleDateString()}</div>
              </div>
            </CardContent>
          </Card>

          {/* Circular Risk Display */}
          <Card className="mb-8">
            <CardHeader className="print:pb-2">
              <CardTitle className="text-xl print:card-title">Assessment Results Summary</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center py-8 print:py-4">
              <div className="risk-score">
                <CircularRiskIndicator percentage={percentage} riskLevel={riskLevel} />
                <div className="mt-6 print:mt-4 text-center">
                  <div className="text-sm text-muted-foreground print:text-black mb-2">
                    <strong>Final Score:</strong> {score} out of {maxScore} points ({percentage}%)
                  </div>
                  <div className="text-xs text-muted-foreground print:text-gray-600">
                    Assessment: {tool.title}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tool-Specific Recommendations */}
          {recommendations && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 print:card-title">
                  {riskLevel === 'high' && <AlertCircle className="h-5 w-5 text-red-600" />}
                  {riskLevel === 'moderate' && <AlertTriangle className="h-5 w-5 text-yellow-600" />}
                  {riskLevel === 'low' && <CheckCircle className="h-5 w-5 text-green-600" />}
                  {recommendations.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6 print:mb-4">
                  <h4 className="font-semibold text-foreground mb-3 print:text-black print:text-sm">
                    Assessment Summary:
                  </h4>
                  <p className="text-foreground leading-relaxed print:text-black print:text-sm">
                    {recommendations.advice}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-4 print:text-black print:text-sm">
                    Recommended Actions:
                  </h4>
                  <ul className="recommendations-list">
                    {recommendations.suggestions.map((suggestion, index) => (
                      <li key={index} className="text-sm text-foreground leading-relaxed print:text-black print:text-xs">
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Medical Disclaimer */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-red-600 flex items-center gap-2 print:card-title print:text-black">
                <AlertTriangle className="h-5 w-5" />
                Medical Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="disclaimer">
                <p className="text-sm leading-relaxed print:text-xs">
                  <strong>Important Notice:</strong> This health assessment is for informational and educational purposes only. 
                  It should not be used as a substitute for professional medical advice, diagnosis, or treatment. 
                  Always consult with a qualified healthcare provider for proper medical evaluation and treatment recommendations. 
                  If you are experiencing a medical emergency, call your local emergency services immediately (911 in the US).
                </p>
                <p className="text-sm leading-relaxed mt-3 print:text-xs print:mt-2">
                  <strong>Accuracy Disclaimer:</strong> While this assessment is based on established medical guidelines, 
                  individual results may vary. This tool does not replace clinical judgment or comprehensive medical evaluation 
                  by healthcare professionals.
                </p>
              </div>
            </CardContent>
          </Card>

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

          {/* Professional Print Footer */}
          <div className="print-footer">
            <div className="text-center">
              <div className="font-bold text-blue-600 mb-2">FitScan Health Assessment Platform</div>
              <div className="mb-2">Professional Health Screening & Diagnostic Tools</div>
              <div className="mb-2">Report Generated: {currentDate.toLocaleString()}</div>
              <div className="mb-2">Visit: www.fitscan.life | Contact: hollyman2313@gmail.com</div>
              <div className="text-xs mt-3 pt-2 border-t border-gray-300">
                This report was generated using evidence-based health assessment algorithms. 
                For medical concerns, please consult with qualified healthcare professionals.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
