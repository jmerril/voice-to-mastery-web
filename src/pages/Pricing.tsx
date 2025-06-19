
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, Building, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "299",
      period: "per month",
      description: "Perfect for small teams getting started with voice-powered training",
      icon: <Zap className="h-6 w-6" />,
      features: [
        "Up to 250 users",
        "10 voice simulations",
        "Basic analytics dashboard",
        "Email support",
        "Standard templates",
        "Mobile app access"
      ],
      highlighted: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "899",
      period: "per month",
      description: "Advanced features for growing organizations with complex training needs",
      icon: <Building className="h-6 w-6" />,
      features: [
        "Unlimited users",
        "Unlimited simulations",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom scenario builder",
        "API integrations",
        "Multi-language support",
        "White-label options"
      ],
      highlighted: true,
      cta: "Request Demo"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Complete solution with dedicated support for large-scale deployments",
      icon: <Shield className="h-6 w-6" />,
      features: [
        "Everything in Professional",
        "On-premise deployment",
        "Custom scenario engineering",
        "Dedicated success manager",
        "SLA guarantees",
        "Advanced security features",
        "Custom integrations",
        "Training & onboarding"
      ],
      highlighted: false,
      cta: "Contact Sales"
    }
  ];

  const roiHighlights = [
    {
      metric: "100x",
      description: "Faster content development speed"
    },
    {
      metric: "30-70%",
      description: "Reduction in onboarding time"
    },
    {
      metric: "2-4x",
      description: "Increase in knowledge retention"
    },
    {
      metric: "$1000s",
      description: "Annual cost savings per learner"
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
              Results That Justify the Investment
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Training used to be a drain on time and budget. With Zyglio, it's a strategic advantage 
              that pays for itself through improved efficiency and outcomes.
            </p>
          </div>
        </section>

        {/* ROI Highlights */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {roiHighlights.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {item.metric}
                  </div>
                  <div className="text-slate-600">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Flexible pricing designed to grow with your organization's training needs
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative ${plan.highlighted ? 'border-blue-500 shadow-xl scale-105' : 'border-slate-200'}`}
                >
                  {plan.highlighted && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <div className="mb-4 flex justify-center">
                      <div className={`p-3 rounded-full ${plan.highlighted ? 'bg-blue-100' : 'bg-slate-100'}`}>
                        {plan.icon}
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-slate-600 mt-2">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-6">
                      <div className="text-4xl font-bold text-slate-900">
                        ${plan.price}
                        {plan.price !== "Custom" && (
                          <span className="text-lg font-normal text-slate-600">
                            /{plan.period.split(' ')[1]}
                          </span>
                        )}
                      </div>
                      {plan.price === "Custom" && (
                        <div className="text-slate-600 mt-1">{plan.period}</div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/demo" className="block">
                      <Button 
                        className={`w-full ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-900 hover:bg-slate-800'}`}
                        size="lg"
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
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
                  How quickly can we get started?
                </h3>
                <p className="text-slate-600">
                  Most organizations are up and running within 48 hours. Our onboarding process includes setup, initial voice simulation creation, and team training.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  What languages does Zyglio support?
                </h3>
                <p className="text-slate-600">
                  Zyglio supports voice input and output in 40+ languages, with cultural nuance and regional terminology automatically handled by our AI.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Can we integrate with our existing LMS?
                </h3>
                <p className="text-slate-600">
                  Yes, Zyglio offers API integrations with major LMS platforms and can also function as a standalone training solution.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Is there a minimum contract term?
                </h3>
                <p className="text-slate-600">
                  Starter and Professional plans are month-to-month. Enterprise plans typically include annual agreements with flexible terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Training ROI?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hundreds of organizations already using Zyglio to turn voice into their most valuable training asset.
            </p>
            <Link to="/demo">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your Free Trial
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

export default Pricing;
