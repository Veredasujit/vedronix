import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion } from "motion/react";

export function FAQSection() {
  const faqs = [
    {
      question: "How natural does the AI voice sound?",
      answer: "Vedronix uses state-of-the-art neural text-to-speech with emotional intelligence. It handles interruptions naturally and maintains the persona of your brand throughout the conversation."
    },
    {
      question: "Can it integrate with our existing CRM?",
      answer: "Yes, Vedronix integrates natively with Salesforce, Hubspot, Zoho, and 1,000+ other apps via Zapier and custom Webhooks. It can update records, create tasks, and trigger workflows in real-time."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "We are SOC2 Type II compliant and follow GDPR/HIPAA guidelines. All voice data is encrypted in transit and at rest. We never store PII unless explicitly required for your workflow."
    },
    {
      question: "What languages does Vedronix support?",
      answer: "Our platform supports 50+ languages and regional accents, allowing for seamless global outreach or localized citizen engagement."
    },
    {
      question: "How long does it take to deploy a custom workflow?",
      answer: "A standard lead qualification or booking workflow can be live in less than 48 hours. More complex integrations with custom legacy systems typically take 1-2 weeks."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0A2463] mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about Vedronix AI calling platform.</p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-xl px-6"
            >
              <AccordionTrigger className="text-[#0A2463] font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
