import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Zyglio in one sentence?",
    answer: "Zyglio is an AI-powered, voice-first simulation and training platform that transforms expert knowledge into interactive, atomic learning experiences for industries where precision, speed-to-skill, and consistency matter most."
  },
  {
    question: "What problem does Zyglio solve across the industry?",
    answer: "Globally, companies spend hundreds of billions annually on training, onboarding, and reskilling employees—yet much of this investment fails to translate into measurable skill acquisition or operational consistency. Traditional training is fragmented, slow to update, expensive to scale, and heavily dependent on human facilitators."
  },
  {
    question: "What does this problem look like for a single company?",
    answer: "For a mid-sized operator—say, a restaurant group, defense contractor, or industrial equipment provider—the lack of scalable training can cost millions per year in: high turnover and retraining costs, operational inefficiencies (mistakes, safety issues, compliance lapses), missed growth opportunities due to slow reskilling, and lost institutional knowledge when experts leave."
  },
  {
    question: "How does Zyglio's solution work?",
    answer: "Zyglio captures expert know-how as structured 'atomic knowledge' and deploys it through interactive, voice-first simulations. Employees learn directly from a real-time AI mentor while performing tasks, receiving immediate feedback, and building mastery. Modules include: Core Simulation Engine, Voice-First Mentorship, Blueprint Packs, Performance Dashboard, and Multi-Language & Multi-Device optimization."
  },
  {
    question: "What makes Zyglio different from traditional training or LMS systems?",
    answer: "Voice-first mentorship (real-time coaching, not static e-learning), atomic knowledge architecture allows modular, reusable, cross-industry knowledge capture, gamified simulations ensure faster time-to-skill and better retention, analytics-driven outcomes (measured improvements in speed, error reduction, and compliance), and scalability: a single expert session can train thousands globally, instantly."
  },
  {
    question: "How big is Zyglio's market?",
    answer: "The corporate training and reskilling market is estimated at $400B–$800B globally, with high growth due to workforce churn and the 'Great Reskilling' trend. TAM (Total Addressable Market): All global corporate training spend. SAM (Serviceable Available Market): Segments like hospitality, defense, healthcare, manufacturing, and cybersecurity in North America and Europe (~$80B+)."
  },
  {
    question: "What is Zyglio's business model?",
    answer: "Zyglio is a SaaS subscription platform with tiered pricing: Core SaaS License (multi-tenant platform access), Blueprint Packs (vertical-specific training modules sold as add-ons), Enterprise Services (custom simulation builds, integrations, and IP protection), and Analytics & Dashboards (premium tier for real-time insights and performance benchmarking)."
  },
  {
    question: "What patents does Zyglio have pending, and how do they create defensibility?",
    answer: "Zyglio has multiple patents pending covering three core innovations: (1) a proprietary methodology for capturing and structuring tacit knowledge into auditable modules; (2) a multimodal AI framework that fuses real-time voice with on-screen guidance for faster skill acquisition; and (3) a universal cross-industry taxonomy that reduces customization time."
  },
  {
    question: "How does Zyglio's AI platform technically differ from existing training solutions?",
    answer: "Most training tools digitize manuals or deliver generic e-learning. Zyglio instead captures how work is really done by experts and structures it into dynamic, AI-powered knowledge modules. Our system is interactive (voice + screen), adaptive (personalized learning paths), and verifiable (performance data tied to outcomes)."
  },
  {
    question: "How does Zyglio ensure knowledge accuracy and trust?",
    answer: "Our methodology requires knowledge capture to be reviewed and validated against operational outcomes. Each module is auditable, with metadata linking expert input to performance metrics. This builds trust that Zyglio content is both accurate and continuously refined through real-world usage."
  },
  {
    question: "Who owns the training data and customer content?",
    answer: "Customers retain ownership of their raw data and proprietary domain content. Zyglio owns the anonymized models and aggregated performance insights, which improve the platform while protecting customer IP. This structure builds trust with enterprises while enabling compounding improvements across all customers."
  },
  {
    question: "What pilot programs have been completed?",
    answer: "Our hospitality pilot showed a 50% reduction in training time with improved retention and consistency across staff. A cybersecurity pilot is underway, focused on accelerating onboarding for technical personnel. Both sectors provide early proof that Zyglio reduces cost and time while improving measurable performance outcomes."
  },
  {
    question: "What industries is Zyglio targeting first?",
    answer: "We started with hospitality because of its large, transient workforce and pressing need for consistent training. Cybersecurity was selected for its high-stakes environment and demand for rapid upskilling. Both are beachhead markets that validate Zyglio's flexibility across sectors. Long term, our cross-industry taxonomy positions us to scale into healthcare, manufacturing, and defense."
  },
  {
    question: "What traction does Zyglio have so far?",
    answer: "We have completed successful pilots across multiple verticals including hospitality (full training academy rollout across multiple locations), defense (early adoption for training and retention scenarios), cybersecurity (AI-driven enterprise security training modules in development), and healthcare (AI-assisted engagement and compliance training prototypes). We continue to see strong inbound interest from staffing firms, hospitality groups, and industrial partners."
  },
  {
    question: "What is Zyglio's revenue model?",
    answer: "Zyglio operates as a SaaS platform with recurring revenue. Pricing can be per-user, per-module, or enterprise license, depending on customer size and complexity. We also offer tiered functionality (e.g., analytics, integrations) that provides upsell opportunities."
  },
  {
    question: "Who is the team behind Zyglio?",
    answer: "The Zyglio team includes cross-functional experts in AI, simulation, and UX design, with advisors and early collaborators from hospitality, defense, and healthcare. Our leadership brings together expertise in learning systems, aerospace engineering, and scaling technology companies."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-6">
            Understanding the Phenomenon
          </h2>
          <p className="text-xl font-light text-muted-foreground">
            Common questions about our approach to AI mentorship
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};