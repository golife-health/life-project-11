
import React, { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import LifeScienceBackground from "./LifeScienceBackground";

// Data for the carousel slides
const coreConceptsData = [
  {
    id: "semantic-network",
    title: "Advanced Semantic Network of Longevity",
    teaser: "Transforming Community Wellness Data into Science-Backed Longevity Insights",
    quote: "From data points to discovery pathways.",
    content: "Lifespan isn't a single pathway but a vast, interwoven network of genes, proteins, metabolites, and lifestyle factors. Our Advanced Semantic Network layers multi-omics data, clinical trials, and real-world health metrics into a living knowledge graph—turning terabytes of longevity research into actionable insights.",
    image: "/lovable-uploads/42fe981d-ea03-4f5b-8898-8dafe5c17b21.png",
    alt: "Network graph visualization of connected nodes representing the longevity network"
  },
  {
    id: "fhe-privacy",
    title: "Privacy Preserving through FHE",
    teaser: "Keep your personal health metrics encrypted end-to-end while unlocking AI-powered insights.",
    quote: "Privacy and progress—together at last.",
    content: "We believe your health journey is confidential. That's why Life Project integrates Fully Homomorphic Encryption (FHE)—a breakthrough that lets you store, compute on, and share encrypted health metrics without ever decrypting them on our servers.",
    image: "/lovable-uploads/8e20e5db-de2c-424a-b278-ced419dbcb21.png",
    alt: "Encrypted health data visualization with DNA and lock"
  },
];

const CoreConceptsCarousel = () => {
  return (
    <section 
      id="core-concepts" 
      className="py-24 bg-gradient-to-b from-black to-[#080810] relative overflow-hidden"
      aria-label="Core Concepts Carousel"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="bg-blue-400/5 absolute inset-0"></div>
        <LifeScienceBackground type="mixed" opacity={0.3} speed={0.3} density={0.6} direction="diagonal-2" />
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Concepts</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our cutting-edge engines driving the future of human longevity.
          </p>
          <div className="h-1 w-20 bg-white/20 mx-auto mt-6"></div>
        </div>

        <Carousel 
          className="w-full mb-10"
          aria-label="Core concepts carousel"
        >
          <CarouselContent>
            {coreConceptsData.map((item) => (
              <CarouselItem key={item.id} className="md:basis-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-extrabold text-white">{item.title}</h3>
                    <p className="text-lg font-light leading-relaxed text-white/80">{item.teaser}</p>
                    <blockquote className="italic border-l-4 border-blue-400/50 pl-4 text-white/50 hidden md:block">
                      "{item.quote}"
                    </blockquote>
                    <div className="text-white/80">
                      <p>{item.content}</p>
                    </div>
                    <div className="pt-4">
                      <Link to={`/${item.id}`}>
                        <Button 
                          variant="outline" 
                          className="group bg-transparent border-white/20 hover:bg-white/10"
                        >
                          Read more
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="order-first md:order-last">
                    <div className="flex justify-center items-center h-full">
                      <img 
                        src={item.image} 
                        alt={item.alt}
                        className="max-h-[300px] w-auto object-contain transition-opacity duration-300 hover:opacity-90"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative inset-auto transform-none mx-2 bg-transparent border-white/20 hover:bg-white/10 text-white" />
            <CarouselNext className="relative inset-auto transform-none mx-2 bg-transparent border-white/20 hover:bg-white/10 text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CoreConceptsCarousel;
