
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play, Mic, Brain, Zap, Globe, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-6">
            From Voice to Mastery
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-4xl mx-auto">
            AI-Powered Simulation, Built from Your Conversations
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-5xl mx-auto leading-relaxed">
            Zyglio revolutionizes how people learn by transforming speech into structured, object-based training simulations. 
            One voice, one explanation—instantly becomes a learning experience that adapts, scales, and evolves across roles, locations, and industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/demo">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Request a Live Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              <Play className="mr-2 h-5 w-5" /> Watch How It Works
            </Button>
          </div>
          
          {/* Hero Visual */}
          <div className="relative mb-12">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop" 
              alt="Modern AI technology workspace with multiple screens showing data analytics"
              className="w-full h-64 md:h-96 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { icon: Mic, label: "Voice Input", color: "text-blue-500" },
                    { icon: Brain, label: "AI Processing", color: "text-purple-500" },
                    { icon: Zap, label: "Simulation", color: "text-yellow-500" },
                    { icon: Users, label: "Training", color: "text-green-500" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className={`${item.color} mb-3 flex justify-center`}>
                        <item.icon size={48} />
                      </div>
                      <p className="text-sm font-medium text-slate-600">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
                The Future of Training is Here
              </h2>
              <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
                <p>
                  In the past, training content had to be carefully scripted, filmed, and edited. 
                  One hour of courseware could take over 100 hours of subject matter expert (SME) time.
                </p>
                <p className="font-semibold text-blue-600 text-xl">
                  With Zyglio, that model is gone.
                </p>
                <p>
                  Today, a single voice-based explanation—even a casual mentoring session—can generate 
                  adaptive learning modules, multilingual simulations, and measurable training outcomes.
                </p>
                <p>
                  Zyglio makes content dynamic, object-oriented, and infinitely flexible—without needing 
                  specialized teams to build from scratch.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                alt="Professional team collaborating in modern office environment"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            Why Zyglio?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" 
                    alt="Business analytics dashboard showing growth metrics"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <TrendingUp size={48} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">100x Faster Content Production</h3>
                <p className="text-slate-600">
                  Transform what used to take 100 hours into a reusable course in under one.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop" 
                    alt="Team of professionals working together in training session"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-teal-600/20 rounded-lg flex items-center justify-center">
                    <Users size={48} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Scalable Mentorship</h3>
                <p className="text-slate-600">
                  Your best instructor can now "train" hundreds—even thousands—of team members without being present.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop" 
                    alt="Global network connectivity representing multilingual capabilities"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Globe size={48} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Multilingual from Day One</h3>
                <p className="text-slate-600">
                  Zyglio's voice engine supports language expansion and localization with no manual scripting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
            Industry-Agnostic. Discipline-Flexible.
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
            Wherever there's expertise to transfer—whether in the kitchen, the OR, the garage, or the flight deck—Zyglio turns human mentorship into scalable training.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { 
                emoji: "🍴", 
                label: "Restaurants & Hospitality",
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop"
              },
              { 
                emoji: "🏥", 
                label: "Healthcare",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop"
              },
              { 
                emoji: "🚗", 
                label: "Automotive",
                image: "https://images.unsplash.com/photo-1632823471565-1ecdf6b21cd8?w=300&h=200&fit=crop"
              },
              { 
                emoji: "✈️", 
                label: "Aerospace",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop"
              }
            ].map((industry, index) => (
              <div key={index} className="relative group">
                <img 
                  src={industry.image} 
                  alt={industry.label}
                  className="w-full h-32 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="text-3xl mb-2">{industry.emoji}</div>
                  <p className="font-medium text-sm text-center px-2">{industry.label}</p>
                </div>
              </div>
            ))}
          </div>
          
          <Link to="/industries">
            <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              Explore All Industries <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=400&fit=crop" 
            alt="Modern office meeting room with presentation screen"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Training?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            See how Zyglio can work in your environment with a personalized demo.
          </p>
          <Link to="/demo">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Request Your Demo Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
