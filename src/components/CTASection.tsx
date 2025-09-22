import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-8">
          Ready to experience{" "}
          <span className="text-primary font-light">the phenomenon</span>?
        </h2>
        
        <p className="text-xl font-light text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Join leading organizations already transforming how they capture, transfer, and scale expertise.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="group font-light text-lg px-8 py-6 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Demo
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="group font-light text-lg px-8 py-6 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mt-8 font-light">
          No commitments. Just conversation about the future of learning.
        </p>
      </div>
    </section>
  );
};