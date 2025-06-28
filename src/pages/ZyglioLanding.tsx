
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SMEAuthoring from "@/components/SMEAuthoring";
import LearnerFramework from "@/components/LearnerFramework";
import Analytics from "@/components/Analytics";
import ContentLibrary from "@/components/ContentLibrary";
import Footer from "@/components/Footer";

const ZyglioLanding = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Enhanced Hero Section with Background Graphic */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        {/* Background Image with Curved Corners */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop" 
            alt="Digital network visualization representing AI-powered learning connections"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-blue-900/90 rounded-3xl"></div>
        </div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/30 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-cyan-400/25 rounded-full blur-md animate-pulse"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Transform Learning with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Zyglio revolutionizes education through intelligent simulations, adaptive learning, 
            and AI-powered content creation that scales expertise across organizations.
          </p>
        </div>
      </section>
      
      <Hero />
      <SMEAuthoring />
      <LearnerFramework />
      <Analytics />
      <ContentLibrary />
      <Footer />
    </div>
  );
};

export default ZyglioLanding;
