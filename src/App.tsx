
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
import ResearchSections from "./pages/ResearchSections";
import EpigeneticClock from "./pages/EpigeneticClock";
import SemanticNetwork from "./pages/SemanticNetwork";
import FhePrivacy from "./pages/FhePrivacy";
import KnowledgePlatform from "./pages/KnowledgePlatform";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Removed global LifeScienceBackground since it's now specific to certain sections */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ambassador" element={<Ambassador />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/community" element={<Community />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/research" element={<ResearchFocus />} />
          <Route path="/research-sections" element={<ResearchSections />} />
          <Route path="/epigenetic-clock" element={<EpigeneticClock />} />
          <Route path="/semantic-network" element={<SemanticNetwork />} />
          <Route path="/fhe-privacy" element={<FhePrivacy />} />
          <Route path="/knowledge-platform" element={<KnowledgePlatform />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
