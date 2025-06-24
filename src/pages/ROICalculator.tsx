import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import InteractiveROICalculator from "../components/InteractiveROICalculator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Building, Shield, Download, Phone, TrendingUp } from "lucide-react";
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
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Make Your Company More Valuable & Profitable
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Stop treating training as a cost center. With Zyglio, training becomes your competitive advantage 
              that directly impacts your bottom line and company valuation.
            </p>
          </div>
        </section>

        {/* Interactive ROI Calculator */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <InteractiveROICalculator />
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-16 px-4 bg-slate-50">
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

export default ROICalculator;
