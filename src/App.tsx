import { useState } from 'react';
import ToolCard from '@/components/ToolCard';
import QuizModal from '@/components/QuizModal';
import { healthTools, getToolById, type HealthTool } from '@/data/tools';

function App() {
  const [selectedTool, setSelectedTool] = useState<HealthTool | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartTool = (toolId: string) => {
    const tool = getToolById(toolId);
    if (tool) {
      setSelectedTool(tool);
      setShowQuiz(true);
    }
  };

  const handleCloseQuiz = () => {
    setShowQuiz(false);
    setSelectedTool(null);
  };

  const handleQuizComplete = (score: number, answers: Record<string, string>) => {
    console.log('Quiz completed:', { score, answers });
    // Handle completion logic here
    setShowQuiz(false);
    setSelectedTool(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">FitScan Health Assessment</h1>
          <p className="text-lg text-muted-foreground">
            Choose from our range of specialized health checkers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthTools.map((tool) => (
            <ToolCard
              key={tool.id}
              id={tool.id}
              title={tool.title}
              description={tool.description}
              category={tool.category}
              difficulty={tool.difficulty}
              estimatedTime={tool.estimatedTime}
              icon={tool.icon}
              onStartTool={handleStartTool}
            />
          ))}
        </div>

        {showQuiz && selectedTool && (
          <QuizModal
            tool={selectedTool}
            onClose={handleCloseQuiz}
            onComplete={handleQuizComplete}
          />
        )}
      </div>
    </div>
  );
}

export default App;
