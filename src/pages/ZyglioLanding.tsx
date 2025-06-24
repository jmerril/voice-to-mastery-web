
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
