
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Brain, Settings, Users, TrendingUp, ArrowRight, Play, Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const HowItWorks = () => {
  const steps = [
    {
      icon: Mic,
      title: "Capture Voice, Video, or Text",
      description: "Zyglio starts by capturing natural human communication. This can be an informal coaching session, a formal interview, or even a Zoom call. Our system transcribes and cleans the data in real time.",
      color: "text-blue-500",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop"
    },
    {
      icon: Brain,
      title: "Extract Structure Using AI",
      description: "Our AI maps the knowledge into object-oriented elements: decisions, workflows, safety flags, equipment, timing windows, and more. These are categorized by complexity and domain.",
      color: "text-purple-500",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop"
    },
    {
      icon: Settings,
      title: "Assemble Scenarios",
      description: "Using Zyglio's simulation engine, content managers or SMEs can generate real-time, branching simulations using drag-and-drop tools. No need to rewrite or restructure.",
      color: "text-green-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      icon: Users,
      title: "Apply Adaptive Intelligence",
      description: "Learners receive simulations that adapt based on voice cues, timing, accuracy, and performance. The system personalizes reinforcement and challenges on the fly.",
      color: "text-yellow-500",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    },
    {
      icon: TrendingUp,
      title: "Update and Evolve",
      description: "Every learner interaction feeds back into the simulation framework—making it smarter, faster, and more context-aware for future learners.",
      color: "text-teal-500", 
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Hero Section */}
          <div className="text-center mb-16">
            {/* Hero Image - Someone Speaking into Microphone */}
            <div className="relative mb-8 overflow-hidden rounded-2xl shadow-xl max-w-4xl mx-auto border-2 border-white/20">
              <img 
                src="/lovable-uploads/366df3e2-1acc-47a9-94cd-9d5b850563fa.png"
                alt="Person speaking into microphone - representing voice capture technology"
                className="w-full h-64 sm:h-80 object-cover"
              />
              
              {/* Overlay with Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 to-teal-600/85 flex items-center justify-center p-4">
                {/* Background Pattern - Subtle */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-24 h-24 bg-white rounded-full -translate-x-12 -translate-y-12"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-white rounded-full translate-x-10 translate-y-10"></div>
                  <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full"></div>
                  <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white rounded-full"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-3xl mx-auto">
                  {/* Main Heading - Smaller and Better Contained */}
                  <div className="bg-black/15 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 mb-6">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                      From Spoken Knowledge to<br />Structured Intelligence
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
                      What if every explanation you gave automatically created a library of usable, modular, scalable training tools?
                    </p>
                  </div>

                  {/* Zyglio Statement - Smaller */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/25 mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4 text-yellow-300 flex-shrink-0" />
                      <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                        That's what Zyglio does.
                      </p>
                      <Zap className="h-4 w-4 text-yellow-300 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Visual Workflow Preview - Smaller and Centered */}
                  <div className="max-w-lg mx-auto mb-4">
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {/* Voice Input */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20">
                        <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Mic className="h-4 w-4 text-white" />
                        </div>
                        <div className="text-white text-xs font-semibold mb-1">Voice</div>
                        <div className="text-blue-100 text-xs">Capture</div>
                      </div>

                      {/* AI Processing */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20">
                        <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Brain className="h-4 w-4 text-white" />
                        </div>
                        <div className="text-white text-xs font-semibold mb-1">AI</div>
                        <div className="text-blue-100 text-xs">Processing</div>
                      </div>

                      {/* Interactive Training */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20">
                        <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Users className="h-4 w-4 text-white" />
                        </div>
                        <div className="text-white text-xs font-semibold mb-1">Training</div>
                        <div className="text-blue-100 text-xs">Simulation</div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Call-to-Action - Smaller */}
                  <div className="text-center">
                    <div className="bg-white/15 backdrop-blur-sm rounded-full px-3 py-2 border border-white/25 inline-block">
                      <div className="flex items-center gap-2 text-white">
                        <Play className="h-3 w-3 fill-current flex-shrink-0" />
                        <span className="font-medium text-xs">See the complete workflow below</span>
                      </div>
                    </div>
                    
                    <p className="text-white/70 text-xs mt-2">
                      ✨ Transform expertise into interactive learning experiences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              The Zyglio Workflow
            </h2>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <step.icon className={`w-8 h-8 ${step.color}`} />
                          </div>
                          <div>
                            <span className="text-3xl font-bold text-slate-300">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-2xl font-bold text-slate-800">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Example Scenario */}
          <div className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-3xl p-12 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
              See It In Action
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=400&fit=crop" 
                    alt="Professional chef demonstrating advanced culinary techniques in upscale restaurant kitchen with sous chefs"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👨‍🍳</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Executive Chef's Masterclass</h4>
                      <p className="text-sm text-slate-600">5-minute explanation becomes comprehensive training program</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <p className="text-sm font-medium text-blue-800 mb-2">Voice Input:</p>
                      <p className="text-slate-700 italic">
                        "For the perfect duck confit, cure the legs in kosher salt and thyme for 24 hours. 
                        Cook slowly at 200°F in duck fat for 2-3 hours until tender. Critical temperature points and timing variations based on leg size..."
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowRight className="w-6 h-6 text-blue-500" />
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <p className="text-sm font-medium text-green-800 mb-2">Simulation Output:</p>
                      <ul className="text-slate-700 space-y-1">
                        <li>• Interactive culinary simulation with timing precision</li>
                        <li>• Temperature monitoring and quality checkpoints</li>
                        <li>• Adaptive feedback for technique refinement</li>
                        <li>• Sensory evaluation and plating standards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Examples */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-12">
              Real-World Applications
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Automotive Repair & Diagnostics */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=300&fit=crop" 
                    alt="Professional automotive technician working on modern car engine diagnostics with advanced diagnostic equipment"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">🔧</span>
                  </div>
                  <h4 className="font-semibold text-slate-800">Automotive Repair & Diagnostics</h4>
                </div>
                <p className="text-slate-600 mb-4">
                  Master technician explains EV battery diagnostics and ADAS calibration procedures.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Step-by-step diagnostic procedures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Equipment-specific protocols</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Safety and compliance checks</span>
                  </div>
                </div>
              </div>

              {/* Medical Education & Simulation */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=300&fit=crop" 
                    alt="Medical students practicing clinical procedures in modern simulation lab with advanced medical equipment"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">🩺</span>
                  </div>
                  <h4 className="font-semibold text-slate-800">Medical Education & Simulation</h4>
                </div>
                <p className="text-slate-600 mb-4">
                  Teaching doctor explains post-operative sepsis diagnosis and treatment protocols.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Patient scenario variations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Multilingual patient interactions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Adaptive complexity levels</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorks;
