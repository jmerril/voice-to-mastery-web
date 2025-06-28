import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Brain, Settings, Users, TrendingUp, ArrowRight, Play, Zap, Sparkles, BookOpen, Target, Lightbulb, Clock, Activity, ChefHat, Wrench } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      icon: Mic,
      title: "Capture Voice, Video, or Text",
      description: "Zyglio starts by capturing natural human communication. This can be an informal coaching session, a formal interview, or even a Zoom call. Our system transcribes and cleans the data in real time.",
      color: "text-blue-500",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
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
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Enhanced Hero Section with Consistent Styling */}
        <section className="relative pt-24 pb-20 px-4 overflow-hidden">
          {/* Background Image with Curved Corners */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop" 
              alt="Advanced AI neural network visualization showing interconnected nodes and data pathways representing intelligent learning systems"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-blue-900/90 rounded-3xl"></div>
          </div>
          
          {/* Animated Elements */}
          <div className="absolute inset-0 z-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/30 rounded-full blur-lg animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-cyan-400/25 rounded-full blur-md animate-pulse"></div>
            <div className="absolute bottom-32 right-16 w-40 h-40 bg-green-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              From <span className="text-yellow-300">Spoken Knowledge</span>
              <br />
              to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Structured Intelligence</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-cyan-300 mb-8 animate-fade-in">
              What if every explanation you gave automatically created a library of usable, modular, scalable training tools?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Zyglio revolutionizes how people learn by transforming speech into structured, object-based training simulations. One voice, one explanation—instantly becomes a learning experience that adapts, scales, and evolves across roles, locations, and industries.
            </p>
          </div>
        </section>

        {/* Enhanced Tutorial Courses Section with Consistent Background */}
        <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-2 mb-6 border border-purple-200">
                <BookOpen className="h-5 w-5 text-purple-600" />
                <span className="text-purple-800 font-medium">AI-Enhanced Learning</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Transform Tribal Knowledge into 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> Interactive Courses</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Convert decades of expertise into curated, interactive tutorial courses that adapt to each learner's pace and provide rapid skill acquisition.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop" 
                  alt="AI-enhanced tutorial interface showing interactive learning modules"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Adaptive Learning Paths</h3>
                    <p className="text-slate-600 leading-relaxed">AI analyzes learner performance and adjusts difficulty, pacing, and content focus in real-time to optimize knowledge retention.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Interactive Knowledge Modules</h3>
                    <p className="text-slate-600 leading-relaxed">Convert expert explanations into bite-sized, interactive modules with embedded quizzes, simulations, and practical exercises.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Rapid Skill Acquisition</h3>
                    <p className="text-slate-600 leading-relaxed">Accelerate learning through AI-curated content that identifies knowledge gaps and provides targeted practice opportunities.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Tutorial Examples */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
                Experience Interactive Tutorial Courses
              </h3>
              
              <Tabs defaultValue="medical" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-100">
                  <TabsTrigger value="medical" className="flex items-center gap-2 text-base font-medium">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Activity className="h-4 w-4 text-white" />
                    </div>
                    Medical Training
                  </TabsTrigger>
                  <TabsTrigger value="culinary" className="flex items-center gap-2 text-base font-medium">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <ChefHat className="h-4 w-4 text-white" />
                    </div>
                    Culinary Arts
                  </TabsTrigger>
                  <TabsTrigger value="automotive" className="flex items-center gap-2 text-base font-medium">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Wrench className="h-4 w-4 text-white" />
                    </div>
                    Automotive
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="medical" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="p-6 bg-gradient-to-br from-red-50 via-pink-50 to-red-50 rounded-2xl border border-red-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                            <Activity className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 text-lg">Emergency Response Protocol</h4>
                            <p className="text-red-600 text-sm font-medium">Critical Care Simulation</p>
                          </div>
                        </div>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                          Learn critical decision-making in high-pressure medical situations through adaptive scenarios with real-time patient monitoring.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="font-medium">Voice-guided symptom assessment</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            <span className="font-medium">Interactive patient simulations</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            </div>
                            <span className="font-medium">Real-time performance feedback</span>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 shadow-lg">
                        Start Medical Simulation
                      </Button>
                    </div>
                    <div className="relative overflow-hidden bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100">
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 left-4 w-8 h-8 border-2 border-red-300 rounded-full"></div>
                        <div className="absolute top-12 right-8 w-4 h-4 bg-red-300 rounded-full"></div>
                        <div className="absolute bottom-8 left-8 w-6 h-6 border border-red-300 rounded-sm rotate-45"></div>
                        <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-red-300 rounded-full"></div>
                      </div>
                      
                      <div className="relative text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                            <Activity className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <h5 className="text-xl font-bold text-slate-800 mb-2">Emergency Simulation Ready</h5>
                        <p className="text-slate-600 font-medium leading-relaxed">
                          Interactive medical emergency simulation with adaptive scenarios and real-time patient monitoring systems
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium text-slate-700">System Ready</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="culinary" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="p-6 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 rounded-2xl border border-yellow-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                            <ChefHat className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 text-lg">Advanced Cooking Techniques</h4>
                            <p className="text-orange-600 text-sm font-medium">Professional Culinary Training</p>
                          </div>
                        </div>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                          Master complex culinary skills through step-by-step interactive tutorials with real-time guidance and temperature monitoring.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="font-medium">Temperature-sensitive timing alerts</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            <span className="font-medium">Visual technique demonstrations</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            </div>
                            <span className="font-medium">Adaptive difficulty progression</span>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 shadow-lg">
                        Begin Culinary Course
                      </Button>
                    </div>
                    <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100">
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 left-4 w-8 h-8 border-2 border-orange-300 rounded-full"></div>
                        <div className="absolute top-12 right-8 w-4 h-4 bg-orange-300 rounded-full"></div>
                        <div className="absolute bottom-8 left-8 w-6 h-6 border border-orange-300 rounded-sm rotate-45"></div>
                        <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-orange-300 rounded-full"></div>
                      </div>
                      
                      <div className="relative text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                            <ChefHat className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <h5 className="text-xl font-bold text-slate-800 mb-2">Culinary Training Center</h5>
                        <p className="text-slate-600 font-medium leading-relaxed">
                          Professional culinary training experience with interactive cooking simulations and expert chef guidance
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium text-slate-700">Kitchen Ready</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="automotive" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="p-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 rounded-2xl border border-blue-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                            <Wrench className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 text-lg">Advanced Diagnostics & Repair</h4>
                            <p className="text-blue-600 text-sm font-medium">Professional Automotive Training</p>
                          </div>
                        </div>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                          Learn complex diagnostic procedures through hands-on virtual workshops with expert guidance and safety protocols.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="font-medium">Equipment-specific procedures</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            <span className="font-medium">Safety protocol integration</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            </div>
                            <span className="font-medium">Troubleshooting decision trees</span>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 shadow-lg">
                        Launch Diagnostic Training
                      </Button>
                    </div>
                    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 left-4 w-8 h-8 border-2 border-blue-300 rounded-full"></div>
                        <div className="absolute top-12 right-8 w-4 h-4 bg-blue-300 rounded-full"></div>
                        <div className="absolute bottom-8 left-8 w-6 h-6 border border-blue-300 rounded-sm rotate-45"></div>
                        <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-blue-300 rounded-full"></div>
                      </div>
                      
                      <div className="relative text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                            <Wrench className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <h5 className="text-xl font-bold text-slate-800 mb-2">Diagnostic Workshop</h5>
                        <p className="text-slate-600 font-medium leading-relaxed">
                          Professional automotive training simulation with advanced diagnostic tools and safety procedures
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium text-slate-700">Workshop Ready</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Workflow Steps with Consistent Background */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                The Zyglio Workflow
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From spoken expertise to interactive learning experiences in five seamless steps
              </p>
            </div>
            
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                    />
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-lg border border-slate-100">
                      <div className="flex items-center gap-6 mb-8">
                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                          <step.icon className={`w-10 h-10 ${step.color}`} />
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-slate-300 mb-1">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-slate-700 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example Scenario with Enhanced Styling */}
        <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                See It In Action
              </h3>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Watch how a 5-minute chef explanation becomes a comprehensive culinary training program
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-slate-200">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=400&fit=crop" 
                    alt="Professional chef demonstrating advanced culinary techniques in upscale restaurant kitchen with sous chefs"
                    className="w-full h-80 object-cover rounded-2xl shadow-xl"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl flex items-center justify-center">
                      <ChefHat className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900">Executive Chef's Masterclass</h4>
                      <p className="text-slate-600 font-medium">5-minute explanation becomes comprehensive training program</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                      <p className="text-sm font-semibold text-blue-800 mb-3 uppercase tracking-wide">Voice Input:</p>
                      <p className="text-slate-700 italic leading-relaxed">
                        "For the perfect duck confit, cure the legs in kosher salt and thyme for 24 hours. 
                        Cook slowly at 200°F in duck fat for 2-3 hours until tender. Critical temperature points and timing variations based on leg size..."
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                      <p className="text-sm font-semibold text-green-800 mb-3 uppercase tracking-wide">Simulation Output:</p>
                      <ul className="text-slate-700 space-y-2">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Interactive culinary simulation with timing precision</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Temperature monitoring and quality checkpoints</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Adaptive feedback for technique refinement</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Sensory evaluation and plating standards</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Examples with Enhanced Cards */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Real-World Applications
              </h3>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                See how Zyglio transforms expertise across industries
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Automotive Repair & Diagnostics */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-300">
                <div className="mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=300&fit=crop" 
                    alt="Professional automotive technician working on modern car engine diagnostics with advanced diagnostic equipment"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Automotive Repair & Diagnostics</h4>
                </div>
                <p className="text-slate-700 mb-6 text-lg leading-relaxed">
                  Master technician explains EV battery diagnostics and ADAS calibration procedures.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-700 font-medium">Step-by-step diagnostic procedures</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700 font-medium">Equipment-specific protocols</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-slate-700 font-medium">Safety and compliance checks</span>
                  </div>
                </div>
              </div>

              {/* Medical Education & Simulation */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-300">
                <div className="mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=300&fit=crop" 
                    alt="Medical students practicing clinical procedures in modern simulation lab with advanced medical equipment"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Medical Education & Simulation</h4>
                </div>
                <p className="text-slate-700 mb-6 text-lg leading-relaxed">
                  Teaching doctor explains post-operative sepsis diagnosis and treatment protocols.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-700 font-medium">Patient scenario variations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700 font-medium">Multilingual patient interactions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-slate-700 font-medium">Adaptive complexity levels</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorks;
