
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import InteractiveROICalculator from "../components/InteractiveROICalculator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Building, Shield, Download, Phone, TrendingUp, Calculator, DollarSign, Users, Clock, Brain, Target, Lightbulb, Award } from "lucide-react";
import { Link } from "react-router-dom";

const ROICalculator = () => {
  const valueProps = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Company Value",
      description: "25-40% efficiency boost",
      detail: "Organizations using Zyglio see dramatic improvements in operational efficiency.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Profitability", 
      description: "70% cost reduction",
      detail: "Reduce training costs while increasing retention by 2-4x.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Risk Mitigation",
      description: "60% fewer errors",
      detail: "Better-trained teams mean fewer costly mistakes and improved compliance.",
      color: "from-purple-500 to-violet-600"
    }
  ];

  const roiHighlights = [
    { metric: "300%", description: "Average ROI within 12 months", color: "bg-gradient-to-br from-green-500 to-emerald-600" },
    { metric: "70%", description: "Reduction in training costs", color: "bg-gradient-to-br from-blue-500 to-cyan-600" },
    { metric: "4x", description: "Faster employee competency", color: "bg-gradient-to-br from-purple-500 to-indigo-600" },
    { metric: "$2M+", description: "Average annual value created", color: "bg-gradient-to-br from-orange-500 to-red-600" }
  ];

  const howItWorks = [
    { step: "1", title: "Enter Data", description: "Input your organization's training metrics", icon: <Users className="h-5 w-5" /> },
    { step: "2", title: "AI Analysis", description: "Algorithm calculates personalized ROI", icon: <Brain className="h-5 w-5" /> },
    { step: "3", title: "Get Results", description: "Receive detailed breakdown of value", icon: <Target className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Enhanced Hero Section */}
        <section className="relative pt-20 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&crop=center" 
              alt="ROI Calculator Analytics Dashboard" 
              className="absolute top-0 right-0 w-2/5 h-full object-cover opacity-8 rounded-l-3xl"
            />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Main Title Column */}
              <div className="lg:col-span-3">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
                  <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-6 py-2 text-sm font-semibold shadow-lg">
                    <Calculator className="w-4 h-4 mr-2" />
                    AI-Powered ROI Calculator
                  </Badge>
                  
                  <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                    Calculate Your
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                      Training ROI
                    </span>
                  </h1>
                  
                  <p className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                    Transform training from cost center to competitive advantage with our advanced scientific calculator.
                  </p>

                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 text-white px-8 py-4 rounded-xl shadow-2xl text-lg font-semibold transform hover:scale-105 transition-all duration-200"
                    onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Calculator className="mr-3 h-5 w-5" />
                    Calculate Your ROI Now
                  </Button>
                </div>
              </div>

              {/* Stats Column */}
              <div className="lg:col-span-2 space-y-4">
                {roiHighlights.map((stat, index) => (
                  <div key={index} className="group hover:scale-105 transition-all duration-300">
                    <div className={`${stat.color} rounded-2xl p-6 shadow-xl border-2 border-white/50 backdrop-blur-sm`}>
                      <div className="text-4xl font-black text-white mb-2 drop-shadow-lg">{stat.metric}</div>
                      <div className="text-white/90 text-sm font-semibold tracking-wide">{stat.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Multi-Column Content Section */}
        <section className="py-20 px-4 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-white to-blue-50 opacity-50"></div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-10">
              {/* Left Column - How It Works */}
              <div className="lg:col-span-4">
                <div className="sticky top-24">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl border-4 border-slate-200">
                    <div className="border-l-6 border-yellow-400 pl-8 mb-8">
                      <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
                      <p className="text-slate-300 text-lg leading-relaxed">AI-powered calculator using industry benchmarks and proven methodologies.</p>
                    </div>
                    
                    <div className="space-y-8">
                      {howItWorks.map((step, index) => (
                        <div key={index} className="relative group">
                          <div className="flex items-start bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-slate-900 text-xl font-bold mr-6 shadow-lg">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center mb-3">
                                <div className="text-yellow-400 mr-3">{step.icon}</div>
                                <h3 className="font-bold text-white text-lg">{step.title}</h3>
                              </div>
                              <p className="text-slate-300 leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                          {index < howItWorks.length - 1 && (
                            <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 ml-7 mt-4 rounded-full"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column - Calculator */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl border-4 border-blue-200 p-2 shadow-2xl">
                  <div className="bg-white rounded-2xl p-8 shadow-inner border-2 border-slate-100">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-lg mb-4">
                        <Calculator className="h-6 w-6 mr-3" />
                        <span className="font-bold text-lg">Interactive Calculator</span>
                      </div>
                    </div>
                    <div id="calculator">
                      <InteractiveROICalculator />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Value Props */}
              <div className="lg:col-span-3">
                <div className="sticky top-24">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-2xl border-4 border-emerald-200">
                    <div className="border-l-6 border-emerald-500 pl-8 mb-8">
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">Strategic Value</h2>
                      <p className="text-slate-700 text-lg leading-relaxed">Transform training into competitive advantage.</p>
                    </div>
                    
                    <div className="space-y-6">
                      {valueProps.map((prop, index) => (
                        <Card key={index} className="border-3 border-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
                          <CardContent className="p-6">
                            <div className="flex items-start mb-4">
                              <div className={`w-14 h-14 bg-gradient-to-br ${prop.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                                <div className="text-white">
                                  {prop.icon}
                                </div>
                              </div>
                              <div className="flex-1">
                                <h3 className="font-bold text-slate-900 text-lg mb-2">{prop.title}</h3>
                                <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 font-semibold px-3 py-1 shadow-md">{prop.description}</Badge>
                              </div>
                            </div>
                            <p className="text-slate-700 leading-relaxed font-medium">{prop.detail}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Methodology Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-100 via-white to-purple-50 relative">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-10 shadow-2xl border-4 border-purple-200">
                  <div className="border-l-6 border-purple-400 pl-8 mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Research & Methodology</h2>
                    <p className="text-purple-200 text-lg leading-relaxed">Based on industry benchmarks and proven client outcomes.</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-inner border-2 border-white/20">
                    <h3 className="font-bold text-white mb-6 text-xl">Key Assumptions</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center bg-white/10 rounded-xl p-4 border border-white/20">
                        <div className="text-purple-300 text-sm font-medium mb-2">Training Cost Reduction</div>
                        <div className="font-black text-white text-2xl">70%</div>
                      </div>
                      <div className="text-center bg-white/10 rounded-xl p-4 border border-white/20">
                        <div className="text-purple-300 text-sm font-medium mb-2">Productivity Improvement</div>
                        <div className="font-black text-white text-2xl">4x</div>
                      </div>
                      <div className="text-center bg-white/10 rounded-xl p-4 border border-white/20">
                        <div className="text-purple-300 text-sm font-medium mb-2">Error Reduction</div>
                        <div className="font-black text-white text-2xl">60%</div>
                      </div>
                      <div className="text-center bg-white/10 rounded-xl p-4 border border-white/20">
                        <div className="text-purple-300 text-sm font-medium mb-2">Turnover Reduction</div>
                        <div className="font-black text-white text-2xl">40%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-10 shadow-2xl border-4 border-orange-200">
                  <div className="border-l-6 border-orange-500 pl-8 mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Client Success Stories</h2>
                    <p className="text-slate-700 text-lg leading-relaxed">Real results from organizations like yours.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-8 shadow-xl border-3 border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                          <Building className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-lg">Manufacturing Corp</div>
                          <div className="text-slate-600 font-medium">500+ employees</div>
                        </div>
                      </div>
                      <div className="text-4xl font-black text-green-600 mb-2">425% ROI</div>
                      <div className="text-slate-700 font-medium">Achieved in 8 months with 65% cost reduction</div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-xl border-3 border-green-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                          <Shield className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-lg">Healthcare System</div>
                          <div className="text-slate-600 font-medium">1200+ employees</div>
                        </div>
                      </div>
                      <div className="text-4xl font-black text-green-600 mb-2">380% ROI</div>
                      <div className="text-slate-700 font-medium">6 month payback with 70% error reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full opacity-20 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Training ROI?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of organizations discovering the power of AI-driven training.
            </p>
            <Link to="/demo">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-white to-slate-100 text-slate-900 hover:from-slate-100 hover:to-white px-10 py-4 rounded-xl shadow-2xl text-lg font-bold transform hover:scale-110 transition-all duration-300"
              >
                Schedule Free Demo
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ROICalculator;
