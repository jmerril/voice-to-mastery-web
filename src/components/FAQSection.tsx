import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is 'the phenomenon'?",
    answer: "The phenomenon is the breakthrough moment when voice-first AI mentorship combines with atomic knowledge to create an entirely new learning paradigm. It's not just another training platform—it's a fundamental shift in how humans acquire, retain, and apply expertise."
  },
  {
    question: "How does voice-first AI mentorship work?",
    answer: "Our AI mentors use natural conversation to guide learners through complex scenarios. Unlike text-based training, voice interaction captures tone, emotion, and real-time feedback, creating an immersive mentorship experience that mimics human expertise transfer."
  },
  {
    question: "What is atomic knowledge?",
    answer: "Atomic knowledge breaks down complex expertise into its smallest, most fundamental components. Each 'atom' of knowledge is precisely defined, interconnected, and measurable, allowing for personalized learning paths and precise skill development."
  },
  {
    question: "How does this scale human expertise?",
    answer: "By capturing the decision-making patterns, contextual reasoning, and experiential knowledge of top performers, we create AI mentors that can be deployed at unlimited scale while maintaining the quality and nuance of expert guidance."
  },
  {
    question: "What makes this different from other AI training tools?",
    answer: "We're not just digitizing existing training methods. We've reimagined how expertise flows from expert to learner using voice-first interaction, atomic knowledge structures, and continuous performance feedback loops."
  },
  {
    question: "How do you measure learning effectiveness?",
    answer: "Every interaction generates data on comprehension, application, and retention. Our system tracks micro-improvements, identifies knowledge gaps in real-time, and adapts the mentorship approach for optimal learning velocity."
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