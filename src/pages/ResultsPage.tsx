import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Home, Download, RotateCcw, CheckCircle, AlertTriangle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Navigation from "@/components/Navigation";
import { getToolById, HealthTool } from "@/data/tools";

interface LocationState {
  answers: Record<string, string>;
  score: number;
  tool: HealthTool;
}

// Circular Risk Component
const CircularRiskIndicator = ({ percentage, riskLevel }: { percentage: number; riskLevel: string }) => {
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

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <div style={{ width: 160, height: 160 }}>
          <CircularProgressbar
            value={percentage}
            strokeWidth={12}
            styles={buildStyles({
              pathColor: config.color,
              trailColor: '#e5e7eb',
              strokeLinecap: 'round',
              pathTransitionDuration: 1.5,
            })}
          />
        </div>
        
        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon className="h-8 w-8 mb-2" style={{ color: config.color }} />
          <div className="text-2xl font-bold" style={{ color: config.color }}>
            {percentage}%
          </div>
        </div>
      </div>
      
      {/* Risk Label */}
      <div 
        className="px-4 py-2 rounded-full text-sm font-semibold"
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-20 px-4 print:pt-4">
        <div className="max-w-4xl mx-auto">
          {/* Navigation Header */}
          <div className="flex items-center justify-between mb-8 print:hidden">
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
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {tool.title} Results
            </h1>
            <p className="text-muted-foreground">{riskDisplay.description}</p>
          </div>

          {/* Circular Risk Display */}
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Your Assessment Results</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center py-8">
              <CircularRiskIndicator percentage={percentage} riskLevel={riskLevel} />
            </CardContent>
            <CardContent className="text-center pt-0">
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>Score: {score} / {maxScore}</span>
                <span>•</span>
                <span>Assessment: {tool.title}</span>
              </div>
            </CardContent>
          </Card>

          {/* Tool-Specific Recommendations */}
          {recommendations && (
            <Card className="mb-8">
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
          )}

          {/* Disclaimer */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-red-600 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Important Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This assessment is for informational purposes only and should not replace professional medical advice, diagnosis, or treatment. 
                Always consult with a qualified healthcare provider for proper diagnosis and treatment. If you are experiencing a medical emergency, 
                call your local emergency services immediately.
              </p>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="text-center pb-8 print:hidden">
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

          {/* Print Footer */}
          <div className="hidden print:block text-center text-sm text-muted-foreground border-t pt-4 mt-8">
            <p>Generated by FitScan Health Assessment Platform</p>
            <p>Date: {new Date().toLocaleDateString()}</p>
            <p>Visit: {window.location.origin}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
