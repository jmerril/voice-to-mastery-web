import { Card, CardContent } from "@/components/ui/card";

const principles = [
  "conversation beats consumption. people learn by doing and dialog.",
  "why cements what. rationale and consequences anchor memory.",
  "errors are data. every miss is a map to mastery.",
  "emotion matters. tone, pressure, and context must be simulated.",
  "mentorship must scale. the best teacher you ever had—now in your pocket.",
  "memory with metrics. learning history and performance are first-class citizens.",
  "the flywheel wins. the system—and the human—get better together."
];

export const EducationalRevolutionSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-thin text-foreground mb-6">
            the{" "}
            <span className="text-primary font-light">
              Educational Revolution
            </span>
          </h2>
          <p className="text-xl font-light text-muted-foreground">
            (excerpts)
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-lg font-medium text-primary">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-lg font-light text-foreground leading-relaxed">
                    {principle}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};