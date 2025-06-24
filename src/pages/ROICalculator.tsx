
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
        {/* Enhanced Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="max-w-5xl mx-auto text-center relative">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-blue-100 rounded-full">
              <Calculator className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-medium">ROI Calculator</span>
            </div>
            
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Calculate Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Training ROI
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Stop treating training as a cost center. Discover how Zyglio transforms your training investment 
              into measurable business value, competitive advantage, and sustainable growth.
            </p>
            
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-6 w-6 text-green-600" />
                <span className="text-slate-700 font-medium">Instant ROI Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <span className="text-slate-700 font-medium">Personalized Results</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-purple-600" />
                <span className="text-slate-700 font-medium">Risk-Free Analysis</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive ROI Calculator */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <InteractiveROICalculator />
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
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
        <section className="py-20 px-4 bg-white">
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
