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
      key: "billing",
      question: "How is billing handled?",
      answer: (
        <p>
          Billing is processed securely through your Apple ID account on an annual basis.
          Transactions are handled directly by Apple StoreKit, with no hidden fees or extra transaction costs.
        </p>
      ),
    },
    {
      key: "cancel",
      question: "Can I cancel anytime?",
      answer: (
        <p>
          Yes. You can cancel or modify your annual licensing choice at any time inside your iOS Settings (under Apple ID Subscriptions).
          Access to your active plan details remains active until your current annual billing period ends.
        </p>
      ),
    },
    {
      key: "ownership",
      question: "Who owns my data?",
      answer: (
        <p>
          Your organization owns 100% of the athlete capacity histories and daily logs.
          APOS is a performance tool and maintains no claim of ownership or proprietary rights over your data.
        </p>
      ),
    },
    {
      key: "export",
      question: "Can I export my data?",
      answer: (
        <p>
          Yes. Coaches and workspace administrators can request a complete, structured JSON export of all athlete logs
          and profiles at any time directly from the settings panel.
        </p>
      ),
    },
    {
      key: "single-athlete",
      question: "Can I start with one athlete?",
      answer: (
        <p>
          Yes. The Free license supports monitoring for 1 active athlete. You can transition to Pro (up to 15 active athletes)
          or Elite (up to 30 active athletes) as your organization grows.
        </p>
      ),
    },
    {
      key: "multiple-coaches",
      question: "Does my organization need multiple coaches?",
      answer: (
        <p>
          No. You can manage your entire squad under a single coach workspace.
          Under Pro and Elite licenses, coaches can organize active rosters and coordinate views with other support staff.
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
