
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "To turn human voice into the world's most powerful training asset.",
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "Human-Centered",
      description: "Technology should amplify human expertise, not replace it.",
      color: "text-green-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation-First",
      description: "Continuously pushing the boundaries of what's possible in learning technology.",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative mb-8">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop" 
                alt="Diverse team of professionals collaborating in modern office"
                className="w-full h-64 object-cover rounded-3xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 rounded-3xl flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    The Voice Behind the Vision
                  </h1>
                </div>
              </div>
            </div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Zyglio was founded by experts in simulation, AI, medical education, and enterprise training. 
              With decades of experience and a shared frustration with outdated LMS models, we created a platform 
              that doesn't just inform—it transforms.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop" 
                alt="Medical professionals using advanced simulation technology"
                className="w-full h-80 object-cover rounded-2xl shadow-lg mb-6"
              />
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    To turn human voice into the world's most powerful training asset. We believe that the best learning 
                    happens when expertise is shared naturally, conversationally, and adaptively.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop" 
                alt="Futuristic AI and machine learning technology visualization"
                className="w-full h-80 object-cover rounded-2xl shadow-lg mb-6"
              />
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    A world where knowledge transfer is instant, personalized, and infinitely scalable. Where every expert 
                    can share their wisdom with thousands, and every learner receives training tailored to their needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm text-center">
                  <CardContent className="p-0">
                    <div className={`${value.color} mb-6 flex justify-center`}>
                      <value.icon size={64} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-800">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 mb-16 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-6">
                  Born from Frustration, Built for Excellence
                </h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    The idea for Zyglio came from a simple observation: the best training happens when an expert 
                    sits down with a learner and shares their knowledge naturally, conversationally.
                  </p>
                  <p>
                    But traditional training methods forced this natural process into rigid, linear formats that 
                    stripped away the nuance and adaptability that made expert mentorship so effective.
                  </p>
                  <p>
                    We asked ourselves: What if we could capture that natural conversation and turn it into 
                    something that could scale? What if AI could understand not just the words, but the intent, 
                    the structure, and the wisdom behind them?
                  </p>
                  <p className="font-semibold text-blue-600">
                    That's how Zyglio was born.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" 
                  alt="Mentor teaching student in professional setting"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Team Preview */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Meet the Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-0 text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                    alt="CEO headshot"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-bold text-slate-800 mb-2">Leadership Team</h4>
                  <p className="text-slate-600 text-sm">Former executives from leading EdTech and AI companies</p>
                </CardContent>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-0 text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616c2bb0eb3?w=200&h=200&fit=crop&crop=face" 
                    alt="CTO headshot"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-bold text-slate-800 mb-2">Engineering Team</h4>
                  <p className="text-slate-600 text-sm">AI and ML experts from top technology companies</p>
                </CardContent>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-0 text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" 
                    alt="Head of Product headshot"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-bold text-slate-800 mb-2">Advisory Board</h4>
                  <p className="text-slate-600 text-sm">Industry leaders in healthcare, aerospace, and education</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-slate-600 mb-8">
              Our diverse team brings together decades of experience in AI, education, simulation technology, 
              and enterprise software to create solutions that truly transform how people learn.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-3xl p-12 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Join Us in Revolutionizing Training
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Whether you're looking to transform your organization's training or interested in joining our mission, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  See Zyglio in Action <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Careers & Opportunities
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
