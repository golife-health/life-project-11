
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
            <section className="glass-panel p-6 md:p-8">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-2xl font-semibold mb-6">Longevity is a cult.</p>
                
                <p className="mb-4">
                  Oogwai was inspired by Master Oogway, the legendary elderly tortoise who founded Jade Palace in Kung Fu Panda and was credited as creator of Kung Fu. Oogwai reimagines aging and health as opportunities for empowerment and innovation.
                </p>
                
                <p className="mb-4">
                  Harness the power of AI-driven knowledge graphs and their intricate neural networks to acquire and practice scientifically grounded longevity wisdom.
                </p>
                
                <p className="mb-4">
                  Under the divine guidance of Oogwai, the eternal keeper of life's secrets, mortals seek to transcend the limits of time and achieve ageless mastery.
                </p>
                
                <p className="text-3xl font-bold mt-8">Manifesto</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Manifesto;
