
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
      detail: "Organizations using Zyglio see dramatic improvements in operational efficiency."
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Profitability", 
      description: "70% cost reduction",
      detail: "Reduce training costs while increasing retention by 2-4x."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Risk Mitigation",
      description: "60% fewer errors",
      detail: "Better-trained teams mean fewer costly mistakes and improved compliance."
    }
  ];

  const roiHighlights = [
    { metric: "300%", description: "Average ROI within 12 months" },
    { metric: "70%", description: "Reduction in training costs" },
    { metric: "4x", description: "Faster employee competency" },
    { metric: "$2M+", description: "Average annual value created" }
  ];

  const howItWorks = [
    { step: "1", title: "Enter Data", description: "Input your organization's training metrics" },
    { step: "2", title: "AI Analysis", description: "Algorithm calculates personalized ROI" },
    { step: "3", title: "Get Results", description: "Receive detailed breakdown of value" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Condensed Hero Section */}
        <section className="relative pt-16 pb-12 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 right-5 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center" 
              alt="ROI Calculator Analytics" 
              className="absolute top-0 right-0 w-1/3 h-full object-cover opacity-5"
            />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Main Title Column */}
              <div className="lg:col-span-2">
                <Badge className="mb-4 bg-white/80 backdrop-blur-sm text-slate-700 border-slate-200 px-4 py-1">
                  <Calculator className="w-3 h-3 mr-2" />
                  AI-Powered ROI Calculator
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                  Calculate Your
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Training ROI
                  </span>
                </h1>
                
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Transform training from cost center to competitive advantage with our advanced calculator.
                </p>

                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg shadow-lg"
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Now
                </Button>
              </div>

              {/* Stats Column */}
              <div className="space-y-4">
                {roiHighlights.map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50">
                    <div className="text-2xl font-bold text-slate-900">{stat.metric}</div>
                    <div className="text-slate-600 text-sm">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Column Content Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Left Column - How It Works */}
              <div className="lg:col-span-4">
                <div className="sticky top-24">
                  <div className="border-l-4 border-blue-600 pl-6 mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">How It Works</h2>
                    <p className="text-slate-600">AI-powered calculator using industry benchmarks and proven methodologies.</p>
                  </div>
                  
                  <div className="space-y-6">
                    {howItWorks.map((step, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                            <p className="text-slate-600 text-sm">{step.description}</p>
                          </div>
                        </div>
                        {index < howItWorks.length - 1 && (
                          <div className="w-px h-6 bg-slate-200 ml-4 mt-2"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Column - Calculator */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-slate-100 p-1 shadow-lg">
                  <div className="bg-white rounded-xl p-6">
                    <div id="calculator">
                      <InteractiveROICalculator />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Value Props */}
              <div className="lg:col-span-3">
                <div className="sticky top-24">
                  <div className="border-l-4 border-green-600 pl-6 mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">Strategic Value</h2>
                    <p className="text-slate-600">Transform training into competitive advantage.</p>
                  </div>
                  
                  <div className="space-y-6">
                    {valueProps.map((prop, index) => (
                      <Card key={index} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-start mb-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg flex items-center justify-center mr-3">
                              <div className="text-blue-600">
                                {prop.icon}
                              </div>
                            </div>
                            <div>
                              <h3 className="font-bold text-slate-900 text-sm">{prop.title}</h3>
                              <Badge className="bg-green-100 text-green-800 text-xs mt-1">{prop.description}</Badge>
                            </div>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed">{prop.detail}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="border-l-4 border-purple-600 pl-6 mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Research & Methodology</h2>
                  <p className="text-slate-600">Based on industry benchmarks and proven client outcomes.</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-4">Key Assumptions</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-slate-500">Training Cost Reduction</div>
                      <div className="font-semibold text-slate-900">70%</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Productivity Improvement</div>
                      <div className="font-semibold text-slate-900">4x Faster</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Error Reduction</div>
                      <div className="font-semibold text-slate-900">60%</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Turnover Reduction</div>
                      <div className="font-semibold text-slate-900">40%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-l-4 border-orange-600 pl-6 mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Client Success Stories</h2>
                  <p className="text-slate-600">Real results from organizations like yours.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mr-4">
                        <Building className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Manufacturing Corp</div>
                        <div className="text-slate-500 text-sm">500+ employees</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-green-600 mb-1">425% ROI</div>
                    <div className="text-slate-600 text-sm">Achieved in 8 months with 65% cost reduction</div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mr-4">
                        <Shield className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Healthcare System</div>
                        <div className="text-slate-500 text-sm">1200+ employees</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-green-600 mb-1">380% ROI</div>
                    <div className="text-slate-600 text-sm">6 month payback with 70% error reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compact CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Training ROI?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations discovering the power of AI-driven training.
            </p>
            <Link to="/demo">
              <Button 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-lg shadow-lg"
              >
                Schedule Free Demo
                <ArrowRight className="ml-2 h-4 w-4" />
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
