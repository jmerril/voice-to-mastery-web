import heroTeamImage from "/images/hero-team-holographic.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Epic Hero Background */}
      <div className="absolute inset-0">
        <img 
          src={heroTeamImage} 
          alt="Team collaboration with AI holographic knowledge" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/70 to-background/70" />
      </div>
      
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center py-8">
        <h1 className="text-4xl md:text-6xl font-thin tracking-tight mb-4">
          The{" "}
          <span className="text-primary font-light">
            Zyglio Phenomenon
          </span>
        </h1>
        
        <p className="text-lg md:text-xl font-light text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
          voice-first AI mentorship + atomic knowledge = a new way humans learn, work, and perform across multiple languages, literacy levels, and organizational roles
        </p>
        
        <blockquote className="text-base md:text-lg font-light italic text-muted-foreground max-w-2xl mx-auto leading-relaxed border-l-2 border-primary/30 pl-6 mb-6">
          "We're not another 'training tool.' We are the operating rhythm for how expertise is captured, transferred, and improved—continuously."
        </blockquote>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-center">
          <div className="p-4 rounded-lg bg-card/70 backdrop-blur-sm border border-border/50">
            <h3 className="text-sm font-medium mb-1 text-foreground">Multi-Language Support</h3>
            <p className="text-xs text-muted-foreground">Train in 40+ languages with native comprehension and cultural context</p>
          </div>
          <div className="p-4 rounded-lg bg-card/70 backdrop-blur-sm border border-border/50">
            <h3 className="text-sm font-medium mb-1 text-foreground">Adaptive Literacy</h3>
            <p className="text-xs text-muted-foreground">Automatically adjusts complexity based on individual literacy and comprehension levels</p>
          </div>
          <div className="p-4 rounded-lg bg-card/70 backdrop-blur-sm border border-border/50">
            <h3 className="text-sm font-medium mb-1 text-foreground">Role-Specific Content</h3>
            <p className="text-xs text-muted-foreground">Customized training experiences tailored to specific organizational roles and responsibilities</p>
          </div>
        </div>
      </div>
    </section>
  );
};