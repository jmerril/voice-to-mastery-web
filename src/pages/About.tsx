
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Zap, Brain, Blocks, Gamepad2, Sparkles, Cpu, Globe, ArrowRight, CheckCircle, Mic, Headphones, Play, BookOpen, MessageSquare, Shield, Stethoscope, Plane, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              About <span className="text-blue-600">Zyglio</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              We're building the future of education through AI-powered simulations that transform 
              tribal knowledge into immersive, adaptive learning experiences.
            </p>
          </div>

          {/* AI-First Approach Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-2 mb-4">
                <Bot className="h-5 w-5 text-purple-600" />
                <span className="text-purple-800 font-medium">AI-First Philosophy</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Why We're 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> AI-First</span>
              </h2>
            </div>

            <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 shadow-xl">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Embracing AI-First Innovation</h3>
                    <div className="text-slate-700 leading-relaxed space-y-4 text-lg">
                      <p>
                        At Zyglio.ai, we are embracing an AI-first approach because the most successful and innovative companies today are those that put artificial intelligence at the core of their operations. AI-first organizations consistently demonstrate how building around intelligent systems leads to rapid growth, breakthrough products, and remarkable efficiency—even with lean teams.
                      </p>
                      <p>
                        By making AI the foundation of Zyglio.ai, we are able to deliver scalable, adaptive, and highly personalized solutions that transform how expertise is captured, shared, and applied—starting with surgical training and extending far beyond. This strategy empowers us to stay agile, continuously innovate, and provide exceptional value to our users in a world where technology and knowledge are evolving faster than ever.
                      </p>
                      <p className="font-semibold text-purple-800">
                        We believe that being AI-first is not just a competitive advantage, but the key to shaping the future of learning, professional development, and impact across industries.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* AI Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-5 w-5 text-purple-600" />
                      <span className="font-semibold text-slate-800">Rapid Growth</span>
                    </div>
                    <p className="text-sm text-slate-600">AI enables exponential scaling without proportional resource increases</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-slate-800">Breakthrough Products</span>
                    </div>
                    <p className="text-sm text-slate-600">Intelligent systems create entirely new categories of solutions</p>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-slate-800">Remarkable Efficiency</span>
                    </div>
                    <p className="text-sm text-slate-600">Lean teams achieve more with AI-powered automation and insights</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Meet the Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-4">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-blue-800 font-medium">Meet the Team</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Our 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Expert Team</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Industry veterans from leading EdTech, AI, and specialized sectors bringing 
                decades of experience to revolutionize educational technology.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Executive Leadership */}
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=400&h=250&fit=crop" 
                      alt="Transparent glass canopy rising above modern architecture representing visionary clarity and innovation"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Executive Leadership</h3>
                      <p className="text-blue-600 font-medium">Global Leaders in Scalable Learning</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Zyglio's executive team blends visionary leadership with deep operational expertise across SaaS, immersive simulation, and AI-enhanced learning. With over 150 published works in simulation, learning science, and digital education, they have built and scaled platforms adopted by leading medical associations, enterprise clients, and government agencies.
                  </p>
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                    Their track record includes patented training technologies, award-winning educational programs, and a legacy of transforming how knowledge is delivered and retained—guiding Zyglio to reshape the future of workforce development.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Strategic Vision Rooted in Evidence</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Proven Scalers of SaaS and EdTech Platforms</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Thought Leadership in Simulation & Learning Science</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Engineering Team */}
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=400&h=250&fit=crop" 
                      alt="Worm's-eye view of glass-clad high-rise with upward motion representing engineering precision and agile problem-solving"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Engineering Team</h3>
                      <p className="text-green-600 font-medium">Builders of Intelligent Simulation</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Our engineering team consists of elite AI/ML engineers, simulation architects, and platform developers from top-tier technology and research institutions. They design and implement intelligent learning environments that respond dynamically to learner behavior, skill gaps, and workflow complexity.
                  </p>
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                    Drawing from real-world systems in healthcare, hospitality, and industrial training, the team specializes in agile development of scalable platforms—integrating narrative simulation, adaptive learning, and multilingual voice interaction.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Expertise in Applied AI and LLMs</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Advanced Simulation and Scenario Authoring</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Modular, Scalable Platform Architecture</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Advisory Board */}
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=250&fit=crop" 
                      alt="Conceptual fusion representing multidisciplinary foresight and strategic depth across healthcare, aerospace, and education"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Advisory Board</h3>
                      <p className="text-orange-600 font-medium">Strategic Advisors</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Zyglio's advisory board features recognized leaders in healthcare delivery, aerospace systems, and educational innovation. With decades of frontline and executive experience, they bring invaluable insights into domains where high-fidelity simulation, safety, and certification are mission-critical.
                  </p>
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                    Their input shapes Zyglio's strategic roadmap—ensuring our solutions meet the rigorous demands of regulated industries while remaining at the forefront of technological change and educational outcomes.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Stethoscope className="w-3 h-3 text-red-500" />
                      <span>Healthcare Training & Certification Authorities</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Plane className="w-3 h-3 text-blue-500" />
                      <span>Aerospace Simulation & Systems Experts</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <BookOpen className="w-3 h-3 text-green-500" />
                      <span>Innovators in Academic & Workforce Education</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Team Impact Statement */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-slate-100 to-blue-100 rounded-2xl p-8 max-w-4xl mx-auto">
                <p className="text-lg text-slate-700 font-medium">
                  "Our diverse team combines deep technical expertise with real-world industry experience, 
                  ensuring that every simulation we create meets the highest standards of accuracy, 
                  engagement, and educational effectiveness."
                </p>
              </div>
            </div>
          </div>

          {/* Educational Experience Spectrum */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-4 py-2 mb-4">
                <BookOpen className="h-5 w-5 text-green-600" />
                <span className="text-green-800 font-medium">Complete Learning Spectrum</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                From Traditional to 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Revolutionary</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Zyglio adapts to every learning style and scenario, providing the right educational experience 
                for every moment—from quick knowledge checks to immersive skill mastery.
              </p>
            </div>

            {/* Experience Cards */}
            <div className="space-y-8">
              {/* Traditional Learning */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-slate-200">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800">Traditional Assessment</h3>
                        <p className="text-slate-500">Multiple choice, fill-in-the-blank, true/false</p>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Start with familiar formats that learners already know. Our AI enhances traditional 
                      multiple choice and assessment formats with adaptive questioning, instant feedback, 
                      and personalized difficulty adjustment.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-slate-600">Adaptive question difficulty</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-slate-600">Instant feedback and explanations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-slate-600">Progress tracking and analytics</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop" 
                      alt="Student taking online assessment on tablet with multiple choice questions"
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>

              {/* Voice-First Learning */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 shadow-lg border border-purple-200">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                      alt="People collaborating around computers in modern office setting"
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent rounded-2xl"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <Mic className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Headphones className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800">Voice-First Simulations</h3>
                        <p className="text-purple-600">Conversational AI learning experiences</p>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Learn through natural conversation. Practice scenarios, ask questions, and receive 
                      guidance through voice interactions. Perfect for hands-free learning, accessibility, 
                      and situations where visual interfaces aren't practical.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-slate-600">Natural language conversations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-slate-600">Hands-free operation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-slate-600">Multilingual support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Adaptive Learning Flow */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-4 shadow-lg">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                <ArrowRight className="h-4 w-4 text-slate-400" />
                <Mic className="h-5 w-5 text-purple-600" />
                <span className="text-slate-700 font-medium ml-2">Multiple learning modalities, one platform</span>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Our Vision</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To democratize expertise by transforming how knowledge is captured, structured, and transmitted. 
                  We envision a world where every piece of tribal knowledge becomes accessible, interactive, 
                  and infinitely scalable through AI-powered simulations.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To bridge the gap between human expertise and scalable education through cutting-edge AI 
                  and simulation technology. We're committed to making complex knowledge accessible, 
                  engaging, and immediately applicable in real-world scenarios.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Our Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Human-Centered</h3>
                  <p className="text-slate-600">
                    We believe technology should amplify human potential, not replace it. 
                    Every feature we build starts with understanding human needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Excellence</h3>
                  <p className="text-slate-600">
                    We're committed to delivering exceptional quality in everything we do, 
                    from our technology to our customer relationships.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Innovation</h3>
                  <p className="text-slate-600">
                    We push the boundaries of what's possible in education technology, 
                    always looking for better ways to facilitate learning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 backdrop-blur-sm text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Transform Your Training?
            </h3>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Join the revolution in education technology and see how Zyglio can help you 
              capture, structure, and scale your organization's expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  Request a Demo
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="px-8 py-4">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
