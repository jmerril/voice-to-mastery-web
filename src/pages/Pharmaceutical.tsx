
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
  TrendingUp
} from "lucide-react";

const Pharmaceutical = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%226%22%20cy%3D%226%22%20r%3D%226%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">
              🌐 Pharmaceutical/Medical AI Engagement
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Transform Clinical Engagement with Zyglio.ai
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-8">
              AI-Powered Storytelling for Pharmaceutical and Medical Technology Companies
            </p>
          </div>
        </div>
      </section>

      {/* Executive Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center flex items-center justify-center gap-3">
                <Microscope className="text-blue-600" size={32} />
                Executive Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-slate-700 leading-relaxed space-y-4">
              <p>
                Zyglio.ai enables pharmaceutical and medical equipment companies to reimagine clinical education through AI-powered, voice-first storytelling. Instead of overwhelming clinicians and patients with disconnected data points, Zyglio creates immersive, interactive simulations where decision-making, outcomes, and evidence unfold as a compelling clinical journey.
              </p>
              <p>
                This approach blends narrative structure, medical visuals, and multilingual AI conversation to provide an unforgettable, clinically credible experience. Whether you're launching a novel therapy, introducing a new diagnostic device, or reinforcing treatment protocols, Zyglio empowers you to engage, educate, and activate your audience in ways that traditional materials cannot.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Methods & Capabilities */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
            🧪 Core Methods & Capabilities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="text-blue-600" size={24} />
                  <h3 className="text-lg font-bold">Voice-Guided Clinical Storytelling</h3>
                </div>
                <p className="text-slate-600">
                  Simulates real-life decision-making via narrated, branching clinical cases that mirror daily practice.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="text-purple-600" size={24} />
                  <h3 className="text-lg font-bold">Interactive Case Simulations</h3>
                </div>
                <p className="text-slate-600">
                  Learners explore real-world patient journeys, selecting actions and seeing both immediate and longitudinal outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <Stethoscope className="text-green-600" size={24} />
                  <h3 className="text-lg font-bold">Evidence-Linked Medical Imagery</h3>
                </div>
                <p className="text-slate-600">
                  Integrates visuals from peer-reviewed literature or internal data to enhance realism and clinical trust.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <Languages className="text-blue-600" size={24} />
                  <h3 className="text-lg font-bold">Multilingual AI Support</h3>
                </div>
                <p className="text-slate-600">
                  Delivers the same high-impact experience in 10+ languages, localized to regional clinical practices and cultural norms.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="text-orange-600" size={24} />
                  <h3 className="text-lg font-bold">Analytics & Impact Measurement</h3>
                </div>
                <p className="text-slate-600">
                  Track knowledge gains, behavior shifts, and scenario engagement for both HCPs and internal training audiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
            📈 Strategic Benefits
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Benefit</th>
                  <th className="px-6 py-4 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-blue-600">🧠 Memorable Education</td>
                  <td className="px-6 py-4">Story-based formats outperform static PDFs and slide decks in knowledge retention.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-green-600">💬 Clinically Credible</td>
                  <td className="px-6 py-4">All content is grounded in published data, imagery, and treatment guidelines.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-purple-600">🌐 Global Scalability</td>
                  <td className="px-6 py-4">Multilingual, modular infrastructure supports rapid localization and expansion.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-orange-600">📱 Omnichannel Ready</td>
                  <td className="px-6 py-4">Deploy through rep iPads, webinars, training portals, or direct-to-HCP experiences.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-red-600">🎯 Engagement with Impact</td>
                  <td className="px-6 py-4">Designed for measurable outcomes, including prescribing behavior, product comprehension, and user satisfaction.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Taglines */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            🔊 Taglines
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-0 text-center">
                <p className="text-lg font-semibold">"Not a Slide Deck. A Clinical Experience."</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-0 text-center">
                <p className="text-lg font-semibold">"From Information to Insight—One Story at a Time."</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-0 text-center">
                <p className="text-lg font-semibold">"Activate Engagement Through AI-Driven Storytelling."</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-0 text-center">
                <p className="text-lg font-semibold">"Your Innovation, Their Journey—Told with Zyglio."</p>
              </CardContent>
            </Card>
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
                <h3 className="text-xl font-bold text-blue-800 mb-4">"Move Beyond the Brochure"</h3>
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
                <h3 className="text-xl font-bold text-green-800 mb-4">"Built for Global Teams"</h3>
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
                <h3 className="text-xl font-bold text-purple-800 mb-4">"Designed for Impact"</h3>
                <p className="text-purple-700">
                  Built-in analytics, voice-enabled pathways, and simulation tracking ensure measurable results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ✅ Ready to Transform Medical Engagement?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Zyglio helps you create AI-powered, interactive, multilingual clinical stories that drive engagement, education, and action.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3">
              Explore What You Can Build
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pharmaceutical;
