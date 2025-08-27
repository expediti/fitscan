import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Home, Download, RotateCcw, Activity, CheckCircle, AlertTriangle, AlertCircle } from "lucide-react";
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
        color: "text-red-600 bg-red-50 border-red-200", 
        icon: AlertCircle,
        description: "Significant symptoms detected" 
      },
      moderate: { 
        level: "Moderate", 
        color: "text-yellow-600 bg-yellow-50 border-yellow-200", 
        icon: AlertTriangle,
        description: "Some concerning symptoms" 
      },
      low: { 
        level: "Low", 
        color: "text-green-600 bg-green-50 border-green-200", 
        icon: CheckCircle,
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
            <Badge className={`${riskDisplay.color} border px-4 py-2 text-sm font-medium mb-4`}>
              <riskDisplay.icon className="h-4 w-4 mr-2" />
              {riskDisplay.level} Risk Level
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {tool.title} Results
            </h1>
            <p className="text-muted-foreground">{riskDisplay.description}</p>
          </div>

          {/* Score Card */}
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Your Assessment Score</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="text-6xl font-bold text-primary mr-2">{score}</div>
                <div className="text-2xl text-muted-foreground">/ {maxScore}</div>
              </div>
              <div className="text-lg text-muted-foreground mb-2">
                {percentage}% of maximum score
              </div>
              <div className={`inline-flex items-center px-4 py-2 rounded-full border ${riskDisplay.color} font-medium`}>
                <Activity className="h-4 w-4 mr-2" />
                {riskDisplay.level} Risk
              </div>
            </CardContent>
          </Card>

          {/* Tool-Specific Recommendations */}
          {recommendations && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <riskDisplay.icon className="h-5 w-5" />
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
