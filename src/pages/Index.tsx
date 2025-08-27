import { useState, useEffect } from "react";
import { Search, Filter, Stethoscope, Users, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ToolCard from "@/components/ToolCard";
import QuizModal from "@/components/QuizModal";
import { healthTools, categories, HealthTool, getToolById } from "@/data/tools";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTool, setSelectedTool] = useState<HealthTool | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const navigate = useNavigate();

  const filteredTools = healthTools.filter((tool) => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleStartTool = (toolId: string) => {
    console.log("Starting tool:", toolId);
    const tool = getToolById(toolId);
    if (tool) {
      setSelectedTool(tool);
      setShowQuiz(true);
    } else {
      console.error("Tool not found:", toolId);
      navigate(`/${toolId}`);
    }
  };

  const handleCloseQuiz = () => {
    setShowQuiz(false);
    setSelectedTool(null);
  };

  const handleQuizComplete = (score: number, answers: Record<string, string>) => {
    console.log('Quiz completed:', { 
      tool: selectedTool?.title, 
      score, 
      maxScore: selectedTool?.questions.reduce((sum, q) => sum + Math.max(...q.options.map(o => o.value)), 0),
      answers 
    });
    setShowQuiz(false);
    setSelectedTool(null);
  };

  const stats = [
    { icon: Stethoscope, label: "Health Tools", value: "15+" },
    { icon: Users, label: "Users Helped", value: "10K+" },
    { icon: Award, label: "Accuracy Rate", value: "95%" },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
              <Stethoscope className="w-4 h-4 mr-2" />
              AI-Powered Health Assessments
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Health,
              <span className="text-blue-600"> Analyzed Instantly</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get instant, accurate health assessments with our AI-powered symptom checkers and diagnostic tools
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-2 mx-auto">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Health Assessment Tools
              </h2>
              <p className="text-xl text-gray-600">
                Choose from our comprehensive collection of symptom checkers and health assessments
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search health tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/10"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools Grid */}
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map((tool) => (
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
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">No tools found matching your criteria.</div>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of users who trust FitScan for their health assessments
            </p>
            <Button size="lg" variant="secondary" className="text-blue-600">
              Get Started Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>

      {/* Quiz Modal */}
      {showQuiz && selectedTool && (
        <QuizModal
          tool={selectedTool}
          onClose={handleCloseQuiz}
          onComplete={handleQuizComplete}
        />
      )}
    </>
  );
};

export default Index;
