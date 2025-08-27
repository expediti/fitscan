import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Home, Share2, Download, RotateCcw, Activity } from "lucide-react";
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
      // Use state from navigation
      setTool(state.tool);
      setScore(state.score);
      setAnswers(state.answers);
    } else if (toolId) {
      // Fallback - get tool by ID
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
    if (percentage >= 70) return { level: "High", color: "text-red-600 bg-red-50", description: "Significant symptoms detected" };
    if (percentage >= 40) return { level: "Moderate", color: "text-yellow-600 bg-yellow-50", description: "Some concerning symptoms" };
    return { level: "Low", color: "text-green-600 bg-green-50", description: "Few or mild symptoms" };
  };

  const risk = getRiskLevel(percentage);

  const getRecommendations = () => {
    if (percentage >= 70) {
      return "We strongly recommend consulting with a healthcare professional soon for a proper evaluation.";
    } else if (percentage >= 40) {
      return "Consider discussing these symptoms with your healthcare provider if they persist.";
    }
    return "Continue monitoring your health and maintain healthy lifestyle choices.";
  };

  const handlePrint = () => {
    window.print();
  };

  const handleTakeAnother = () => {
    navigate("/");
  };

  const handleRetake = () => {
    navigate(`/quiz/${toolId}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Print-friendly header */}
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
            <Badge className={`${risk.color} px-4 py-2 text-sm font-medium mb-4`}>
              {risk.level} Risk Level
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {tool.title} Results
            </h1>
            <p className="text-muted-foreground">{risk.description}</p>
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
              <div className={`inline-block px-4 py-2 rounded-full ${risk.color} font-medium`}>
                <Activity className="h-4 w-4 inline mr-2" />
                {risk.level} Risk
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed mb-4">
                {getRecommendations()}
              </p>
              
              {percentage >= 40 && (
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                    Next Steps:
                  </h4>
                  <ul className="text-amber-700 dark:text-amber-400 text-sm space-y-1">
                    <li>• Keep track of your symptoms</li>
                    <li>• Note any changes or worsening</li>
                    <li>• Schedule a consultation with your doctor</li>
                    <li>• Bring these results to your appointment</li>
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-red-600">Important Disclaimer</CardTitle>
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
              <Button size="lg" onClick={handleTakeAnother}>
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
