import { Card, CardContent } from "@/components/ui/card";
import { Brain, MessageSquare, Target, Zap } from "lucide-react";

const challenges = [
  {
    icon: Brain,
    title: "Knowledge Isolation",
    description: "Expert knowledge trapped in individual minds, creating bottlenecks and single points of failure."
  },
  {
    icon: MessageSquare,
    title: "Ineffective Transfer",
    description: "Traditional training methods fail to capture the nuance and context of real expertise."
  },
  {
    icon: Target,
    title: "Performance Gaps",
    description: "Disconnect between learning and application, leading to poor performance outcomes."
  },
  {
    icon: Zap,
    title: "Scale Limitations",
    description: "Best mentors can't be everywhere at once, limiting organizational learning velocity."
  }
];

export const ProblemSolutionSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-6">
            The Learning Challenge
          </h2>
          <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto">
            Traditional knowledge transfer breaks down when expertise needs to scale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <challenge.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-foreground">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {challenge.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};