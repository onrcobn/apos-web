"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Icons } from "../ui/icons";
import { Section } from "../ui/section";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-900 last:border-b-0 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left text-white py-2 focus-ring rounded-md font-semibold text-sm sm:text-base cursor-pointer"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400 shrink-0 ml-4"
        >
          <Icons.ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="text-secondary text-xs sm:text-sm leading-relaxed pt-2 pb-4 pr-6 space-y-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  const faqs = [
    {
      key: "hrv",
      question: "How does HRV tracking work in APOS?",
      answer: (
        <p>
          APOS reads Heart Rate Variability (HRV) using root mean square of successive differences
          (RMSSD) telemetry directly from your Apple Health database (Read-Only). We recommend
          completing an Apple Watch Breathe session or sleep tracking to establish a reliable daily
          baseline.
        </p>
      ),
    },
    {
      key: "readiness",
      question: "How is the daily Readiness Score calculated?",
      answer: (
        <p>
          Our normalization engine computes z-scores across a rolling 21-day baseline for HRV,
          sleep parameters, and resting heart rate. These values are weighted against acute training
          loads to forecast adaptive reserve indices and identify potential neuromuscular fatigue
          markers.
        </p>
      ),
    },
    {
      key: "coaches",
      question: "Can coaches monitor teams or multiple cohorts?",
      answer: (
        <p>
          Yes. The Coach Dashboard is designed for high-performance clubs, academies, and
          universities. Coaches can organize athletes into custom squads, monitor team-wide
          workload ratios, and receive automated flags for acute-to-chronic workload ratio (ACWR)
          spikes.
        </p>
      ),
    },
    {
      key: "gdpr",
      question: "How do I export or delete my organization data?",
      answer: (
        <p>
          Under GDPR Articles 15–21, you retain full sovereignty over your data. Coaches and
          administrators can request a complete GDPR-compliant JSON data export or execute a
          permanent right-of-erasure (deletion) command from the organization settings panel at any
          time.
        </p>
      ),
    },
    {
      key: "subscriptions",
      question: "How do subscriptions and billing work?",
      answer: (
        <p>
          Subscriptions are managed strictly through Apple Subscriptions and linked to your Apple ID.
          The Pro tier ($5.90/month, up to 15 athletes) and Elite tier ($9.90/month, up to 30
          athletes) are billed on a recurring monthly cycle. You can cancel or modify your plan at
          any time through Apple ID account settings.
        </p>
      ),
    },
  ];

  return (
    <Section id="faq" className="bg-background">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <Badge variant="info">Knowledge Base</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-secondary text-sm leading-relaxed max-w-xl mx-auto">
            Review detailed technical explanations of our mathematical telemetry, platform features,
            and licensing options.
          </p>
        </div>

        <Card className="border border-gray-900 bg-gray-950/20 px-6 py-4">
          <div className="divide-y divide-gray-900">
            {faqs.map((faq) => (
              <FAQItem key={faq.key} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
