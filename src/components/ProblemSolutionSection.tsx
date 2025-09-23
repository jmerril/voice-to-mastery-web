import { Card, CardContent } from "@/components/ui/card";
import challengesImage from "/images/learning-challenges-corporate.jpg";
import knowledgeIsolationImage from "/images/challenge-knowledge-isolation.jpg";
import ineffectiveTransferImage from "/images/challenge-ineffective-transfer.jpg";
import performanceGapsImage from "/images/challenge-performance-gaps.jpg";
import scaleLimitationsImage from "/images/challenge-scale-limitations.jpg";

const challenges = [
  {
    image: knowledgeIsolationImage,
    title: "Knowledge Isolation",
    description: "Expert knowledge trapped in individual minds, creating bottlenecks and single points of failure."
  },
  {
    image: ineffectiveTransferImage,
    title: "Ineffective Transfer",
    description: "Traditional training methods fail to capture the nuance and context of real expertise."
  },
  {
    image: performanceGapsImage,
    title: "Performance Gaps",
    description: "Disconnect between learning and application, leading to poor performance outcomes."
  },
  {
    image: scaleLimitationsImage,
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
          <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto mb-12">
            Traditional knowledge transfer breaks down when expertise needs to scale.
          </p>
          
          {/* Hero Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <img 
              src={challengesImage} 
              alt="Learning Challenges" 
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={challenge.image} 
                  alt={challenge.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 text-center">
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