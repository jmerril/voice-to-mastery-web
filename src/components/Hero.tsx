
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
          Next-Generation Learning Platform
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-5xl mx-auto leading-relaxed">
          Empowering SMEs with AI-driven authoring tools, comprehensive learner analytics, 
          and secure content management for transformative educational experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
            Explore Platform
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
          >
            Schedule Demo
          </Button>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                  <Brain size={48} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered</h3>
              <p className="text-slate-600">Smart content generation</p>
            </CardContent>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                  <Users size={48} className="text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">SME-Centric</h3>
              <p className="text-slate-600">Expert-driven authoring</p>
            </CardContent>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                  <BarChart3 size={48} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Data-Driven</h3>
              <p className="text-slate-600">Advanced analytics</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
