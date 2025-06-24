
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Brain, Lightbulb, Activity, TrendingUp, Users } from "lucide-react";

const Analytics = () => {
  return (
    <section id="analytics" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Analytics, Dashboards & LLM Support
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Drive continuous improvement with intelligent analytics and AI-powered insights for enhanced learning outcomes.
          </p>
        </div>
        
        {/* Learning Analytics */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Learning Analytics</h3>
            <Card className="p-6 mb-6 bg-gradient-to-r from-blue-50 to-purple-50 border-0">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <BarChart3 size={24} className="text-blue-600 mr-3" />
                  <h4 className="text-lg font-bold">Difficulty Heat Map</h4>
                </div>
                <p className="text-slate-600 mb-4">
                  Visual representation of content difficulty across user base
                </p>
                {/* Heat Map Simulation */}
                <div className="grid grid-cols-8 gap-1">
                  {Array.from({ length: 32 }, (_, i) => (
                    <div
                      key={i}
                      className={`h-4 rounded ${
                        i % 4 === 0 ? 'bg-red-200' : 
                        i % 3 === 0 ? 'bg-yellow-200' : 'bg-green-200'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Progress Metrics */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Learner Capabilities</span>
                <span className="text-green-600 font-semibold">85%</span>
              </div>
              <Progress value={85} className="mb-2" />
              
              <div className="flex items-center justify-between">
                <span className="font-medium">Program Effectiveness</span>
                <span className="text-green-600 font-semibold">92%</span>
              </div>
              <Progress value={92} className="mb-2" />
              
              <div className="flex items-center justify-between">
                <span className="font-medium">Overall Progress</span>
                <span className="text-blue-600 font-semibold">78%</span>
              </div>
              <Progress value={78} className="mb-2" />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Dashboard Preview</h3>
            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <Users size={24} className="text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold">Active Learners</p>
                      <p className="text-2xl font-bold">1,247</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-green-600">
                      <TrendingUp size={16} className="mr-1" />
                      <span className="text-sm">↑ 12%</span>
                    </div>
                    <p className="text-xs text-slate-500">from last week</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <Activity size={24} className="text-green-600 mr-3" />
                    <div>
                      <p className="font-semibold">Completion Rate</p>
                      <p className="text-2xl font-bold">89.3%</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-green-600">
                      <TrendingUp size={16} className="mr-1" />
                      <span className="text-sm">↑ 5.2%</span>
                    </div>
                    <p className="text-xs text-slate-500">improvement</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <Brain size={24} className="text-purple-600 mr-3" />
                    <div>
                      <p className="font-semibold">Engagement Score</p>
                      <p className="text-2xl font-bold">94.7</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-green-600">Above target</span>
                    <p className="text-xs text-slate-500">threshold</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* LLM-Powered Insights */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">LLM-Powered Insights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Lightbulb size={24} className="text-yellow-600 mr-3" />
                  <h4 className="text-lg font-bold">Supplemental Explanations</h4>
                </div>
                <p className="text-slate-600">
                  Generate additional context and explanations for challenging content areas automatically.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Brain size={24} className="text-purple-600 mr-3" />
                  <h4 className="text-lg font-bold">Scenario Generation</h4>
                </div>
                <p className="text-slate-600">
                  Propose new simulation scenarios that reinforce key learning objectives and fill knowledge gaps.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <TrendingUp size={24} className="text-blue-600 mr-3" />
                  <h4 className="text-lg font-bold">Content Optimization</h4>
                </div>
                <p className="text-slate-600">
                  Recommend improvements to enhance content clarity and learner comprehension.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
