
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BinaryBackground from "../components/BinaryBackground";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ResearchFocus = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <BinaryBackground />
      <Navbar />
      
      {/* Top right logo - added link to home page */}
      <div className="absolute top-4 right-6 text-xl font-bold tracking-wider">
        <Link to="/" className="hover:text-primary transition-colors">
          $LIFE
        </Link>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl pt-24 pb-16">
        <div className="min-h-screen">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Focus</h1>
          <p className="text-lg text-white/80 mb-12">
            Key areas of longevity research we are funding and supporting to extend human lifespan.
          </p>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-black/20 border border-white/10 rounded-lg mb-8">
              <TabsTrigger value="overview" className="data-[state=active]:bg-blue-400/20 data-[state=active]:text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger value="cellular" className="data-[state=active]:bg-blue-400/20 data-[state=active]:text-white">
                Cellular Rejuvenation
              </TabsTrigger>
              <TabsTrigger value="genetic" className="data-[state=active]:bg-blue-400/20 data-[state=active]:text-white">
                Genetic Engineering
              </TabsTrigger>
              <TabsTrigger value="longevity" className="data-[state=active]:bg-blue-400/20 data-[state=active]:text-white">
                Longevity Focus
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="space-y-8">
                <section className="glass-panel p-8 rounded-lg border border-white/10">
                  <h2 className="text-2xl font-semibold mb-4">Research Mission</h2>
                  <p className="text-white/80 mb-6">
                    The $LIFE Protocol focuses on the most promising areas of longevity science with 
                    potential for significant lifespan extension. Our mission is to accelerate breakthroughs 
                    in longevity science by creating a decentralized funding mechanism for cutting-edge research.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Core Research Pillars</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-white/10 rounded-lg p-6 bg-black/30">
                      <div className="text-blue-400 font-mono mb-2">01</div>
                      <h4 className="text-lg font-bold mb-2">Regenerative Medicine</h4>
                      <p className="text-white/70">
                        Funding breakthrough treatments that repair and replace damaged tissues and organs,
                        reversing the effects of aging at the cellular level.
                      </p>
                    </div>
                    
                    <div className="border border-white/10 rounded-lg p-6 bg-black/30">
                      <div className="text-blue-400 font-mono mb-2">02</div>
                      <h4 className="text-lg font-bold mb-2">Cellular Senescence</h4>
                      <p className="text-white/70">
                        Identifying and removing senescent cells that contribute to aging and age-related
                        diseases, rejuvenating tissues and improving overall health.
                      </p>
                    </div>
                    
                    <div className="border border-white/10 rounded-lg p-6 bg-black/30">
                      <div className="text-blue-400 font-mono mb-2">03</div>
                      <h4 className="text-lg font-bold mb-2">Genomics & Epigenetics</h4>
                      <p className="text-white/70">
                        Leveraging advanced genetic technologies to understand and modify the epigenetic markers
                        that control aging processes throughout the human lifespan.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </TabsContent>
            
            <TabsContent value="cellular" className="mt-6">
              <div className="space-y-8">
                <section className="glass-panel p-8 rounded-lg border border-white/10">
                  <h2 className="text-2xl font-semibold mb-4">Cellular Rejuvenation</h2>
                  <p className="text-white/80 mb-6">
                    Research focused on restoring aging cells to their youthful state through targeted 
                    interventions in cellular metabolism and epigenetic reprogramming.
                  </p>
                  
                  <div className="mt-8">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-white/10">
                        <AccordionTrigger className="text-lg font-medium">Epigenetic Clock Reversal</AccordionTrigger>
                        <AccordionContent className="text-white/70 pt-4">
                          <p className="mb-4">
                            Our researchers are developing methods to reverse the epigenetic changes that occur with aging, 
                            effectively turning back the biological clock at the cellular level.
                          </p>
                          <p>
                            Key areas of focus include DNA methylation patterns, histone modifications, and chromatin 
                            remodeling techniques that can restore youthful gene expression profiles.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2" className="border-white/10">
                        <AccordionTrigger className="text-lg font-medium">Cellular Senescence Clearance</AccordionTrigger>
                        <AccordionContent className="text-white/70 pt-4">
                          <p className="mb-4">
                            We're funding breakthrough research on senolytics – compounds that can selectively 
                            eliminate senescent cells that accumulate with age and drive inflammatory processes.
                          </p>
                          <p>
                            This research has shown promising results in extending healthspan by removing cells 
                            that secrete harmful inflammatory factors and contribute to age-related diseases.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3" className="border-white/10">
                        <AccordionTrigger className="text-lg font-medium">Mitochondrial Optimization</AccordionTrigger>
                        <AccordionContent className="text-white/70 pt-4">
                          <p className="mb-4">
                            Our teams are exploring methods to enhance mitochondrial function, as mitochondrial 
                            dysfunction is a hallmark of aging across numerous tissues and organs.
                          </p>
                          <p>
                            Research includes mitochondrial biogenesis stimulation, reducing reactive oxygen species, 
                            and developing compounds that can improve energy production efficiency at the cellular level.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </section>
              </div>
            </TabsContent>
            
            <TabsContent value="genetic" className="mt-6">
              <div className="space-y-8">
                <section className="glass-panel p-8 rounded-lg border border-white/10">
                  <h2 className="text-2xl font-semibold mb-4">Genetic Engineering</h2>
                  <p className="text-white/80 mb-6">
                    Developing genetic tools to identify, modify, and optimize genes and genetic pathways 
                    associated with longevity and age-related diseases.
                  </p>
                  
                  <div className="mt-8">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-white/10">
                        <AccordionTrigger className="text-lg font-medium">CRISPR-Based Gene Therapies</AccordionTrigger>
                        <AccordionContent className="text-white/70 pt-4">
                          <p className="mb-4">
                            We're developing precision gene editing techniques using CRISPR technology to target 
                            specific genetic factors that influence aging and longevity.
                          </p>
                          <p>
                            This includes correcting harmful mutations, enhancing DNA repair mechanisms, and 
                            potentially introducing beneficial genetic variants found in exceptionally long-lived individuals.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2" className="border-white/10">
                        <AccordionTrigger className="text-lg font-medium">Longevity Gene Variant Identification</AccordionTrigger>
                        <AccordionContent className="text-white/70 pt-4">
                          <p className="mb-4">
                            Our researchers are conducting large-scale genomic studies to identify genetic variants 
                            associated with exceptional longevity in human populations.
                          </p>
                          <p>
                            This research aims to discover protective variants that can be leveraged for developing 
                            targeted therapies to mimic their effects in the general population.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3" className="border-white/10">
                        <AccordionTrigger className="text-lg font-medium">Epigenetic Modification Tools</AccordionTrigger>
                        <AccordionContent className="text-white/70 pt-4">
                          <p className="mb-4">
                            We're pioneering tools for precise epigenetic modifications that can alter gene expression 
                            patterns without changing the underlying DNA sequence.
                          </p>
                          <p>
                            These approaches offer potential for reversible interventions that can activate 
                            youth-associated genes and silence age-promoting factors in a targeted manner.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </section>
              </div>
            </TabsContent>
            
            <TabsContent value="longevity" className="mt-6">
              <div className="space-y-8">
                <section className="glass-panel p-8 rounded-lg border border-white/10">
                  <h2 className="text-2xl font-semibold mb-4">Longevity Compounds</h2>
                  <p className="text-white/80 mb-6">
                    Identifying and developing pharmaceuticals and nutraceuticals that target aging 
                    pathways to extend healthy lifespan.
                  </p>
                  
                  <div className="mt-8">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-white/10">
                        <AccordionTrigger className="text-lg font-medium">Senolytics and Senomorphics</AccordionTrigger>
                        <AccordionContent className="text-white/70 pt-4">
                          <p className="mb-4">
                            Our teams are developing and testing compounds that can selectively eliminate senescent cells 
                            (senolytics) or modify their harmful secretions (senomorphics).
                          </p>
                          <p>
                            These compounds show promise in animal studies for extending healthspan and reducing 
                            multiple age-related conditions simultaneously.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2" className="border-white/10">
                        <AccordionTrigger className="text-lg font-medium">NAD+ Precursors and Enhancers</AccordionTrigger>
                        <AccordionContent className="text-white/70 pt-4">
                          <p className="mb-4">
                            We're investigating compounds that boost NAD+ levels, which decline with age and are 
                            critical for cellular energy production and DNA repair.
                          </p>
                          <p>
                            This includes both direct precursors like NMN and NR, as well as novel compounds that 
                            enhance NAD+ production or inhibit its consumption by other cellular processes.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3" className="border-white/10">
                        <AccordionTrigger className="text-lg font-medium">mTOR Pathway Modulators</AccordionTrigger>
                        <AccordionContent className="text-white/70 pt-4">
                          <p className="mb-4">
                            Our research focuses on developing more targeted and selective mTOR inhibitors that can 
                            provide the anti-aging benefits of rapamycin with improved safety profiles.
                          </p>
                          <p>
                            These compounds work by precisely regulating cellular growth, metabolism, and autophagy—key 
                            processes in determining how quickly cells and organisms age.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-4" className="border-white/10">
                        <AccordionTrigger className="text-lg font-medium">Tissue Regeneration</AccordionTrigger>
                        <AccordionContent className="text-white/70 pt-4">
                          <p className="mb-4">
                            We're advancing technologies that can restore damaged or aging tissues and organs through 
                            stem cell therapies and regenerative medicine.
                          </p>
                          <p>
                            Our focus includes organ-specific stem cell therapies, bioprinting of tissues and organs, 
                            and enhancement of regenerative signaling pathways to restore youthful tissue function.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </section>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ResearchFocus;
