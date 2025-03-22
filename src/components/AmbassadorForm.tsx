
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const AmbassadorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    experience: '',
    motivation: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success notification
      toast.success("Application submitted successfully! We'll be in touch soon.");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        location: '',
        experience: '',
        motivation: ''
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-sm">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="City, Country"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="experience">Relevant Experience</Label>
        <Textarea
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Tell us about your background in blockchain, healthcare, or community building..."
          rows={3}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="motivation">Why do you want to be a $LIFE Ambassador?</Label>
        <Textarea
          id="motivation"
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          placeholder="Share your interest in longevity research and why you want to join our mission..."
          rows={4}
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full button-shine bg-black hover:bg-gray-900 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
};

export default AmbassadorForm;
