
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
      icon: <TrendingUp className="h-6 w-6 text-green-600" />
    },
    {
      metric: "70%",
      description: "Reduction in training costs",
      icon: <DollarSign className="h-6 w-6 text-blue-600" />
    },
    {
      metric: "4x",
      description: "Faster employee competency",
      icon: <Users className="h-6 w-6 text-purple-600" />
    },
    {
      metric: "$2M+",
      description: "Average annual value created",
      icon: <Award className="h-6 w-6 text-orange-600" />
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
        {/* Clean Hero Section */}
        <section className="pt-32 pb-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-8 bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200 px-6 py-2 text-sm font-medium">
              <Calculator className="w-4 h-4 mr-2" />
              AI-Powered ROI Calculator
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Calculate Your
              <span className="block text-blue-600 mt-2">
                Training ROI
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform training from cost center to competitive advantage. 
              Discover your personalized ROI with our advanced calculator based on real client data.
            </p>

            {/* Clean Stats Grid */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {roiHighlights.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 mx-auto w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.metric}</div>
                  <div className="text-slate-600 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Start Calculating Now
            </Button>
            <p className="text-slate-500 text-sm mt-4">Free • No signup required • Instant results</p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-white text-slate-700 hover:bg-slate-100 border-slate-200">
                How It Works
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Get Your ROI in 3 Simple Steps
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Our AI-powered calculator uses industry benchmarks and proven methodologies 
                to deliver accurate, personalized ROI projections.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mb-8 mx-auto w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center relative">
                    <div className="text-blue-600">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive ROI Calculator */}
        <section id="calculator" className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-green-50 text-green-700 hover:bg-green-100 border-green-200">
                <Lightbulb className="w-4 h-4 mr-2" />
                Interactive Calculator
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Discover Your Training Transformation Potential
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Enter your organization's data below to see how Zyglio can transform your training ROI. 
                All calculations are based on real client outcomes and industry benchmarks.
              </p>
            </div>
            <InteractiveROICalculator />
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-24 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-white text-slate-700 hover:bg-slate-100 border-slate-200">
                Strategic Value
              </Badge>
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
                <Card key={index} className="text-center border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-6 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center">
                      <div className="text-blue-600">
                        {prop.icon}
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-slate-900 mb-3">{prop.title}</CardTitle>
                    <Badge className="bg-green-50 text-green-700 border-green-200">{prop.highlight}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{prop.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Clean Call to Action */}
        <section className="py-24 px-4 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Training ROI?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of organizations that have already discovered the power of AI-driven training. 
              Start your transformation today.
            </p>
            <Link to="/demo">
              <Button 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                Schedule Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
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
