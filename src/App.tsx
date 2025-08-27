import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ToolPage from "./pages/ToolPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            
            {/* Individual routes for each health tool */}
            <Route path="/anemia-checker" element={<ToolPage />} />
            <Route path="/diabetes-checker" element={<ToolPage />} />
            <Route path="/pcos-checker" element={<ToolPage />} />
            <Route path="/asthma-checker" element={<ToolPage />} />
            <Route path="/depression-checker" element={<ToolPage />} />
            <Route path="/anxiety-checker" element={<ToolPage />} />
            <Route path="/ibs-checker" element={<ToolPage />} />
            <Route path="/covid-checker" element={<ToolPage />} />
            <Route path="/food-poisoning-checker" element={<ToolPage />} />
            <Route path="/gastroenteritis-checker" element={<ToolPage />} />
            <Route path="/heart-disease-checker" element={<ToolPage />} />
            <Route path="/heart-attack-checker" element={<ToolPage />} />
            <Route path="/arthritis-checker" element={<ToolPage />} />
            <Route path="/dizziness-checker" element={<ToolPage />} />
            <Route path="/uti-checker" element={<ToolPage />} />
            
            {/* Fallback route for any other tool slugs */}
            <Route path="/:toolSlug" element={<ToolPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
