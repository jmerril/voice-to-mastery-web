
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Hospital Onboarding Reimagined",
      industry: "Healthcare",
      problem: "New nurses needed 40+ hours to onboard for trauma protocols.",
      solution: "Voice-led mentor walkthroughs auto-generated 8 modular simulations.",
      result: "Onboarding dropped to 12 hours; nurse confidence scores increased by 3.2×.",
      metrics: [
        { label: "Training Time Reduction", value: "70%" },
        { label: "Confidence Increase", value: "3.2x" },
        { label: "Cost Savings", value: "$180k/year" }
      ],
      color: "bg-emerald-50 border-emerald-200"
    },
    {
      title: "Franchise Restaurant Simulation Rollout",
      industry: "Food Service",
      problem: "High turnover and inconsistent prep timing across 47 locations.",
      solution: "'Shake, Fries, Expo' simulations derived from head trainer voice files.",
      result: "Time to station independence dropped by 45%; manager satisfaction up 72%.",
      metrics: [
        { label: "Independence Time", value: "-45%" },
        { label: "Manager Satisfaction", value: "+72%" },
        { label: "Turnover Reduction", value: "38%" }
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Automotive Technician Excellence",
      industry: "Automotive",
      problem: "EV diagnostics required 6-month apprenticeships with limited availability.",
      solution: "Master technician expertise converted into interactive diagnostic simulations.",
      result: "Certification time reduced to 6 weeks with 94% first-attempt pass rates.",
      metrics: [
        { label: "Certification Speed", value: "75% faster" },
        { label: "Pass Rate", value: "94%" },
        { label: "Warranty Issues", value: "-60%" }
      ],
      color: "bg-purple-50 border-purple-200"
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
              Zyglio in Action
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Real stories from real organizations transforming their training approach. 
              See how voice-powered simulations deliver measurable results across industries.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <Card key={index} className={`${study.color} overflow-hidden`}>
                  <div className="grid lg:grid-cols-3 gap-8 p-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <Badge variant="secondary" className="mb-3">
                          {study.industry}
                        </Badge>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                          {study.title}
                        </h3>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            Challenge
                          </h4>
                          <p className="text-slate-700 pl-5">{study.problem}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            Solution
                          </h4>
                          <p className="text-slate-700 pl-5">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            Impact
                          </h4>
                          <p className="text-slate-700 pl-5">{study.result}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-800 mb-4">Key Metrics</h4>
                      <div className="space-y-3">
                        {study.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="bg-white rounded-lg p-4 shadow-sm">
                            <div className="text-2xl font-bold text-slate-900">
                              {metric.value}
                            </div>
                            <div className="text-sm text-slate-600">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Training?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join these industry leaders and discover how Zyglio can revolutionize your organization's approach to knowledge transfer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Request Your Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  View Pricing
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

export default CaseStudies;
