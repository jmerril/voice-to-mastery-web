
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Speak. Simulate. Scale.
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Fill out the form below to see how Zyglio can transform training in your specific environment. 
              We'll show you exactly how your voice can become powerful, adaptive learning experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Demo Video Placeholder */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop" 
                alt="Interactive displays showing AI-powered training simulations and analytics"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-teal-500/30 rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-0 h-0 border-l-6 border-r-0 border-t-4 border-b-4 border-l-blue-600 border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Watch Zyglio in Action
                  </h3>
                  <p className="text-slate-600">
                    See how a simple voice explanation transforms into an interactive training simulation
                  </p>
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
    </div>
  );
};

export default Demo;
