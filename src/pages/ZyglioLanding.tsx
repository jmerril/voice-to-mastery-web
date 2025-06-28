
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ZyglioLanding = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Enhanced Hero Section with Background Graphic */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        {/* Background Image with Curved Corners */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop" 
            alt="Digital network visualization representing AI-powered learning connections"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-blue-900/90 rounded-3xl"></div>
        </div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/30 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-cyan-400/25 rounded-full blur-md animate-pulse"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            From Voice to 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Mastery</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-300 mb-8 animate-fade-in">
            From Prompt to Unprecedented Educational Experiences
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Zyglio revolutionizes how people learn by transforming speech into structured, object-based training simulations. One voice, one explanation—instantly becomes a learning experience that adapts, scales, and evolves across roles, locations, and industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/demo">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Request a Live Demo
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                Watch How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modern AI Technology Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop" 
              alt="Modern AI technology workspace with multiple screens showing data analytics"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl mb-8"
            />
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🎤</span>
              </div>
              <h3 className="text-xl font-semibold">Voice Input</h3>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold">AI Processing</h3>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-semibold">Simulation</h3>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold">Training</h3>
            </div>
          </div>
        </div>
      </section>

      {/* The Future of Training Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-8">
              The Future of Training is Here
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                In the past, training content had to be carefully scripted, filmed, and edited. One hour of courseware could take over 100 hours of subject matter expert (SME) time.
              </p>
              <p className="text-xl font-semibold text-blue-600">
                With Zyglio, that model is gone.
              </p>
              <p>
                Today, a single voice-based explanation—even a casual mentoring session—can generate adaptive learning modules, multilingual simulations, and measurable training outcomes.
              </p>
              <p>
                Zyglio makes content dynamic, object-oriented, and infinitely flexible—without needing specialized teams to build from scratch.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop" 
              alt="Professional team collaborating in modern office environment"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Why Zyglio Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 text-center mb-16">
            Why Zyglio?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 hover:shadow-xl transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
                  alt="Business analytics dashboard showing growth metrics"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-blue-600">100x Faster Content Production</h3>
                <p className="text-slate-600 text-lg">
                  Transform what used to take 100 hours into a reusable course in under one.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" 
                  alt="Team of professionals working together in training session"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Scalable Mentorship</h3>
                <p className="text-slate-600 text-lg">
                  Your best instructor can now "train" hundreds—even thousands—of team members without being present.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop" 
                  alt="Global network connectivity representing multilingual capabilities"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-cyan-600">Multilingual from Day One</h3>
                <p className="text-slate-600 text-lg">
                  Zyglio's voice engine supports language expansion and localization with no manual scripting.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop" 
                  alt="Diverse group of people speaking different languages in a collaborative setting"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-green-600">Language Barrier-Free Learning</h3>
                <p className="text-slate-600 text-lg">
                  Support for 40+ languages eliminates language as a barrier to accessing expert knowledge and training.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry-Agnostic Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-8">
            Industry-Agnostic. Discipline-Flexible.
          </h2>
          <p className="text-xl text-slate-600 mb-16 max-w-4xl mx-auto">
            Wherever there's expertise to transfer—whether in the kitchen, the OR, the garage, or the flight deck—Zyglio turns human mentorship into scalable training.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop" 
                alt="Restaurants & Hospitality"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold">Restaurants & Hospitality</h3>
            </div>
            
            <div className="text-center space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop" 
                alt="Healthcare"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold">Healthcare</h3>
            </div>
            
            <div className="text-center space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=200&fit=crop" 
                alt="Automotive"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold">Automotive</h3>
            </div>
            
            <div className="text-center space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=300&h=200&fit=crop" 
                alt="Aerospace"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold">Aerospace</h3>
            </div>
          </div>
          
          <Link to="/industries">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Explore All Industries
            </Button>
          </Link>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto text-center">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=400&fit=crop" 
            alt="Modern office meeting room with presentation screen"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl mb-12"
          />
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform Your Training?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            See how Zyglio can work in your environment with a personalized demo.
          </p>
          
          <Link to="/demo">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              Request Your Demo Today
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ZyglioLanding;
