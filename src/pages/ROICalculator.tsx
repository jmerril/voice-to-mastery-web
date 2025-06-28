
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import InteractiveROICalculator from "../components/InteractiveROICalculator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Building, Shield, Download, Phone, TrendingUp, Calculator, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const ROICalculator = () => {
  const valueProps = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Increase Company Value",
      description: "Organizations using Zyglio see 25-40% improvement in operational efficiency, directly impacting company valuation and market position."
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Boost Profitability", 
      description: "Reduce training costs by up to 70% while increasing knowledge retention by 2-4x, creating sustainable competitive advantages."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Mitigation",
      description: "Better-trained teams mean fewer costly mistakes, improved compliance, and reduced liability exposure across your organization."
    }
  ];

  const roiHighlights = [
    {
      metric: "300%",
      description: "Average ROI within 12 months"
    },
    {
      metric: "70%",
      description: "Reduction in training costs"
    },
    {
      metric: "4x",
      description: "Faster employee competency"
    },
    {
      metric: "$2M+",
      description: "Average annual value created"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Enhanced Hero Section with Consistent Styling */}
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
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Transform training from cost center to competitive advantage. 
              <span className="text-green-300 font-semibold"> Discover your personalized ROI </span>
              with our advanced calculator.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12 animate-fade-in">
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <DollarSign className="h-12 w-12 text-green-400" />
                <span className="text-white font-semibold text-lg">Instant Analysis</span>
                <span className="text-blue-200 text-center">Real-time ROI calculations</span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <TrendingUp className="h-12 w-12 text-blue-400" />
                <span className="text-white font-semibold text-lg">Personalized Results</span>
                <span className="text-blue-200 text-center">Tailored to your organization</span>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Shield className="h-12 w-12 text-purple-400" />
                <span className="text-white font-semibold text-lg">Enterprise Grade</span>
                <span className="text-blue-200 text-center">Proven methodologies</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive ROI Calculator */}
        <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <InteractiveROICalculator />
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
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
                <Card key={index} className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl w-fit">
                      <div className="text-blue-600">
                        {prop.icon}
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-slate-900">{prop.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{prop.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Highlights */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Real Results, Real ROI
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our clients don't just save money - they create measurable business value 
                that transforms their entire organization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {roiHighlights.map((item, index) => (
                <Card key={index} className="text-center border-slate-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-slate-50">
                  <CardContent className="p-8">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      {item.metric}
                    </div>
                    <div className="text-slate-600 font-medium text-lg">
                      {item.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ROICalculator;
