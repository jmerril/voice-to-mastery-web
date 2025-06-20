
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Zap, Brain, Blocks, Gamepad2, Sparkles, Cpu, Globe, ArrowRight, CheckCircle, Mic, Headphones, Play, BookOpen, MessageSquare, Shield, Stethoscope, Plane } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              About <span className="text-blue-600">Zyglio</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              We're building the future of education through AI-powered simulations that transform 
              tribal knowledge into immersive, adaptive learning experiences.
            </p>
          </div>

          {/* Meet the Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-4">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-blue-800 font-medium">Meet the Team</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Our 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Expert Team</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Industry veterans from leading EdTech, AI, and specialized sectors bringing 
                decades of experience to revolutionize educational technology.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Leadership Team */}
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop" 
                      alt="CEO headshot - professional business leader"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Leadership Team</h3>
                      <p className="text-blue-600 font-medium">Executive Leadership</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Former executives from leading EdTech and AI companies with proven track records 
                    of scaling innovative educational technologies and building successful teams.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Strategic Vision</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>EdTech Experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Market Leadership</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Engineering Team */}
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616c667e7d3?w=400&h=250&fit=crop" 
                      alt="CTO headshot - female technology executive"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Engineering Team</h3>
                      <p className="text-green-600 font-medium">Technical Innovation</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    AI and ML experts from top technology companies specializing in educational AI, 
                    simulation technology, and scalable platform architecture.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>AI/ML Expertise</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Simulation Technology</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Platform Architecture</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Advisory Board */}
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=250&fit=crop" 
                      alt="Head of Product headshot - diverse business professional"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Advisory Board</h3>
                      <p className="text-orange-600 font-medium">Industry Expertise</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Industry leaders in healthcare, aerospace, and education providing strategic guidance 
                    and domain expertise for mission-critical simulation applications.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Stethoscope className="w-3 h-3 text-red-500" />
                      <span>Healthcare Leaders</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Plane className="w-3 h-3 text-blue-500" />
                      <span>Aerospace Experts</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <BookOpen className="w-3 h-3 text-green-500" />
                      <span>Education Innovators</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Team Impact Statement */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-slate-100 to-blue-100 rounded-2xl p-8 max-w-4xl mx-auto">
                <p className="text-lg text-slate-700 font-medium">
                  "Our diverse team combines deep technical expertise with real-world industry experience, 
                  ensuring that every simulation we create meets the highest standards of accuracy, 
                  engagement, and educational effectiveness."
                </p>
              </div>
            </div>
          </div>

          {/* Educational Experience Spectrum */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-4 py-2 mb-4">
                <BookOpen className="h-5 w-5 text-green-600" />
                <span className="text-green-800 font-medium">Complete Learning Spectrum</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                From Traditional to 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Revolutionary</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Zyglio adapts to every learning style and scenario, providing the right educational experience 
                for every moment—from quick knowledge checks to immersive skill mastery.
              </p>
            </div>

            {/* Experience Cards */}
            <div className="space-y-8">
              {/* Traditional Learning */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-slate-200">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800">Traditional Assessment</h3>
                        <p className="text-slate-500">Multiple choice, fill-in-the-blank, true/false</p>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Start with familiar formats that learners already know. Our AI enhances traditional 
                      multiple choice and assessment formats with adaptive questioning, instant feedback, 
                      and personalized difficulty adjustment.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-slate-600">Adaptive question difficulty</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-slate-600">Instant feedback and explanations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-slate-600">Progress tracking and analytics</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop" 
                      alt="Student taking online assessment on tablet with multiple choice questions"
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>

              {/* Voice-First Learning */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 shadow-lg border border-purple-200">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                      alt="People collaborating around computers in modern office setting"
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent rounded-2xl"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <Mic className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Headphones className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800">Voice-First Simulations</h3>
                        <p className="text-purple-600">Conversational AI learning experiences</p>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Learn through natural conversation. Practice scenarios, ask questions, and receive 
                      guidance through voice interactions. Perfect for hands-free learning, accessibility, 
                      and situations where visual interfaces aren't practical.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-slate-600">Natural language conversations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-slate-600">Hands-free operation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-slate-600">Multilingual support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Educational Holodeck */}
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-8 text-white shadow-2xl border border-slate-700 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-8 left-8 w-32 h-32 border border-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-12 right-12 w-24 h-24 bg-white/10 rounded-lg rotate-45 animate-bounce"></div>
                  <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-blue-400/50 rounded-full animate-spin"></div>
                  <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-purple-400/20 rounded-lg animate-pulse delay-1000"></div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-16 right-24 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-24 left-20 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-500"></div>
                  <div className="absolute top-40 left-40 w-1 h-1 bg-white/60 rounded-full animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                          <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Educational Holodeck</h3>
                          <p className="text-blue-200">Full immersive reality simulations</p>
                        </div>
                      </div>
                      <p className="text-blue-100 mb-6 leading-relaxed">
                        Step into completely immersive learning environments where AI assembles objects, 
                        people, and scenarios in real-time. Experience hands-on training that feels 
                        indistinguishable from reality, without the cost or constraints of physical setups.
                      </p>
                      <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-full px-4 py-2 border border-white/30">
                        <Play className="h-4 w-4 text-white" />
                        <span className="text-white font-medium">The future of training is here</span>
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop" 
                        alt="Futuristic holographic interface with 3D projections and interactive elements"
                        className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 rounded-2xl"></div>
                      <div className="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Adaptive Learning Flow */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-4 shadow-lg">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                <ArrowRight className="h-4 w-4 text-slate-400" />
                <Mic className="h-5 w-5 text-purple-600" />
                <ArrowRight className="h-4 w-4 text-slate-400" />
                <Sparkles className="h-5 w-5 text-indigo-600" />
                <span className="text-slate-700 font-medium ml-2">One platform, infinite possibilities</span>
              </div>
            </div>
          </div>

          {/* AI-Enhanced Holodeck Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-2 mb-4">
                <Sparkles className="h-5 w-5 text-purple-600" />
                <span className="text-purple-800 font-medium">Revolutionary Technology</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Building the Educational 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> Holodeck</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                By combining AI with object-oriented technology, we create realistic, immersive simulations 
                without the traditional complexity and cost. Welcome to agile, gamified education.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop" 
                  alt="Futuristic holographic interface displaying AI-powered educational simulations with interactive 3D elements"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">AI-Driven Object Assembly</h3>
                    <p className="text-slate-600">Our AI intelligently selects and combines objects, people, and scenarios to create realistic simulations on-demand, eliminating traditional development overhead.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Blocks className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Object-Oriented Reusability</h3>
                    <p className="text-slate-600">Every element is modular and reusable—from equipment and procedures to environments and characters—creating infinite learning combinations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gamepad2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Gamified Engagement</h3>
                    <p className="text-slate-600">Immersive, game-like experiences with real-time feedback, achievements, and adaptive challenges that keep learners engaged and motivated.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Showcase */}
            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-32 h-32 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-24 h-24 bg-white/10 rounded-lg rotate-45"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white/15 rounded-full"></div>
                <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-white/5 rounded-lg"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-12 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 left-16 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-32 left-32 w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
              </div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    The Future of Simulation Technology
                  </h3>
                  <p className="text-blue-100 text-lg max-w-3xl mx-auto">
                    Traditional simulation development takes months and massive budgets. 
                    Our AI-enhanced approach creates rich, interactive experiences in minutes.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                      <Cpu className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Intelligent Object Library</h4>
                    <p className="text-blue-100 text-sm">
                      Vast library of interactive objects, environments, and characters that AI assembles contextually
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Real-Time Adaptation</h4>
                    <p className="text-blue-100 text-sm">
                      Simulations adapt in real-time based on learner actions, creating unique experiences every time
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-lg flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Agile Development</h4>
                    <p className="text-blue-100 text-sm">
                      Rapid prototyping and deployment of educational simulations without traditional development cycles
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 border border-white/30">
                    <span className="text-white font-semibold">Experience the holodeck difference</span>
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Our Vision</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To democratize expertise by transforming how knowledge is captured, structured, and transmitted. 
                  We envision a world where every piece of tribal knowledge becomes accessible, interactive, 
                  and infinitely scalable through AI-powered simulations.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To bridge the gap between human expertise and scalable education through cutting-edge AI 
                  and simulation technology. We're committed to making complex knowledge accessible, 
                  engaging, and immediately applicable in real-world scenarios.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Our Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Human-Centered</h3>
                  <p className="text-slate-600">
                    We believe technology should amplify human potential, not replace it. 
                    Every feature we build starts with understanding human needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Excellence</h3>
                  <p className="text-slate-600">
                    We're committed to delivering exceptional quality in everything we do, 
                    from our technology to our customer relationships.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Innovation</h3>
                  <p className="text-slate-600">
                    We push the boundaries of what's possible in education technology, 
                    always looking for better ways to facilitate learning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 backdrop-blur-sm text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Transform Your Training?
            </h3>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Join the revolution in education technology and see how Zyglio can help you 
              capture, structure, and scale your organization's expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  Request a Demo
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="px-8 py-4">
                  Contact Us
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

export default About;
