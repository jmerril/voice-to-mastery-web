import heroImage from "/images/hero-ai-mentorship.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AI mentorship phenomenon" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-thin tracking-tight mb-8">
          the{" "}
          <span className="text-primary font-light">
            phenomenon
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
          voice-first AI mentorship + atomic knowledge = a new way humans learn, work, and perform
        </p>
        
        <blockquote className="text-lg md:text-xl font-light italic text-muted-foreground max-w-2xl mx-auto leading-relaxed border-l-2 border-primary/30 pl-6">
          "We're not another 'training tool.' We are the operating rhythm for how expertise is captured, transferred, and improved—continuously."
        </blockquote>
      </div>
    </section>
  );
};