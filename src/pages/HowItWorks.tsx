
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Brain, Settings, Users, TrendingUp, ArrowRight } from "lucide-react";

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
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
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
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative mb-8">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=400&fit=crop" 
                alt="AI and machine learning visualization with neural networks"
                className="w-full h-64 object-cover rounded-3xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-teal-600/80 rounded-3xl flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    From Spoken Knowledge to Structured Intelligence
                  </h1>
                </div>
              </div>
            </div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              What if every explanation you gave—every time you mentored someone, walked them through a task, 
              or recorded your thoughts—automatically created a library of usable, modular, scalable training tools?
            </p>
            <p className="text-2xl font-semibold text-blue-600 mt-6">
              That's what Zyglio does.
            </p>
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
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop" 
                    alt="Professional chef in commercial kitchen teaching cooking techniques to apprentice"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👨‍🍳</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Chef's Training Session</h4>
                      <p className="text-sm text-slate-600">2-minute explanation becomes comprehensive training</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <p className="text-sm font-medium text-blue-800 mb-2">Voice Input:</p>
                      <p className="text-slate-700 italic">
                        "First, heat the pan to medium-high. Season the steak 15 minutes before cooking. 
                        Sear for 3 minutes each side, then finish in the oven at 400°F for 5-7 minutes depending on thickness..."
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowRight className="w-6 h-6 text-blue-500" />
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <p className="text-sm font-medium text-green-800 mb-2">Simulation Output:</p>
                      <ul className="text-slate-700 space-y-1">
                        <li>• Interactive timing-based cooking simulation</li>
                        <li>• Temperature checkpoints with feedback</li>
                        <li>• Personalized reinforcement for each step</li>
                        <li>• Quality assurance validation points</li>
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
                    src="https://images.unsplash.com/photo-1632823471565-1ecdf6b21cd8?w=600&h=300&fit=crop" 
                    alt="Automotive technician working on car engine with diagnostic equipment"
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
                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=300&fit=crop" 
                    alt="Medical students practicing clinical procedures in simulation lab"
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
