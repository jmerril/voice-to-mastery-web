import { Card, CardContent } from "@/components/ui/card";
// Temporary placeholders - images will be added later

const opportunities = [
  {
    title: "Enterprise & Workforce Learning",
    amount: "$400B+",
    description: "Corporate training, onboarding, and skill development programs across all industries.",
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Consumer Education & Skills",
    amount: "$200B+", 
    description: "Personal development, certification programs, and lifelong learning initiatives.",
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Professional Development",
    amount: "$150B+",
    description: "Continuing education, licensing requirements, and career advancement training.",
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Frontline Enablement & CX",
    amount: "$50B+",
    description: "Customer service training, sales enablement, and frontline worker development.",
    color: "bg-orange-500/10 text-orange-600"
  }
];

const placeholderImages = [null, null, null];

export const UseCasesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-thin text-foreground mb-6">
            The $800B+ opportunity in{" "}
            <span className="text-primary font-light">procedural intelligence</span>
          </h2>
          <p className="text-xl font-light text-muted-foreground max-w-3xl mx-auto mb-12">
            A massive market waiting for the right technology to unlock human potential at scale
          </p>
        </div>

        {/* Market Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {opportunities.map((opportunity, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className={`text-2xl font-bold mb-2 px-3 py-1 rounded-lg ${opportunity.color}`}>
                  {opportunity.amount}
                </div>
                <h3 className="text-lg font-medium mb-3 text-foreground">
                  {opportunity.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {opportunity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Total Market */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="text-6xl md:text-8xl font-thin text-primary mb-4">
              ~$800B+
            </div>
            <p className="text-xl font-light text-muted-foreground">
              Total addressable market and expanding
            </p>
          </div>
        </div>

        {/* Visual Assets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {placeholderImages.map((_, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-video bg-muted/20"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-muted/30 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};