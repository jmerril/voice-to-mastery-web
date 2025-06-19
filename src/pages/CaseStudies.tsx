
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Hospital Onboarding Reimagined",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop",
      problem: "New nurses needed 40+ hours to onboard for trauma protocols.",
      solution: "Voice-led mentor walkthroughs auto-generated 8 modular simulations.",
      result: "Onboarding dropped to 12 hours; nurse confidence scores increased by 3.2×.",
      metrics: [
        { label: "Time Reduction", value: "70%", icon: Clock },
        { label: "Confidence Increase", value: "3.2×", icon: TrendingUp },
        { label: "Nurses Trained", value: "450+", icon: Users }
      ],
      testimonial: "Zyglio transformed our training program. New nurses are now confident and competent in a fraction of the time.",
      author: "Dr. Sarah Chen, Chief Nursing Officer"
    },
    {
      title: "Franchise Restaurant Simulation Rollout",
      industry: "Food Service",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
      problem: "High turnover and inconsistent prep timing across 150+ locations.",
      solution: "'Shake, Fries, Expo' simulations derived from head trainer voice files.",
      result: "Time to station independence dropped by 45%; manager satisfaction up 72%.",
      metrics: [
        { label: "Training Time", value: "45% ↓", icon: Clock },
        { label: "Manager Satisfaction", value: "72% ↑", icon: TrendingUp },
        { label: "Locations Deployed", value: "150+", icon: Users }
      ],
      testimonial: "Our team members are now station-ready in days, not weeks. The consistency across all locations is remarkable.",
      author: "Mike Rodriguez, Operations Director"
    },
    {
      title: "Aerospace Maintenance Certification",
      industry: "Aerospace & Defense",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop",
      problem: "Complex avionics procedures required months of traditional training.",
      solution: "Expert technician knowledge converted into interactive simulations with real-world failure scenarios.",
      result: "Certification time reduced by 60%; 94% pass rate on first attempt.",
      metrics: [
        { label: "Certification Time", value: "60% ↓", icon: Clock },
        { label: "First-time Pass Rate", value: "94%", icon: CheckCircle },
        { label: "Technicians Certified", value: "280+", icon: Users }
      ],
      testimonial: "The simulation accuracy is incredible. Our technicians are better prepared for real-world scenarios than ever before.",
      author: "Captain James Mitchell, Training Supervisor"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative mb-8">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop" 
                alt="Successful business team celebrating achievements"
                className="w-full h-64 object-cover rounded-3xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80 rounded-3xl flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Zyglio in Action
                  </h1>
                  <p className="text-xl opacity-90">Real stories from real organizations transforming their training approach</p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full min-h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                          {study.industry}
                        </div>
                        <h2 className="text-3xl font-bold mb-2">
                          {study.title}
                        </h2>
                      </div>
                    </div>
                    
                    <div className="p-8 lg:p-12">
                      <div className="space-y-6">
                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                          <p className="text-sm font-medium text-red-800 mb-2">Problem:</p>
                          <p className="text-slate-700">{study.problem}</p>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <p className="text-sm font-medium text-blue-800 mb-2">Solution:</p>
                          <p className="text-slate-700">{study.solution}</p>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                          <p className="text-sm font-medium text-green-800 mb-2">Result:</p>
                          <p className="text-slate-700">{study.result}</p>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                          {study.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="bg-slate-50 p-4 rounded-lg text-center">
                              <metric.icon className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                              <p className="font-bold text-lg text-slate-800">{metric.value}</p>
                              <p className="text-xs text-slate-600">{metric.label}</p>
                            </div>
                          ))}
                        </div>
                        
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <p className="text-slate-700 italic mb-3">"{study.testimonial}"</p>
                          <p className="text-sm font-semibold text-blue-600">— {study.author}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-3xl p-12 backdrop-blur-sm">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop" 
                alt="Modern office meeting room setup"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-10"
              />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                  Join the organizations already transforming their training with Zyglio. See how we can help you achieve similar results.
                </p>
                <Link to="/demo">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                    Start Your Transformation <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CaseStudies;
