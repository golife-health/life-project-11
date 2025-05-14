
import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import LifeScienceBackground from "./LifeScienceBackground";

// Data for the carousel slides
const coreConceptsData = [
  {
    id: "epigenetic-clock",
    title: "Decoding Biological Time",
    teaser: "As chemical marks map your true biological age, our epigenetic engineering tools help you rewind the clock.",
    quote: "Your epigenome: the next frontier of youth.",
    content: "As we age, chemical marks accumulate on our DNA—telling a story about our lifetime of exposures, stressors, and metabolic shifts. That story is the epigenetic clock, a biomarker that reads out your \"true\" biological age vs. your calendar age. At Life Project, we're pushing beyond measurement to epigenetic engineering: targeted interventions (small molecules, CRISPR-based editors, lifestyle resets) that reprogram DNA methylation patterns and rewind the clock at its source. Imagine a future where you don't just track aging—you actively sculpt a younger epigenome, boosting tissue repair, resilience, and healthspan.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800",
    alt: "DNA methylation pattern visualization"
  },
  {
    id: "semantic-network",
    title: "Mapping the Longevity Network",
    teaser: "Our AI-driven knowledge graph turns genes, proteins and interventions into a living map of life extension.",
    quote: "From data points to discovery pathways.",
    content: "Lifespan isn't a single pathway but a vast, interwoven network of genes, proteins, metabolites, and lifestyle factors. Our Advanced Semantic Network layers multi-omics data, clinical trials, and real-world health metrics into a living knowledge graph—turning terabytes of longevity research into actionable insights.\n\nNodes: From sirtuins and NAD⁺ to mTOR and autophagy markers\n\nEdges: Mechanistic links, co-expression patterns, intervention outcomes\n\nAI-Powered Queries: Pose complex \"what-if\" questions (\"What combination of senolytics and dietary restriction best lifts cardiac health?\") and get evidence-backed answers in seconds.\n\nThis isn't static reference material—it's a self-optimizing brain that learns from every data point, accelerates hypothesis generation, and guides your personalized path to lifelong vitality.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800",
    alt: "Abstract network graph visualization"
  },
  {
    id: "fhe-privacy",
    title: "Secure Health Data with FHE",
    teaser: "Keep your personal health metrics encrypted end-to-end while unlocking AI-powered insights.",
    quote: "Privacy and progress—together at last.",
    content: "We believe your health journey is confidential. That's why Life Project integrates Fully Homomorphic Encryption (FHE)—a breakthrough that lets you store, compute on, and share encrypted health metrics without ever decrypting them on our servers.\n\nBulletproof Privacy: Insurers, researchers, or even our own team can run complex analytics—risk scoring, cohort comparisons, AI-driven predictions—directly on your encrypted data.\n\nZero-Trust Architecture: Raw genomic, epigenomic, and lifestyle logs never leave your device unencrypted.\n\nOpen-Source Foundations: Built on the same FHE SDK that powers the Mind Network's World-AI Health Hub and Mind Lake Python toolkit, you get industrial-strength security plus full transparency.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800",
    alt: "Encrypted data visualization"
  },
];

const formatContentWithLineBreaks = (content: string) => {
  return content.split("\n\n").map((paragraph, index) => (
    <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
  ));
};

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
                    <div className="text-white/80 space-y-4 mt-6">
                      {formatContentWithLineBreaks(item.content)}
                    </div>
                    <div className="pt-4">
                      <Link to={`#${item.id}`}>
                        <Button 
                          variant="outline" 
                          className="group bg-transparent border-white/20 hover:bg-white/10"
                        >
                          Read more
                          <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="order-first md:order-last">
                    <div className="rounded-xl overflow-hidden aspect-[4/3] bg-black/30 backdrop-blur-sm border border-white/10 shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
                      <img 
                        src={item.image} 
                        alt={item.alt}
                        className="w-full h-full object-cover"
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
