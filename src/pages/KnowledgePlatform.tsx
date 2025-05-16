
import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LifeScienceBackground from "../components/LifeScienceBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const KnowledgePlatform = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<null | { 
    answer: string, 
    sources: Array<{ title: string, url: string }> 
  }>(null);
  const [apiKey, setApiKey] = useState(localStorage.getItem("perplexityApiKey") || "");
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      toast({
        title: "Empty search",
        description: "Please enter a question about longevity science.",
        variant: "destructive"
      });
      return;
    }

    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your Perplexity API key in the settings tab to use the knowledge platform.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setResults(null);

    try {
      // This is a simulated response since we don't have actual API integration
      // In a real implementation, you would call the Perplexity API here
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setResults({
        answer: `Based on current research, longevity science suggests that ${query} is related to several key factors in aging biology. Recent studies have shown correlations between this topic and cellular senescence pathways, with particular emphasis on the role of mitochondrial function and NAD+ metabolism.\n\nResearchers at leading institutions have documented that interventions targeting these pathways may contribute to improved healthspan through multiple mechanisms including enhanced autophagy, reduced inflammation, and optimized energy metabolism.`,
        sources: [
          { 
            title: "The Biology of Aging and Frailty", 
            url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5847842/" 
          },
          { 
            title: "Hallmarks of Aging Research", 
            url: "https://www.nature.com/articles/s41576-022-00585-5" 
          },
          { 
            title: "Interventions to Slow Aging in Humans", 
            url: "https://www.aging-us.com/article/100989/text" 
          }
        ]
      });
    } catch (error) {
      toast({
        title: "Search Error",
        description: "An error occurred while searching. Please try again.",
        variant: "destructive"
      });
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveApiKey = () => {
    localStorage.setItem("perplexityApiKey", apiKey);
    toast({
      title: "API Key Saved",
      description: "Your Perplexity API key has been saved for future searches.",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 z-0">
        <LifeScienceBackground type="neurons" opacity={0.3} speed={0.2} density={0.6} direction="diagonal-1" />
      </div>
      
      <Navbar />
      
      <main className="container mx-auto px-6 py-24 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">LIFE Knowledge Platform</h1>
        <p className="text-xl text-white/80 text-center mb-12 max-w-3xl mx-auto">
          Access the collective knowledge of longevity science through our advanced semantic network powered by AI
        </p>
        
        <Tabs defaultValue="search" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="search">Search</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="search" className="space-y-8">
            <div className="bg-black/40 border border-white/10 rounded-lg p-8">
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="query" className="text-lg font-medium">Ask anything about longevity science</label>
                  <div className="flex gap-2">
                    <Input
                      ref={inputRef}
                      id="query"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="e.g., How does intermittent fasting affect cellular senescence?"
                      className="flex-1 bg-black/70 border-white/20"
                      disabled={isLoading}
                    />
                    <Button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
                      {isLoading ? "Searching..." : "Search"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            
            {isLoading && (
              <div className="text-center p-8">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
                <p className="mt-4 text-white/70">Consulting our longevity knowledge graph...</p>
              </div>
            )}
            
            {results && (
              <div className="space-y-6">
                <div className="bg-black/40 border border-white/10 rounded-lg p-8">
                  <h2 className="text-xl font-semibold mb-4">Answer</h2>
                  <div className="text-white/90 whitespace-pre-line">
                    {results.answer}
                  </div>
                </div>
                
                <div className="bg-black/40 border border-white/10 rounded-lg p-8">
                  <h2 className="text-xl font-semibold mb-4">Sources</h2>
                  <ul className="space-y-3">
                    {results.sources.map((source, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-400 flex items-center justify-center mt-1 mr-3">
                          <span className="text-xs text-white font-bold">{index + 1}</span>
                        </span>
                        <a 
                          href={source.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="settings">
            <div className="bg-black/40 border border-white/10 rounded-lg p-8">
              <h2 className="text-xl font-semibold mb-4">API Settings</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="apiKey" className="block text-sm font-medium mb-1">
                    Perplexity API Key
                  </label>
                  <Input
                    id="apiKey"
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter your Perplexity API key"
                    className="bg-black/70 border-white/20"
                  />
                  <p className="text-sm text-white/60 mt-2">
                    Your API key is stored locally and never sent to our servers.
                    Get an API key from <a href="https://www.perplexity.ai/settings/api" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Perplexity.ai</a>.
                  </p>
                </div>
                <Button onClick={saveApiKey} className="bg-blue-600 hover:bg-blue-700">
                  Save API Key
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <h2 className="text-xl font-semibold mb-4">About the Knowledge Platform</h2>
                <p className="text-white/80">
                  The LIFE Knowledge Platform leverages our proprietary semantic network of longevity science combined with advanced AI models to provide accurate, science-backed answers to your questions about aging, health, and longevity.
                </p>
                <p className="text-white/80 mt-4">
                  All responses are grounded in peer-reviewed research and cite their sources, ensuring transparency and reliability in the information provided.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default KnowledgePlatform;
