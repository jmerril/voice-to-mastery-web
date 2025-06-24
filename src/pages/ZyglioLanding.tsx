
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SMEAuthoring from "@/components/SMEAuthoring";
import LearnerFramework from "@/components/LearnerFramework";
import Analytics from "@/components/Analytics";
import ContentLibrary from "@/components/ContentLibrary";
import Footer from "@/components/Footer";

const ZyglioLanding = () => {
  return (
    <div className="min-h-screen">
      <Header />
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
