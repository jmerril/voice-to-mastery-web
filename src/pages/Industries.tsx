import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      title: "Restaurants & Hospitality",
      scenario: "Onboarding new kitchen staff for a burger line.",
      voiceInput: "Grill the burger 3 minutes per side, then move to resting tray. Wrap before fries are down.",
      sopGeneration: "Automated SOPs for food safety protocols, timing sequences, and quality checkpoints with visual step-by-step guides.",
      outcome: "Station training that includes timing, sequencing, and quality assurance checkpoints.",
      impact: "50% reduction in onboarding time, fewer safety violations, improved kitchen flow.",
      stats: [
        { icon: Clock, label: "Onboarding Time", value: "↓ 50%" },
        { icon: TrendingUp, label: "Safety Improvements", value: "↑ 72%" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=600&fit=crop",
      title: "Legal Practice & Case Simulation",
      scenario: "Training junior attorneys on complex litigation strategies and courtroom procedures.",
      voiceInput: "Senior partner explains cross-examination techniques and objection protocols for high-stakes depositions.",
      sopGeneration: "Comprehensive legal procedure SOPs with case law references, ethical guidelines, and courtroom protocol documentation.",
      outcome: "Interactive case simulations with multiple scenarios, witness examination practice, and real-time feedback on legal strategies.",
      impact: "Accelerated attorney development, improved case preparation efficiency, and enhanced courtroom performance.",
      stats: [
        { icon: Users, label: "Case Prep Efficiency", value: "↑ 85%" },
        { icon: TrendingUp, label: "Courtroom Performance", value: "↑ 67%" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop",
      title: "Hospitals and Critical Care",
      scenario: "Emergency response protocols in a multilingual care environment.",
      voiceInput: "A nurse explains how to handle triage during a mass casualty incident.",
      sopGeneration: "Comprehensive emergency response SOPs with multilingual documentation, decision trees, and compliance checklists.",
      outcome: "Role-based simulations for nurses, assistants, and medical translators in Spanish, Tagalog, and Arabic.",
      impact: "Faster compliance readiness, higher simulation pass rates, measurable retention gains.",
      stats: [
        { icon: Users, label: "Pass Rate", value: "↑ 89%" },
        { icon: TrendingUp, label: "Retention", value: "↑ 3.2x" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop",
      title: "Automotive Repair & Diagnostics",
      scenario: "Diagnosing EV battery faults and performing ADAS calibration.",
      voiceInput: "A master tech walks through a typical calibration procedure.",
      sopGeneration: "Detailed diagnostic SOPs with equipment specifications, safety protocols, and troubleshooting documentation.",
      outcome: "Step-by-step virtual diagnostics with voice-activated alerts and correction cues.",
      impact: "Lower return rates, quicker technician ramp-up, and fewer warranty issues.",
      stats: [
        { icon: TrendingUp, label: "Return Rate", value: "↓ 45%" },
        { icon: Clock, label: "Ramp-up Time", value: "↓ 60%" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      title: "Aerospace & Defense",
      scenario: "Avionics reboots and secure comms protocols.",
      voiceInput: "A mission engineer describes typical failure modes and mission contingencies.",
      sopGeneration: "Mission-critical SOPs with security clearance documentation, contingency protocols, and compliance validation.",
      outcome: "Interactive simulations with real-world incident branches, alert protocols, and success criteria.",
      impact: "Improved mission readiness, fewer onboarding bottlenecks, stronger procedural accuracy.",
      stats: [
        { icon: Users, label: "Mission Readiness", value: "↑ 94%" },
        { icon: TrendingUp, label: "Accuracy", value: "↑ 87%" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
      title: "Medical Education & Simulation",
      scenario: "A teaching doctor explains how to approach post-op sepsis.",
      voiceInput: "Doctor walks through diagnosis and treatment protocols for various patient scenarios.",
      sopGeneration: "Clinical SOPs with evidence-based protocols, patient care documentation, and assessment rubrics.",
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
              Industry-Agnostic. Discipline-Flexible.
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
              <Card key={index} className="p-0 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-64 lg:h-auto">
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h2 className="text-2xl font-bold mb-2">
                          {industry.title}
                        </h2>
                        <p className="text-sm opacity-90">
                          <strong>Scenario:</strong> {industry.scenario}
                        </p>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8">
                      <div className="space-y-6">
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <p className="text-sm font-medium text-blue-800 mb-2">Voice Input:</p>
                          <p className="text-slate-700 italic">"{industry.voiceInput}"</p>
                        </div>
                        
                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                          <div className="flex items-center gap-2 mb-2">
                            <FileText className="w-4 h-4 text-purple-600" />
                            <p className="text-sm font-medium text-purple-800">SOPs & Documentation Generated:</p>
                          </div>
                          <p className="text-slate-700">{industry.sopGeneration}</p>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                          <p className="text-sm font-medium text-green-800 mb-2">Simulation Outcome:</p>
                          <p className="text-slate-700">{industry.outcome}</p>
                        </div>
                        
                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 mb-6">
                          <p className="text-sm font-medium text-orange-800 mb-2">Impact:</p>
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
