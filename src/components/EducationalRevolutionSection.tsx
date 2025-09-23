import { Card, CardContent } from "@/components/ui/card";
import revolutionImage from "/images/educational-revolution-corporate.jpg";

const principles = [
  "Conversation beats consumption. people learn by doing and dialog.",
  "Why cements what. rationale and consequences anchor memory.",
  "Errors are data. every miss is a map to mastery.",
  "Emotion matters. tone, pressure, and context must be simulated.",
  "Mentorship must scale. the best teacher you ever had—now in your pocket.",
  "Memory with metrics. learning history and performance are first-class citizens.",
  "The flywheel wins. the system—and the human—get better together.",
  "AI curates and presents graphics, audio, text, articles and other proven materials that improve conceptual learning and retention."
];

export const EducationalRevolutionSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-thin text-foreground mb-6">
            The{" "}
            <span className="text-primary font-light">
              Educational Revolution
            </span>
          </h2>
          <p className="text-xl font-light text-muted-foreground mb-12">
            (excerpts)
          </p>
          
          {/* Hero Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <img 
              src={revolutionImage} 
              alt="Educational Revolution" 
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <p className="text-lg font-light text-foreground leading-relaxed">
                  {principle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};