import { Card, CardContent } from "@/components/ui/card";
import { Building2, GraduationCap, Heart, Factory, Shield, Users2 } from "lucide-react";

const categories = [
  {
    icon: Building2,
    title: "Enterprise Learning",
    description: "Transform organizational knowledge transfer and employee development programs."
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Revolutionize how students learn complex subjects through AI mentorship."
  },
  {
    icon: Heart,
    title: "Healthcare Training",
    description: "Safe simulation environments for critical medical and patient care scenarios."
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Standardize expertise across facilities and accelerate technician training."
  },
  {
    icon: Shield,
    title: "Public Safety",
    description: "Prepare first responders with realistic scenario-based training."
  },
  {
    icon: Users2,
    title: "Professional Services",
    description: "Scale consultant expertise and accelerate junior professional development."
  }
];

export const CategorySection = () => {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-6">
            Applications Across Industries
          </h2>
          <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto">
            Voice-first AI mentorship transforms learning in every domain
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-foreground">
                  {category.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};