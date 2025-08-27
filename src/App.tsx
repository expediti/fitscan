import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "@/contexts/QuizContext";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <QuizProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              
              {/* Quiz routes - multipage style */}
              <Route path="/quiz/anxiety-checker" element={<QuizPage />} />
              <Route path="/quiz/asthma-checker" element={<QuizPage />} />
              <Route path="/quiz/covid-checker" element={<QuizPage />} />
              <Route path="/quiz/diabetes-checker" element={<QuizPage />} />
              <Route path="/quiz/heart-disease-checker" element={<QuizPage />} />
              <Route path="/quiz/depression-checker" element={<QuizPage />} />
              <Route path="/quiz/ibs-checker" element={<QuizPage />} />
              <Route path="/quiz/food-poisoning-checker" element={<QuizPage />} />
              <Route path="/quiz/gastroenteritis-checker" element={<QuizPage />} />
              <Route path="/quiz/arthritis-checker" element={<QuizPage />} />
              <Route path="/quiz/dizziness-checker" element={<QuizPage />} />
              <Route path="/quiz/uti-checker" element={<QuizPage />} />
              <Route path="/quiz/anemia-checker" element={<QuizPage />} />
              <Route path="/quiz/pcos-checker" element={<QuizPage />} />
              <Route path="/quiz/heart-attack-checker" element={<QuizPage />} />
              
              {/* Results routes */}
              <Route path="/results/anxiety-checker" element={<ResultsPage />} />
              <Route path="/results/asthma-checker" element={<ResultsPage />} />
              <Route path="/results/covid-checker" element={<ResultsPage />} />
              <Route path="/results/diabetes-checker" element={<ResultsPage />} />
              <Route path="/results/heart-disease-checker" element={<ResultsPage />} />
              <Route path="/results/depression-checker" element={<ResultsPage />} />
              <Route path="/results/ibs-checker" element={<ResultsPage />} />
              <Route path="/results/food-poisoning-checker" element={<ResultsPage />} />
              <Route path="/results/gastroenteritis-checker" element={<ResultsPage />} />
              <Route path="/results/arthritis-checker" element={<ResultsPage />} />
              <Route path="/results/dizziness-checker" element={<ResultsPage />} />
              <Route path="/results/uti-checker" element={<ResultsPage />} />
              <Route path="/results/anemia-checker" element={<ResultsPage />} />
              <Route path="/results/pcos-checker" element={<ResultsPage />} />
              <Route path="/results/heart-attack-checker" element={<ResultsPage />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
            <Sonner />
          </BrowserRouter>
        </QuizProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
