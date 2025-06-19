
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Brain, Blocks, Globe, Zap, Users } from "lucide-react";

const Technology = () => {
  const technologies = [
    {
      icon: Mic,
      title: "Voice-to-Structure Engine",
      description: "Transforms speech into metadata-rich instructional content, indexed by skill, risk, and relevance.",
      features: ["Real-time transcription", "Contextual analysis", "Knowledge extraction", "Multi-speaker support"],
      color: "text-blue-500"
    },
    {
      icon: Blocks,
      title: "Object-Oriented Simulation Framework",
      description: "Training elements are designed like Lego blocks: reusable, remixable, and flexible across contexts and languages.",
      features: ["Modular components", "Drag-and-drop assembly", "Cross-platform compatibility", "Version control"],
      color: "text-green-500"
    },
    {
      icon: Brain,
      title: "AI-Driven Adaptive Learning",
      description: "Zyglio adjusts content in real-time based on learner response, tone, and timing.",
      features: ["Performance tracking", "Adaptive difficulty", "Personalized feedback", "Learning path optimization"],
      color: "text-purple-500"
    },
    {
      icon: Zap,
      title: "Variation Builder",
      description: "Every scenario generates derivative \"what-if\" branches that test decision-making and contingency handling.",
      features: ["Scenario branching", "Dynamic challenges", "Failure simulation", "Success metrics"],
      color: "text-yellow-500"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Supports voice input/output in 40+ languages, with cultural nuance and regional terminology.",
      features: ["40+ languages", "Cultural adaptation", "Regional dialects", "Automatic translation"],
      color: "text-teal-500"
    },
    {
      icon: Users,
      title: "Enterprise Integration",
      description: "Seamlessly integrates with existing LMS, HRIS, and training management systems.",
      features: ["API connectivity", "SSO support", "Data synchronization", "Compliance reporting"],
      color: "text-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Built for Performance. Engineered for Agility.
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Zyglio isn't just fast—it's foundational. Our platform is built on the latest in AI, 
              simulation science, and adaptive learning principles. Everything is modular, object-based, and scalable.
            </p>
          </div>

          {/* Core Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Core Technologies
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <Card key={index} className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`${tech.color} bg-white p-3 rounded-full shadow-md`}>
                        <tech.icon size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">
                          {tech.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {tech.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-700">
                          <div className={`w-2 h-2 rounded-full ${tech.color.replace('text-', 'bg-')}`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-3xl p-12 backdrop-blur-sm mb-16">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
              Zyglio Architecture
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mic className="w-10 h-10 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Input Layer</h4>
                    <p className="text-sm text-slate-600">Voice, video, text capture with real-time processing</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-10 h-10 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2">AI Processing</h4>
                    <p className="text-sm text-slate-600">Structure extraction, knowledge mapping, scenario generation</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Learning Layer</h4>
                    <p className="text-sm text-slate-600">Adaptive simulations, personalized feedback, progress tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Voice Processing Speed</span>
                    <span className="font-semibold text-blue-600">&lt; 2 seconds</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Simulation Generation</span>
                    <span className="font-semibold text-blue-600">&lt; 30 seconds</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Concurrent Users</span>
                    <span className="font-semibold text-blue-600">10,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Uptime Guarantee</span>
                    <span className="font-semibold text-blue-600">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Data Security</span>
                    <span className="font-semibold text-blue-600">SOC 2 Type II</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Integration Options</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700">REST API & Webhooks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700">SCORM/xAPI Compliance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700">Single Sign-On (SSO)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700">LMS Integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700">Cloud & On-Premise</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Technology;
