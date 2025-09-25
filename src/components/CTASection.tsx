import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar, Download } from "lucide-react";

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
        
        {/* Removed demo and contact buttons */}

        {/* White Paper Download Section */}
        <div className="border-t border-border/30 pt-8">
          <h3 className="text-2xl font-light text-foreground mb-4">
            Deep Dive: The Science Behind Zyglio
          </h3>
          <p className="text-lg font-light text-muted-foreground mb-6 max-w-2xl mx-auto">
            Download our comprehensive white paper on "The Cognitive Architecture of Performance" 
            and discover the scientific foundation of next-generation learning systems.
          </p>
          
          <Button 
            variant="secondary" 
            size="lg"
            className="group font-light text-lg px-8 py-6 rounded-xl hover:shadow-lg transition-all duration-300"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Zyglio_White_Paper_Cognitive_Architecture_Performance.pdf';
              link.download = 'Zyglio_White_Paper_Cognitive_Architecture_Performance.pdf';
              link.click();
            }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download White Paper
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mt-8 font-light">
          No commitments. Just conversation about the future of learning.
        </p>
      </div>
    </section>
  );
};