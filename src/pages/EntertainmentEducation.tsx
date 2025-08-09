import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Clapperboard,
  GraduationCap,
  Globe2,
  Megaphone,
  Search,
  Sparkles,
  Trophy,
  BarChart3,
  ShoppingCart,
  DollarSign,
  Brain,
  Settings,
  TrendingUp,
  Users
} from "lucide-react";
import { useEffect } from "react";

const EntertainmentEducation = () => {
  // Basic SEO for SPA
  useEffect(() => {
    const title = "Entertainment & Education Media Monetization | Zyglio";
    const description = "Turn specialized content into an AI-powered global media ecosystem. Audience growth, engagement, and revenue for entertainment and education.";
    const canonicalUrl = `${window.location.origin}/entertainment-education`;

    document.title = title;

    const ensureMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    ensureMeta("description", description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // Structured data (WebPage)
    const ld = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Entertainment & Education Media Monetization",
      description,
      url: canonicalUrl,
      inLanguage: "en"
    };

    const scriptId = "ld-entertainment-education";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script") as HTMLScriptElement;
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Subtle backdrop visuals */}
        <div className="absolute top-16 left-12 w-24 h-24 rounded-full bg-violet-200/30 blur-2xl"></div>
        <div className="absolute top-40 right-16 w-20 h-20 rounded-lg bg-indigo-200/30 blur-xl rotate-12"></div>
        <div className="absolute bottom-24 left-1/3 w-16 h-16 rounded bg-blue-200/30 blur-lg rotate-6"></div>
      </div>

      <div className="relative z-10">
        <Navigation />

        <header className="pt-24 pb-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1600&h=600&fit=crop"
                  alt="Streaming and education media visuals representing global digital content ecosystems"
                  className="w-full h-72 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 via-indigo-900/80 to-blue-900/80" />
              </div>

              <div className="relative z-10 text-center text-white px-6 py-16">
                <div className="mb-4 inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <Clapperboard className="h-4 w-4" />
                  <span className="text-sm font-medium">Entertainment & Education</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Entertainment & Education Media Monetization
                </h1>
                <p className="text-lg md:text-2xl text-blue-100 max-w-4xl mx-auto">
                  Transform specialized content libraries into AI-powered global media ecosystems—built for reach, loyalty, and sustainable revenue.
                </p>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
              {/* Left column: Content pillars */}
              <div className="lg:col-span-2 space-y-8">
                {/* Audience Acquisition */}
                <article className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                      <Megaphone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-900">Audience Acquisition – Building Reach & Market Entry</h2>
                      <p className="text-sm text-slate-600">From mission-driven archives to mainstream streaming success.</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2"><TrendingUp className="h-4 w-4 mt-1 text-violet-600" /><span>Track record turning high-value, mission-driven content into global streaming success.</span></li>
                    <li className="flex items-start gap-2"><Search className="h-4 w-4 mt-1 text-violet-600" /><span>AI-driven audience targeting by niche segments (enthusiasts, casual viewers, students, historians).</span></li>
                    <li className="flex items-start gap-2"><Globe2 className="h-4 w-4 mt-1 text-violet-600" /><span>Global-ready streaming infrastructure with low-latency AWS edge delivery.</span></li>
                    <li className="flex items-start gap-2"><Users className="h-4 w-4 mt-1 text-violet-600" /><span>Partnership marketing with relevant institutions, platforms, and influencers.</span></li>
                    <li className="flex items-start gap-2"><Sparkles className="h-4 w-4 mt-1 text-violet-600" /><span>Multi-channel discovery: SEO-optimized hubs, short-form highlights, OTT distribution, and streaming partnerships.</span></li>
                  </ul>
                </article>

                {/* Audience Engagement */}
                <article className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-900">Audience Engagement – Turning Viewers into Loyal Participants</h2>
                      <p className="text-sm text-slate-600">Create sticky experiences that combine media, data, and community.</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2"><Search className="h-4 w-4 mt-1 text-indigo-600" /><span>AI-first search: "Show me all performances by [artist]," or "Find lessons on [topic]."</span></li>
                    <li className="flex items-start gap-2"><GraduationCap className="h-4 w-4 mt-1 text-indigo-600" /><span>Fuse data + media: stats, bios, and context next to key video moments.</span></li>
                    <li className="flex items-start gap-2"><Sparkles className="h-4 w-4 mt-1 text-indigo-600" /><span>Predictive insights and AI recommendations based on interest patterns.</span></li>
                    <li className="flex items-start gap-2"><Trophy className="h-4 w-4 mt-1 text-indigo-600" /><span>Interactive features: live polls, Q&A, leaderboards, and prediction challenges.</span></li>
                    <li className="flex items-start gap-2"><Sparkles className="h-4 w-4 mt-1 text-indigo-600" /><span>Gamified loyalty programs: streak rewards, points systems, and exclusive unlocks.</span></li>
                    <li className="flex items-start gap-2"><Megaphone className="h-4 w-4 mt-1 text-indigo-600" /><span>Personalization engine: individualized playlists, event alerts, AI-driven suggestions.</span></li>
                  </ul>
                </article>

                {/* Revenue Expansion */}
                <article className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-900">Revenue Expansion – Monetizing the Passion Economy</h2>
                      <p className="text-sm text-slate-600">Multiple revenue lanes with in-stream conversion.</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2"><BarChart3 className="h-4 w-4 mt-1 text-emerald-600" /><span>Subscription tiers from free/ad-supported to premium VIP with early access, commentary, and analytics dashboards.</span></li>
                    <li className="flex items-start gap-2"><TrendingUp className="h-4 w-4 mt-1 text-emerald-600" /><span>Dynamic pricing models for exclusive or limited-time events.</span></li>
                    <li className="flex items-start gap-2"><ShoppingCart className="h-4 w-4 mt-1 text-emerald-600" /><span>Embedded e-commerce: merchandise, collectibles, learning modules, and tickets purchasable in-stream.</span></li>
                    <li className="flex items-start gap-2"><Megaphone className="h-4 w-4 mt-1 text-emerald-600" /><span>Advertising & sponsorship integration: branded content and targeted ad placements.</span></li>
                    <li className="flex items-start gap-2"><Users className="h-4 w-4 mt-1 text-emerald-600" /><span>Data monetization via aggregated analytics—unlocking found revenue for content-rich organizations.</span></li>
                  </ul>
                </article>

                {/* Why Zyglio */}
                <article className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-500 flex items-center justify-center">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-900">Why Zyglio is the Right Partner</h2>
                      <p className="text-sm text-slate-600">Expertise + AI + global infrastructure.</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2"><Settings className="h-4 w-4 mt-1 text-purple-600" /><span>End-to-end capability: software, marketing strategy, analytics, e-commerce, and ad integration.</span></li>
                    <li className="flex items-start gap-2"><Sparkles className="h-4 w-4 mt-1 text-purple-600" /><span>AI-optimized architecture: automated tagging, real-time contextualized delivery, and Retrieval-Augmented Generation.</span></li>
                    <li className="flex items-start gap-2"><Globe2 className="h-4 w-4 mt-1 text-purple-600" /><span>Global-ready infrastructure for seamless international access.</span></li>
                    <li className="flex items-start gap-2"><TrendingUp className="h-4 w-4 mt-1 text-purple-600" /><span>Proven success combining live/on-demand media with commerce and AI to grow audience and revenue.</span></li>
                  </ul>
                </article>
              </div>

              {/* Right column: Highlight card */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                        <Clapperboard className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">AI Media Ecosystem</h3>
                        <p className="text-sm text-slate-600">Entertainment + Education</p>
                      </div>
                    </div>
                    <p className="text-slate-700 mb-4">
                      A unified stack for streaming, search, personalization, interactivity, and commerce—optimized by AI.
                    </p>
                    <ul className="space-y-2 text-slate-700 mb-6">
                      <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-violet-600" /><span>Automated tagging & recommendations</span></li>
                      <li className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-violet-600" /><span>Global low-latency delivery</span></li>
                      <li className="flex items-center gap-2"><ShoppingCart className="h-4 w-4 text-violet-600" /><span>In-stream e‑commerce</span></li>
                      <li className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-violet-600" /><span>Real-time analytics</span></li>
                    </ul>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <a href="/demo" aria-label="Request a personalized demo for Entertainment & Education">
                        Explore Media Monetization
                      </a>
                    </Button>
                  </Card>
                </div>
              </aside>
            </div>
          </section>

          {/* CTA */}
          <section className="pb-20 px-4">
            <div className="max-w-7xl mx-auto text-center bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-3xl p-12 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Build Your Media Ecosystem?</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                See how Zyglio unifies streaming, learning, interactivity, and commerce to unlock new audience and revenue.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <a href="/demo" aria-label="Request a demo for Entertainment & Education">
                  Request Demo
                </a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default EntertainmentEducation;
