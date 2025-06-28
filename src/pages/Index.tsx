
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Building, Shield, Download, Phone, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Enhanced Hero Section with AI Learning Background */}
        <section className="relative py-32 px-4 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop" 
              alt="Futuristic AI learning environment with holographic displays showing educational content and neural network connections"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-cyan-900/80"></div>
          </div>
          
          {/* Animated Elements */}
          <div className="absolute inset-0 z-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/30 rounded-full blur-lg animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-cyan-400/25 rounded-full blur-md animate-pulse delay-500"></div>
            <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-green-400/20 rounded-full blur-lg animate-pulse delay-700"></div>
            
            {/* Floating Particles */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce delay-700"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-white/90 text-sm font-medium">Next-Generation AI Learning Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Transform Learning with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Zyglio revolutionizes education through intelligent simulations, adaptive learning, 
              and AI-powered content creation that scales expertise across organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
              <Link to="/demo">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Demo
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg">
                  Learn How It Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fade-in">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-300 mb-2">300%</div>
                <div className="text-blue-200 font-medium">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-300 mb-2">70%</div>
                <div className="text-blue-200 font-medium">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">4x</div>
                <div className="text-blue-200 font-medium">Faster Learning</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why Leading Companies Choose Zyglio
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Transform your organization's training from traditional methods to AI-powered learning experiences that deliver measurable results.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl w-fit">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Increase Company Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">Organizations using Zyglio see 25-40% improvement in operational efficiency, directly impacting company valuation and market position.</p>
                </CardContent>
              </Card>

              <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl w-fit">
                    <Building className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Boost Profitability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">Reduce training costs by up to 70% while increasing knowledge retention by 2-4x, creating sustainable competitive advantages.</p>
                </CardContent>
              </Card>

              <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl w-fit">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">Risk Mitigation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">Better-trained teams mean fewer costly mistakes, improved compliance, and reduced liability exposure across your organization.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Explore Zyglio's Capabilities
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Discover how our AI-powered platform transforms traditional training into engaging, effective learning experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link to="/how-it-works">
                <Card className="h-full border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-purple-50 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                      How It Works
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">Learn how Zyglio transforms expertise into interactive learning experiences using AI.</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/roi-calculator">
                <Card className="h-full border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-green-50 to-teal-50 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                      ROI Calculator
                      <ArrowRight className="h-5 w-5 text-green-600" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">Calculate your potential return on investment with our personalized ROI calculator.</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/industries">
                <Card className="h-full border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-purple-50 to-pink-50 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                      Industries
                      <ArrowRight className="h-5 w-5 text-purple-600" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">Explore how Zyglio transforms training across healthcare, manufacturing, and more.</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/technology">
                <Card className="h-full border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-cyan-50 to-blue-50 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                      Technology
                      <ArrowRight className="h-5 w-5 text-cyan-600" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">Discover the cutting-edge AI technology that powers Zyglio's learning platform.</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/case-studies">
                <Card className="h-full border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-orange-50 to-red-50 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                      Case Studies
                      <ArrowRight className="h-5 w-5 text-orange-600" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">See real-world success stories from companies transforming their training programs.</p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/demo">
                <Card className="h-full border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-yellow-50 to-orange-50 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                      Get Demo
                      <ArrowRight className="h-5 w-5 text-yellow-600" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">Schedule a personalized demo to see how Zyglio can transform your training programs.</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
