
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Archive, RefreshCw, Database, HelpCircle } from "lucide-react";

const ContentLibrary = () => {
  return (
    <section id="content-library" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Secure Organizational Content Library
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            A secure, organization-specific repository for storing, managing, and adapting approved content and learning modules.
          </p>
        </div>
        
        {/* Security Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Security Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                    <Shield size={48} className="text-blue-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">Enterprise-Grade Security</h4>
                <p className="text-slate-600">
                  End-to-end encryption with role-based access controls and audit trails.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                    <Lock size={48} className="text-purple-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">Organization-Specific</h4>
                <p className="text-slate-600">
                  Isolated content environments ensuring complete data privacy and control.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                    <RefreshCw size={48} className="text-blue-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">Version Control</h4>
                <p className="text-slate-600">
                  Comprehensive versioning system with rollback capabilities and change tracking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Content Management */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Content Management</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Archive size={24} className="text-blue-600 mr-3" />
                  <h4 className="text-lg font-bold">Store & Organize</h4>
                </div>
                <p className="text-slate-600">
                  Centralized repository for all approved content with intelligent categorization.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <RefreshCw size={24} className="text-purple-600 mr-3" />
                  <h4 className="text-lg font-bold">Reuse & Adapt</h4>
                </div>
                <p className="text-slate-600">
                  Flexible content adaptation tools for different contexts and audiences.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Database size={24} className="text-blue-600 mr-3" />
                  <h4 className="text-lg font-bold">Future-Ready</h4>
                </div>
                <p className="text-slate-600">
                  Scalable architecture designed for growing content libraries and evolving needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentLibrary;
