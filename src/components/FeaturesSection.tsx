import { Card, CardContent } from "@/components/ui/card";
import { Mic, Atom, TrendingUp, Users, Brain, Zap } from "lucide-react";
// Temporary placeholders - images will be added later

const features = [
  {
    icon: Mic,
    title: "Voice-First Mentorship",
    description: "Natural conversation with AI mentors that understand context, tone, and learning style.",
    image: null
  },
  {
    icon: Atom,
    title: "Atomic Knowledge System",
    description: "Expertise broken down into precise, interconnected knowledge atoms for targeted learning.",
    image: null
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Real-time measurement of skill acquisition and application effectiveness.",
    image: null
  },
  {
    icon: Users,
    title: "Scalable Expertise",
    description: "Deploy expert knowledge at unlimited scale without diluting quality or context.",
    image: null
  },
  {
    icon: Brain,
    title: "Adaptive Learning",
    description: "AI that learns from each interaction to optimize the mentorship experience.",
    image: null
  },
  {
    icon: Zap,
    title: "Continuous Improvement",
    description: "Both system and learner evolve together through feedback loops.",
    image: null
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-6">
            Revolutionary Capabilities
          </h2>
          <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto">
            Technology that transforms how expertise flows through organizations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              {feature.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <CardContent className="p-8">
                <div className="w-12 h-12 mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};