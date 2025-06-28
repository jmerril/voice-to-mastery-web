
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Brain, Blocks, Zap, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Technology = () => {
  const technologies = [
    {
      icon: Mic,
      title: "Voice-to-Structure Engine",
      description: "Transforms speech into metadata-rich instructional content, indexed by skill, risk, and relevance.",
      color: "text-blue-500",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop"
    },
    {
      icon: Blocks,
      title: "Object-Oriented Simulation Framework",
      description: "Training elements are designed like Lego blocks: reusable, remixable, and flexible across contexts and languages.",
      color: "text-green-500",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop"
    },
    {
      icon: Brain,
      title: "AI-Driven Adaptive Learning",
      description: "Zyglio adjusts content in real-time based on learner response, tone, and timing.",
      color: "text-purple-500",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop"
    },
    {
      icon: Zap,
      title: "Variation Builder",
      description: "Every scenario generates derivative 'what-if' branches that test decision-making and contingency handling.",
      color: "text-yellow-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Supports voice input/output in 40+ languages, with cultural nuance and regional terminology.",
      color: "text-teal-500",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative mb-8 overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=500&fit=crop" 
                alt="Advanced AI circuit board technology with neural network connections"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-blue-900/90 flex items-center justify-center">
                <div className="text-center text-white max-w-5xl px-8">
                  <div className="mb-6 flex justify-center">
                    <div className="flex space-x-4">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                      <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Built for Performance.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                      Engineered for Agility.
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                    Zyglio isn't just fast—it's foundational. Our platform is built on the latest in AI, 
                    simulation science, and adaptive learning principles. Everything is modular, object-based, and scalable.
                  </p>
                </div>
              </div>
              {/* Decorative tech elements */}
              <div className="absolute top-4 left-4 w-20 h-20 border border-blue-300/30 rounded-lg bg-blue-500/10 backdrop-blur-sm"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border border-purple-300/30 rounded-full bg-purple-500/10 backdrop-blur-sm"></div>
              <div className="absolute top-1/2 left-8 w-12 h-12 border border-teal-300/30 rounded bg-teal-500/10 backdrop-blur-sm rotate-45"></div>
            </div>
          </div>

          {/* Core Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Core Technologies
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={tech.image} 
                        alt={tech.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <tech.icon className={`w-8 h-8 ${tech.color} bg-white/90 p-1.5 rounded-lg`} />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-3">
                        {tech.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Platform Architecture */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Platform Architecture
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop" 
                  alt="Complex system architecture diagram with interconnected nodes"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-800">
                  Modular. Scalable. Intelligent.
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Cloud-Native Infrastructure</h4>
                    <p className="text-slate-700">Built on enterprise-grade cloud infrastructure for unlimited scalability and 99.9% uptime.</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800 mb-2">Real-Time Processing</h4>
                    <p className="text-slate-700">Process voice input and generate simulations in real-time with sub-second response times.</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-800 mb-2">Enterprise Security</h4>
                    <p className="text-slate-700">SOC 2 compliant with end-to-end encryption and role-based access controls.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Ecosystem */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
              Integration Ecosystem
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop" 
                  alt="Business meeting room with modern AV equipment"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-semibold text-slate-800 mb-2">LMS Integration</h4>
                <p className="text-slate-600 text-sm">Seamlessly integrate with existing learning management systems</p>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop" 
                  alt="Analytics dashboard with real-time data visualization"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-semibold text-slate-800 mb-2">Analytics & Reporting</h4>
                <p className="text-slate-600 text-sm">Comprehensive analytics with real-time performance insights</p>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop" 
                  alt="API documentation and developer tools interface"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="font-semibold text-slate-800 mb-2">API & SDKs</h4>
                <p className="text-slate-600 text-sm">Robust APIs and SDKs for custom integrations</p>
              </div>
            </div>
            <div className="text-center">
              <Link to="/demo">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  See Technology Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Technology;
