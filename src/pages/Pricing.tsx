
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Building, Shield, Download, Phone, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
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
        {/* Enhanced Hero Section with Background Graphic */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Background Image with Curved Corners */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop" 
              alt="Modern business analytics dashboard showing growth charts and financial data"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-purple-900/80 rounded-3xl"></div>
          </div>
          
          {/* Animated Elements */}
          <div className="absolute inset-0 z-10">
            <div className="absolute top-10 right-10 w-40 h-40 bg-green-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-400/25 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-purple-400/30 rounded-full blur-lg animate-pulse"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-20 max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
              Make Your Company More Valuable & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"> Profitable</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto animate-fade-in">
              Stop treating training as a cost center. With Zyglio, training becomes your competitive advantage 
              that directly impacts your bottom line and company valuation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/demo">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Transform Training Into Strategic Value
              </h2>
              <p className="text-xl text-slate-600">
                Every minute spent on traditional training is money left on the table
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {valueProps.map((prop, index) => (
                <Card key={index} className="text-center border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                      {prop.icon}
                    </div>
                    <CardTitle className="text-xl">{prop.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{prop.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Highlights */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Real Results, Real ROI
              </h2>
              <p className="text-xl text-slate-600">
                Our clients don't just save money - they create measurable business value
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {roiHighlights.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">
                    {item.metric}
                  </div>
                  <div className="text-slate-600 font-medium">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilot Approach Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Proven Pilot Approach
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                We determine areas that 'move the needle' and work to demonstrate value through targeted pilot efforts
              </p>
            </div>
            
            <Card className="border-slate-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        Identify High-Impact Areas
                      </h3>
                      <p className="text-slate-600">
                        We work with you to identify the specific training areas that will 'move the needle' for your organization's performance and profitability.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full p-2 mt-1">
                      <Zap className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        Demonstrate Value Through Pilots
                      </h3>
                      <p className="text-slate-600">
                        Start with focused pilot efforts that quickly demonstrate measurable value and ROI before scaling across your organization.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 rounded-full p-2 mt-1">
                      <Building className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        Scale with Comprehensive Platform
                      </h3>
                      <p className="text-slate-600">
                        Upon pilot success, Zyglio provides individual tracking, dashboarding, and a comprehensive library of simulations to enhance learning, assess performance, and offer ongoing opportunities for advancement.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Why don't you publish standard pricing?
                </h3>
                <p className="text-slate-600">
                  Every organization has unique training needs, user counts, and ROI potential. Our custom analysis ensures you get maximum value and pay only for what drives results in your specific situation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  How quickly will we see ROI?
                </h3>
                <p className="text-slate-600">
                  Most organizations see measurable improvements within 30-60 days and full ROI within 6-12 months. Our analysis will show your specific timeline based on your current training costs and efficiency gaps.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  What if Zyglio doesn't deliver the projected ROI?
                </h3>
                <p className="text-slate-600">
                  We're so confident in our results that we offer ROI guarantees for qualified enterprise clients. If we don't hit the projected returns, we'll work with you at no additional cost until we do.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Can you integrate with our existing systems?
                </h3>
                <p className="text-slate-600">
                  Yes, Zyglio integrates with major LMS platforms, HRIS systems, and can connect to virtually any system via API. Integration planning is part of your free ROI analysis.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
