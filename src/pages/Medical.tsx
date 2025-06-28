import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Microscope, 
  Brain, 
  MessageCircle, 
  Globe, 
  BarChart3, 
  Stethoscope,
  Languages,
  Target,
  Tablet,
  TrendingUp,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  Heart,
  Shield
} from "lucide-react";

const Medical = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/25 to-teal-600/30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 text-lg border-0 shadow-lg">
                  <Stethoscope className="h-5 w-5 mr-2" />
                  Pharmaceutical/Medical AI Engagement
                </Badge>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
              Transform Clinical 
              <br />
              <span className="text-4xl md:text-6xl bg-gradient-to-r from-blue-300 via-purple-300 to-teal-300 bg-clip-text text-transparent">Engagement with Zyglio.ai</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-10 leading-relaxed drop-shadow-md">
              AI-Powered Storytelling for Pharmaceutical and Medical Technology Companies
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Global Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Trusted by 500+ Healthcare Organizations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="p-10 bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl">
            <CardHeader>
              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-6">
                  <Microscope className="text-blue-600" size={24} />
                  <span className="text-blue-800 font-semibold">Executive Overview</span>
                </div>
                <CardTitle className="text-3xl md:text-4xl text-center font-bold text-slate-800">
                  Reimagine Clinical Education
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-xl text-slate-700 leading-relaxed space-y-6 max-w-5xl mx-auto">
              <p className="text-center text-2xl font-medium text-blue-700 mb-8">
                Transform disconnected data into compelling clinical journeys
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p>
                    Zyglio.ai enables pharmaceutical and medical equipment companies to reimagine clinical education through AI-powered, voice-first storytelling. Instead of overwhelming clinicians and patients with disconnected data points, Zyglio creates immersive, interactive simulations where decision-making, outcomes, and evidence unfold as a compelling clinical journey.
                  </p>
                </div>
                <div>
                  <p>
                    This approach blends narrative structure, medical visuals, and multilingual AI conversation to provide an unforgettable, clinically credible experience. Whether you're launching a novel therapy, introducing a new diagnostic device, or reinforcing treatment protocols, Zyglio empowers you to engage, educate, and activate your audience in ways that traditional materials cannot.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Methods & Capabilities */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
              <Brain className="h-5 w-5 text-purple-600" />
              <span className="text-purple-800 font-semibold">Core Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              🧪 Revolutionary Methods
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cutting-edge AI technologies that transform how medical knowledge is shared and absorbed
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 rounded-2xl group hover:scale-105">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Voice-Guided Clinical Storytelling</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Simulates real-life decision-making via narrated, branching clinical cases that mirror daily practice.
                </p>
                <div className="mt-4 flex items-center text-blue-600 font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 rounded-2xl group hover:scale-105">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Interactive Case Simulations</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Learners explore real-world patient journeys, selecting actions and seeing both immediate and longitudinal outcomes.
                </p>
                <div className="mt-4 flex items-center text-purple-600 font-medium">
                  <span>Explore cases</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 rounded-2xl group hover:scale-105">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Stethoscope className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Evidence-Linked Medical Imagery</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Integrates visuals from peer-reviewed literature or internal data to enhance realism and clinical trust.
                </p>
                <div className="mt-4 flex items-center text-green-600 font-medium">
                  <span>View examples</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 rounded-2xl group hover:scale-105">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Languages className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Multilingual AI Support</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Delivers the same high-impact experience in 10+ languages, localized to regional clinical practices and cultural norms.
                </p>
                <div className="mt-4 flex items-center text-teal-600 font-medium">
                  <span>See languages</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 rounded-2xl group hover:scale-105">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Analytics & Impact Measurement</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Track knowledge gains, behavior shifts, and scenario engagement for both HCPs and internal training audiences.
                </p>
                <div className="mt-4 flex items-center text-orange-600 font-medium">
                  <span>View analytics</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-3 mb-6">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-semibold">Strategic Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              📈 Transformative Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Measurable outcomes that drive real business value
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white">
                  <tr>
                    <th className="px-8 py-6 text-left font-bold text-lg">Strategic Benefit</th>
                    <th className="px-8 py-6 text-left font-bold text-lg">Impact Description</th>
                    <th className="px-8 py-6 text-left font-bold text-lg">Key Metrics</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Brain className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="font-bold text-blue-600">Memorable Education</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-slate-700">Story-based formats outperform static PDFs and slide decks in knowledge retention.</td>
                    <td className="px-8 py-6">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">+75% retention</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="font-bold text-green-600">Clinically Credible</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-slate-700">All content is grounded in published data, imagery, and treatment guidelines.</td>
                    <td className="px-8 py-6">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">100% evidence-based</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Globe className="h-5 w-5 text-purple-600" />
                        </div>
                        <span className="font-bold text-purple-600">Global Scalability</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-slate-700">Multilingual, modular infrastructure supports rapid localization and expansion.</td>
                    <td className="px-8 py-6">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">10+ languages</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Tablet className="h-5 w-5 text-orange-600" />
                        </div>
                        <span className="font-bold text-orange-600">Omnichannel Ready</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-slate-700">Deploy through rep iPads, webinars, training portals, or direct-to-HCP experiences.</td>
                    <td className="px-8 py-6">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Multiple platforms</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-red-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <Target className="h-5 w-5 text-red-600" />
                        </div>
                        <span className="font-bold text-red-600">Engagement with Impact</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-slate-700">Designed for measurable outcomes, including prescribing behavior, product comprehension, and user satisfaction.</td>
                    <td className="px-8 py-6">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Measurable ROI</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call-Out Sections */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
            📣 Key Highlights
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-blue-50 border-blue-200">
              <CardContent className="p-0 text-center">
                <div className="mb-4">
                  <Target className="mx-auto text-blue-600" size={48} />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">Move Beyond the Brochure</h3>
                <p className="text-blue-700">
                  Create emotionally engaging, evidence-based stories your audience will remember.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-green-50 border-green-200">
              <CardContent className="p-0 text-center">
                <div className="mb-4">
                  <Globe className="mx-auto text-green-600" size={48} />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">Built for Global Teams</h3>
                <p className="text-green-700">
                  Deliver in multiple languages, with clinical and regulatory sensitivity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-purple-50 border-purple-200">
              <CardContent className="p-0 text-center">
                <div className="mb-4">
                  <TrendingUp className="mx-auto text-purple-600" size={48} />
                </div>
                <h3 className="text-xl font-bold text-purple-800 mb-4">Designed for Impact</h3>
                <p className="text-purple-700">
                  Built-in analytics, voice-enabled pathways, and simulation tracking ensure measurable results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg%20width%3D%2780%27%20height%3D%2780%27%20viewBox%3D%270%200%2080%2080%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.1%27%3E%3Ccircle%20cx%3D%278%27%20cy%3D%278%27%20r%3D%276%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <Sparkles className="mx-auto h-16 w-16 text-yellow-300 mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ✅ Ready to Transform Medical Engagement?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Zyglio helps you create AI-powered, interactive, multilingual clinical stories that drive engagement, education, and action.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <Heart className="h-5 w-5 mr-2" />
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-10 py-4 text-lg hover:scale-105 transition-all duration-300">
              <Sparkles className="h-5 w-5 mr-2" />
              Explore What You Can Build
            </Button>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg font-medium mb-2">Ready to get started?</p>
            <p className="opacity-90">Contact our pharmaceutical specialists for a personalized consultation</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Medical;
