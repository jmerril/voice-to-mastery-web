
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Users, Lightbulb, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission-Driven",
      description: "We believe human expertise should be accessible, scalable, and preserved for future generations."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation First",
      description: "We push the boundaries of what's possible when AI meets human knowledge transfer."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Human-Centered",
      description: "Technology should amplify human potential, not replace it. Every solution starts with people."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We deliver results that matter, with precision, reliability, and measurable impact."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              The Voice Behind the Vision
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Zyglio was founded by experts in simulation, AI, medical education, and enterprise training. 
              With decades of experience and a shared frustration with outdated LMS models, we created a 
              platform that doesn't just inform—it transforms.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-2xl text-blue-600 font-semibold mb-8">
                To turn human voice into the world's most powerful training asset.
              </p>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto">
                Every day, valuable expertise walks out the door. Experienced professionals retire, 
                key team members leave, and hard-won knowledge disappears. We built Zyglio to change that—
                to capture, structure, and scale human expertise in ways that were never possible before.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What Drives Us
              </h2>
              <p className="text-xl text-slate-600">
                Our core values shape everything we build and every relationship we foster
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Our Story
            </h2>
            
            <div className="prose prose-lg mx-auto text-slate-600">
              <p className="text-lg mb-6">
                Zyglio began in hospital corridors and manufacturing floors, where we witnessed the same 
                frustrating cycle: brilliant experts struggling to transfer decades of knowledge to newcomers 
                through outdated methods.
              </p>
              
              <p className="mb-6">
                We watched master technicians spend hours explaining complex procedures, only to repeat 
                the same explanations weeks later. We saw experienced nurses mentoring new staff through 
                critical protocols, knowing that human memory and time constraints meant knowledge gaps 
                would inevitably appear.
              </p>
              
              <p className="mb-6">
                The traditional approach—filming, scripting, editing—took too long and created static content 
                that couldn't adapt to individual learning needs. We knew there had to be a better way.
              </p>
              
              <p className="mb-6">
                That's when we realized the solution wasn't in replacing human expertise, but in amplifying it. 
                What if every casual explanation, every mentoring session, every "let me show you how" moment 
                could become a reusable, adaptive training asset?
              </p>
              
              <p className="font-semibold text-slate-800">
                Zyglio was born from this vision: transforming the most natural form of knowledge transfer—
                human voice—into the most powerful training technology available today.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Built by Experts, For Experts
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mx-auto mb-4"></div>
                  <CardTitle>AI & Simulation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Our team includes PhDs in machine learning and simulation experts who've built 
                    training systems for Fortune 500 companies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4"></div>
                  <CardTitle>Medical Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Healthcare education specialists who understand the critical importance of 
                    accurate, adaptive learning in high-stakes environments.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full mx-auto mb-4"></div>
                  <CardTitle>Enterprise Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Veteran learning and development professionals who've scaled training programs 
                    across global organizations.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Badge variant="secondary" className="text-sm">
              Leadership team profiles and advisor information available upon request
            </Badge>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join Us in Revolutionizing Training
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Whether you're looking to preserve institutional knowledge, accelerate onboarding, 
              or scale expertise across your organization, we'd love to show you what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Schedule a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  See Our Impact
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
