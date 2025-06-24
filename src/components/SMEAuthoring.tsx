
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Target, Users, Tag, Wand2, Link, QrCode, BookOpen } from "lucide-react";

const SMEAuthoring = () => {
  return (
    <section id="sme-authoring" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            SME Authoring Enhancements
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Empower subject matter experts with advanced authoring tools that combine human expertise with AI intelligence. 
            We facilitate and make it easy and agile to enable SMEs to record and augment their expertise, converting 
            speaking about what they do into actionable AI intelligence for learning, simulation and engagement.
          </p>
        </div>
        
        {/* Voice-to-Intelligence Feature */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-0">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4">
                  <Mic size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Voice-to-Intelligence Conversion</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Transform natural conversations and expertise sharing into structured learning content. 
                Our platform captures SME knowledge through voice recording and converts it into interactive 
                simulations, educational modules, and engagement activities using advanced AI processing.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Scientific Publishing Enhancement */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 border-0">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mr-4">
                  <BookOpen size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Scientific & Technical Publishing Enhancement</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Revolutionize scientific and technical publishing by augmenting traditional articles and publications 
                with AI-powered mentorship. Each publication can be enhanced with an intelligent AI mentor that provides 
                personalized guidance, explanations, and interactive learning experiences.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Link size={24} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Direct Link Access</h4>
                    <p className="text-slate-600 text-sm">
                      Embed direct links within publications that connect readers to AI mentors specialized in the article content.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <QrCode size={24} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">QR Code Integration</h4>
                    <p className="text-slate-600 text-sm">
                      Generate QR codes for print publications, enabling instant access to AI mentors through mobile devices.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Core Capabilities */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Core Capabilities</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Target size={24} className="text-blue-600 mr-3" />
                  <h4 className="text-lg font-bold">Audience-Specific Targeting</h4>
                </div>
                <p className="text-slate-600">
                  Create content tailored to specific learner groups with precision targeting capabilities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Users size={24} className="text-purple-600 mr-3" />
                  <h4 className="text-lg font-bold">Educational Objectives</h4>
                </div>
                <p className="text-slate-600">
                  Define clear learning goals and track achievement through comprehensive KPI frameworks.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Tag size={24} className="text-blue-600 mr-3" />
                  <h4 className="text-lg font-bold">Smart Content Tagging</h4>
                </div>
                <p className="text-slate-600">
                  Organize content by use case and learning context for maximum discoverability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* AI-Generated Recommendations */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">AI-Generated Recommendations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Supplementary content recommendations (text, video, audio)",
              "Dynamic simulation scenario variations",
              "Auto-captioning and seamless media integration",
              "Content optimization suggestions"
            ].map((item, index) => (
              <Card key={index} className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
                <CardContent className="p-0">
                  <div className="flex items-center mb-2">
                    <Wand2 size={20} className="text-purple-600 mr-2" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Final Note */}
        <div className="text-center">
          <p className="text-lg font-semibold text-blue-600 bg-blue-50 p-4 rounded-lg inline-block">
            SMEs retain complete control with final approval rights over all AI-generated suggestions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SMEAuthoring;
