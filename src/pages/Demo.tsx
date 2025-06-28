
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, Mic, ArrowRight, Users, Settings, BarChart3 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Demo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    role: "",
    currentMethod: "",
    comments: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    try {
      const response = await fetch("https://ammonowgtxzohwbkajml.supabase.co/functions/v1/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      toast({
        title: "Demo request received",
        description: "Our team will contact you shortly to schedule your personalized demo.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        industry: "",
        role: "",
        currentMethod: "",
        comments: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Top Hero Section with Graphic */}
      <section className="relative pt-24 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop" 
            alt="Modern AI technology workspace representing advanced learning platform"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-purple-900/75 to-blue-900/85"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience Zyglio
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            See how your voice transforms into powerful, adaptive learning experiences
          </p>
        </div>
      </section>
      
      <div className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Speak. Simulate. Scale.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Fill out the form below to see how Zyglio can transform training in your specific environment. 
              We'll show you exactly how your voice can become powerful, adaptive learning experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Enhanced Demo Visual */}
            <div className="relative bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Watch Zyglio in Action
                  </h3>
                  <p className="text-blue-100">
                    See how a simple voice explanation transforms into an interactive training simulation
                  </p>
                </div>

                {/* Visual Flow */}
                <div className="space-y-6">
                  {/* Step 1: Voice Input */}
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Mic className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">Voice Input</div>
                      <div className="text-blue-100 text-sm">"First, check the patient's vitals..."</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center py-2">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>

                  {/* Step 2: AI Processing */}
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Settings className="h-6 w-6 text-white animate-spin" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">AI Processing</div>
                      <div className="text-blue-100 text-sm">Converting to interactive scenario</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center py-2">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>

                  {/* Step 3: Multiple Interactive Simulations */}
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">Multiple Interactive Simulations</div>
                      <div className="text-blue-100 text-sm">Real-time scalable evaluation and mentoring</div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center py-2">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>

                  {/* Step 4: Data Analysis */}
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">Evaluative Data Analysis</div>
                      <div className="text-blue-100 text-sm">Integration to improve curriculum and courses</div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Play Button */}
                <div className="text-center mt-8">
                  <div className="relative inline-block">
                    {/* Pulsing ring animation */}
                    <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
                    
                    <Button 
                      onClick={() => setIsVideoModalOpen(true)}
                      className="relative bg-white hover:bg-white/90 text-blue-600 hover:text-blue-700 border-0 shadow-2xl px-10 py-4 text-lg font-bold rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-3xl"
                    >
                      <Play className="mr-3 h-6 w-6 fill-current" /> 
                      Watch Demo Video
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Form */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">
                  Request Your Personalized Demo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="bg-white/80"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="bg-white/80"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Select onValueChange={(value) => handleInputChange("industry", value)} disabled={isSubmitting}>
                      <SelectTrigger className="bg-white/80">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">Restaurant & Hospitality</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="automotive">Automotive</SelectItem>
                        <SelectItem value="aerospace">Aerospace & Defense</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="role">Your Role</Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleInputChange("role", e.target.value)}
                      placeholder="e.g., Training Manager, Operations Director"
                      className="bg-white/80"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="currentMethod">Current Training Method</Label>
                    <Input
                      id="currentMethod"
                      value={formData.currentMethod}
                      onChange={(e) => handleInputChange("currentMethod", e.target.value)}
                      placeholder="e.g., In-person training, LMS, Video courses"
                      className="bg-white/80"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="comments">Comments</Label>
                    <Textarea
                      id="comments"
                      value={formData.comments}
                      onChange={(e) => handleInputChange("comments", e.target.value)}
                      placeholder="Tell us about your training challenges or specific use cases you'd like to explore"
                      className="bg-white/80"
                      rows={3}
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request Demo"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* What to Expect */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                What to Expect in Your Demo
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">🎤</span>
                  </div>
                  <h4 className="font-semibold mb-2">Live Voice Capture</h4>
                  <p className="text-sm text-slate-600">
                    Watch as we transform your spoken explanation into structured training content in real-time
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">🎮</span>
                  </div>
                  <h4 className="font-semibold mb-2">Interactive Simulation</h4>
                  <p className="text-sm text-slate-600">
                    Experience how learners interact with your content through adaptive, branching scenarios
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">📊</span>
                  </div>
                  <h4 className="font-semibold mb-2">ROI Analysis</h4>
                  <p className="text-sm text-slate-600">
                    See projected time savings, cost reductions, and training effectiveness improvements
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
      
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={setIsVideoModalOpen}
      />
    </div>
  );
};

export default Demo;
