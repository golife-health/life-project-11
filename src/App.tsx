
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Ambassador from "./pages/Ambassador";
import Docs from "./pages/Docs";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import Whitepaper from "./pages/Whitepaper";
import Manifesto from "./pages/Manifesto";
import ResearchFocus from "./pages/ResearchFocus";
import LifeScienceBackground from "./components/LifeScienceBackground";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LifeScienceBackground type="mixed" opacity={0.12} speed={0.4} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ambassador" element={<Ambassador />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/community" element={<Community />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/research" element={<ResearchFocus />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
