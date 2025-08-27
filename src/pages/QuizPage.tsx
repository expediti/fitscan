import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { getToolById, HealthTool, Option } from "@/data/tools";
import { useQuiz } from "@/contexts/QuizContext";

export default function QuizPage() {
  const { toolId } = useParams<{ toolId: string }>();
  const navigate = useNavigate();
  const { quizState, setToolId, setAnswer, setScore, setTotalQuestions, setCurrentQuestion } = useQuiz();
  
  const [tool, setTool] = useState<HealthTool | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setLocalAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    if (toolId) {
      const foundTool = getToolById(toolId);
      if (foundTool) {
        setTool(foundTool);
        setToolId(toolId);
        setTotalQuestions(foundTool.questions.length);
        setCurrentQuestion(0);
        setCurrentQuestionIndex(0);
      } else {
        navigate("/");
      }
    }
  }, [toolId, setToolId, setTotalQuestions, setCurrentQuestion, navigate]);

  useEffect(() => {
    // Load previous answer when question changes
    if (tool && tool.questions[currentQuestionIndex]) {
      const questionId = tool.questions[currentQuestionIndex].id;
      const previousAnswer = answers[questionId] || "";
      setSelectedOption(previousAnswer);
    }
  }, [currentQuestionIndex, tool, answers]);

  if (!tool) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading assessment...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = tool.questions[currentQuestionIndex];
  const isFirst = currentQuestionIndex === 0;
  const isLast = currentQuestionIndex === tool.questions.length - 1;
  const canNext = selectedOption !== "";
  const progress = ((currentQuestionIndex + 1) / tool.questions.length) * 100;

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (!canNext) return;

    // Save current answer
    const newAnswers = { ...answers, [currentQuestion.id]: selectedOption };
    setLocalAnswers(newAnswers);
    setAnswer(currentQuestion.id, selectedOption);

    if (isLast) {
      // Calculate final score
      const totalScore = tool.questions.reduce((score, q) => {
        const answerId = newAnswers[q.id];
        const option = q.options.find(opt => opt.id === answerId);
        return score + (option?.value || 0);
      }, 0);

      setScore(total
