
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
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Increase Company Value",
      description: "Organizations using Zyglio see 25-40% improvement in operational efficiency, directly impacting company valuation and market position.",
      highlight: "25-40% efficiency boost"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Boost Profitability", 
      description: "Reduce training costs by up to 70% while increasing knowledge retention by 2-4x, creating sustainable competitive advantages.",
      highlight: "70% cost reduction"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Mitigation",
      description: "Better-trained teams mean fewer costly mistakes, improved compliance, and reduced liability exposure across your organization.",
      highlight: "60% fewer errors"
    }
  ];

  const roiHighlights = [
    {
      metric: "300%",
      description: "Average ROI within 12 months",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />
    },
    {
      metric: "70%",
      description: "Reduction in training costs",
      icon: <DollarSign className="h-8 w-8 text-blue-600" />
    },
    {
      metric: "4x",
      description: "Faster employee competency",
      icon: <Users className="h-8 w-8 text-purple-600" />
    },
    {
      metric: "$2M+",
      description: "Average annual value created",
      icon: <Award className="h-8 w-8 text-orange-600" />
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Enter Your Data",
      description: "Input your organization's current training metrics and costs",
      icon: <Calculator className="h-6 w-6" />
    },
    {
      step: "2", 
      title: "AI Analysis",
      description: "Our algorithm calculates personalized ROI based on industry benchmarks",
      icon: <Brain className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Get Results",
      description: "Receive detailed breakdown of savings, gains, and strategic value",
      icon: <Target className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Enhanced Hero Section */}
        <section className="relative pt-20 pb-16 px-4 overflow-hidden">
          {/* Background Image with Curved Corners */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1920&h=1080&fit=crop" 
              alt="Modern financial analytics dashboard with charts, graphs, and ROI metrics displayed on multiple screens"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-blue-900/90 rounded-3xl"></div>
          </div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 z-10 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#60a5fa_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] rounded-3xl" />
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
            <div className="inline-flex items-center space-x-3 mb-8 px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/20">
              <Calculator className="h-6 w-6 text-cyan-400" />
              <span className="text-white font-semibold text-lg">AI-Powered ROI Calculator</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Calculate Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Training ROI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Transform training from cost center to competitive advantage. 
              <span className="text-green-300 font-semibold"> Discover your personalized ROI </span>
              with our advanced calculator based on real client data.
            </p>

            {/* Quick Stats Preview */}
            <div className="grid md:grid-cols-4 gap-6 mb-12 animate-fade-in">
              {roiHighlights.map((stat, index) => (
                <div key={index} className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  {stat.icon}
                  <span className="text-3xl font-bold text-white">{stat.metric}</span>
                  <span className="text-blue-200 text-center text-sm">{stat.description}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Start Calculating Now
              </Button>
              <p className="text-blue-200 text-sm">Free • No signup required • Instant results</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">How It Works</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Get Your ROI in 3 Simple Steps
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our AI-powered calculator uses industry benchmarks and proven methodologies 
                to deliver accurate, personalized ROI projections for your organization.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {howItWorks.map((step, index) => (
                <Card key={index} className="text-center border-slate-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full w-fit relative">
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {step.step}
                      </div>
                      <div className="text-blue-600">
                        {step.icon}
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-slate-900">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive ROI Calculator */}
        <section id="calculator" className="py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
                <Lightbulb className="w-4 h-4 mr-2" />
                Interactive Calculator
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Discover Your Training Transformation Potential
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Enter your organization's data below to see how Zyglio can transform your training ROI. 
                All calculations are based on real client outcomes and industry benchmarks.
              </p>
            </div>
            <InteractiveROICalculator />
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Strategic Value</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Transform Training Into Strategic Value
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Every minute spent on traditional training is money left on the table. 
                See how leading companies are turning training into their competitive edge.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {valueProps.map((prop, index) => (
                <Card key={index} className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                      <div className="text-blue-600">
                        {prop.icon}
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-slate-900 mb-2">{prop.title}</CardTitle>
                    <Badge className="bg-green-100 text-green-800">{prop.highlight}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{prop.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-purple-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Training ROI?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that have already discovered the power of AI-driven training. 
              Start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/demo">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Schedule Free Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200"
                >
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ROICalculator;
