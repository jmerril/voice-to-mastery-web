
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Clock, TrendingUp, Database, CheckCircle } from "lucide-react";

const LearnerFramework = () => {
  return (
    <section id="learner-framework" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Learner Framework & Data Schema
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            A comprehensive framework for tracking, evaluating, and optimizing learner progress with precision data capture.
          </p>
        </div>
        
        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                  <Award size={48} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Badges & Levels</h3>
              <p className="text-slate-600">
                Gamified progression system with meaningful achievements and milestones.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                  <Clock size={48} className="text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Time-Based Achievement</h3>
              <p className="text-slate-600">
                Track learning velocity and time investment for comprehensive progress analysis.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                  <TrendingUp size={48} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Confidence Evaluation</h3>
              <p className="text-slate-600">
                Measure learner certainty levels to identify knowledge gaps and strengths.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Data Architecture */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Data Architecture</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Database size={24} className="text-blue-600 mr-3" />
                  <h4 className="text-lg font-bold">Robust Data Dictionary</h4>
                </div>
                <p className="text-slate-600">
                  Structured end-user database with comprehensive data relationships and validation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <CheckCircle size={24} className="text-purple-600 mr-3" />
                  <h4 className="text-lg font-bold">Input Normalization</h4>
                </div>
                <p className="text-slate-600">
                  Advanced mechanisms to capture and standardize learner activity and outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Progress Tracking */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Progress Tracking</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-green-600">Mastery Areas</h4>
                  <span className="text-sm font-semibold text-green-600">75%</span>
                </div>
                <Progress value={75} className="mb-2" />
                <p className="text-sm text-slate-600">75% completion rate</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-yellow-600">Challenge Areas</h4>
                  <span className="text-sm font-semibold text-yellow-600">25%</span>
                </div>
                <Progress value={25} className="mb-2" />
                <p className="text-sm text-slate-600">25% needs improvement</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnerFramework;
