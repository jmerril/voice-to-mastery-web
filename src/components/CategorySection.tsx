import { Card, CardContent } from "@/components/ui/card";
import enterpriseLearningImage from "/images/industry-enterprise-learning.jpg";
import educationalInstitutionsImage from "/images/industry-educational-institutions.jpg";
import healthcareTrainingImage from "/images/industry-healthcare-training.jpg";
import manufacturingImage from "/images/industry-manufacturing.jpg";
import publicSafetyImage from "/images/industry-public-safety.jpg";
import hospitalityFoodImage from "/images/industry-hospitality-food.jpg";

const categories = [
  {
    image: enterpriseLearningImage,
    title: "Enterprise Learning",
    description: "Transform organizational knowledge transfer and employee development programs."
  },
  {
    image: educationalInstitutionsImage,
    title: "Educational Institutions",
    description: "Revolutionize how students learn complex subjects through AI mentorship."
  },
  {
    image: healthcareTrainingImage,
    title: "Healthcare Training",
    description: "Safe simulation environments for critical medical and patient care scenarios."
  },
  {
    image: manufacturingImage,
    title: "Manufacturing",
    description: "Standardize expertise across facilities and accelerate technician training."
  },
  {
    image: publicSafetyImage,
    title: "Public Safety",
    description: "Prepare first responders with realistic scenario-based training."
  },
  {
    image: hospitalityFoodImage,
    title: "Hospitality & Food Service",
    description: "Train staff in service excellence, food safety, and customer experience standards."
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
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 text-center">
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