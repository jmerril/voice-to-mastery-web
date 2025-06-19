
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      emoji: "🍴",
      title: "Restaurants & Hospitality",
      scenario: "Onboarding new kitchen staff for a burger line.",
      voiceInput: "Grill the burger 3 minutes per side, then move to resting tray. Wrap before fries are down.",
      outcome: "Station training that includes timing, sequencing, and quality assurance checkpoints.",
      impact: "50% reduction in onboarding time, fewer safety violations, improved kitchen flow.",
      stats: [
        { icon: Clock, label: "Onboarding Time", value: "↓ 50%" },
        { icon: TrendingUp, label: "Safety Improvements", value: "↑ 72%" }
      ]
    },
    {
      emoji: "🏥",
      title: "Hospitals and Critical Care",
      scenario: "Emergency response protocols in a multilingual care environment.",
      voiceInput: "A nurse explains how to handle triage during a mass casualty incident.",
      outcome: "Role-based simulations for nurses, assistants, and medical translators in Spanish, Tagalog, and Arabic.",
      impact: "Faster compliance readiness, higher simulation pass rates, measurable retention gains.",
      stats: [
        { icon: Users, label: "Pass Rate", value: "↑ 89%" },
        { icon: TrendingUp, label: "Retention", value: "↑ 3.2x" }
      ]
    },
    {
      emoji: "🚗",
      title: "Automotive Repair & Diagnostics",
      scenario: "Diagnosing EV battery faults and performing ADAS calibration.",
      voiceInput: "A master tech walks through a typical calibration procedure.",
      outcome: "Step-by-step virtual diagnostics with voice-activated alerts and correction cues.",
      impact: "Lower return rates, quicker technician ramp-up, and fewer warranty issues.",
      stats: [
        { icon: TrendingUp, label: "Return Rate", value: "↓ 45%" },
        { icon: Clock, label: "Ramp-up Time", value: "↓ 60%" }
      ]
    },
    {
      emoji: "✈️",
      title: "Aerospace & Defense",
      scenario: "Avionics reboots and secure comms protocols.",
      voiceInput: "A mission engineer describes typical failure modes and mission contingencies.",
      outcome: "Interactive simulations with real-world incident branches, alert protocols, and success criteria.",
      impact: "Improved mission readiness, fewer onboarding bottlenecks, stronger procedural accuracy.",
      stats: [
        { icon: Users, label: "Mission Readiness", value: "↑ 94%" },
        { icon: TrendingUp, label: "Accuracy", value: "↑ 87%" }
      ]
    },
    {
      emoji: "🧬",
      title: "Medical Education & Simulation",
      scenario: "A teaching doctor explains how to approach post-op sepsis.",
      voiceInput: "Doctor walks through diagnosis and treatment protocols for various patient scenarios.",
      outcome: "AI generates multiple patient variations, including differing comorbidities and languages.",
      impact: "Simulations evolve with the learner, training them to manage increasing complexity and uncertainty.",
      stats: [
        { icon: Users, label: "Student Confidence", value: "↑ 156%" },
        { icon: TrendingUp, label: "Knowledge Retention", value: "↑ 4x" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Industries & Applications
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Zyglio is industry-agnostic, discipline-flexible, and context-smart. Wherever there's expertise 
              to transfer—whether in the kitchen, the OR, the garage, or the flight deck—Zyglio turns human 
              mentorship into scalable training.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="space-y-12">
            {industries.map((industry, index) => (
              <Card key={index} className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-6xl">{industry.emoji}</div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-slate-800 mb-2">
                        {industry.title}
                      </h2>
                      <p className="text-slate-600 font-medium">
                        <strong>Scenario:</strong> {industry.scenario}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
                        <p className="text-sm font-medium text-blue-800 mb-2">Voice Input:</p>
                        <p className="text-slate-700 italic">"{industry.voiceInput}"</p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                        <p className="text-sm font-medium text-green-800 mb-2">Simulation Outcome:</p>
                        <p className="text-slate-700">{industry.outcome}</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 mb-4">
                        <p className="text-sm font-medium text-purple-800 mb-2">Impact:</p>
                        <p className="text-slate-700">{industry.impact}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {industry.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="bg-slate-50 p-3 rounded-lg text-center">
                            <stat.icon className="w-5 h-5 text-slate-600 mx-auto mb-1" />
                            <p className="text-xs text-slate-600 mb-1">{stat.label}</p>
                            <p className="font-bold text-slate-800">{stat.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-3xl p-12 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              See how Zyglio can revolutionize training in your specific field with a personalized demonstration.
            </p>
            <Link to="/demo">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Request Industry-Specific Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Industries;
