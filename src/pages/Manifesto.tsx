
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BinaryBackground from "../components/BinaryBackground";

const Manifesto = () => {
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
      
      <div className="container mx-auto px-6 max-w-7xl pt-24">
        <div className="min-h-screen flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Manifesto</h1>
          <p className="text-lg text-white/80 mb-8">
            Our vision and philosophy for extending human lifespan.
          </p>
          
          <div className="space-y-8">
            <section className="glass-panel p-6">
              <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
              <p className="text-white/70">
                The $LIFE token manifesto is currently being crafted. 
                Check back soon to learn about our mission to revolutionize longevity research and extend human healthspan.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Manifesto;
