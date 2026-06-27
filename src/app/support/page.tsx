"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function SupportPage() {
  const [requestType, setRequestType] = React.useState<"general" | "bug" | "erasure">("general");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-12">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Documentation Quick-Guides */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <Badge variant="info">Support Hub</Badge>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Support &amp; Operations
              </h1>
              <p className="text-secondary text-sm leading-relaxed">
                Need operational assistance with your APOS workspace? Contact our support staff or review
                licensing checklists below.
              </p>
            </div>

            <div className="h-px bg-gray-900" />

            <div className="space-y-4">
              {/* Apple Subscriptions */}
              <div>
                <h4 className="text-sm font-semibold text-white">Subscription Management</h4>
                <p className="text-secondary text-xs mt-1 leading-relaxed">
                  All subscriptions (Pro $5.90/mo, Elite $9.90/mo) are managed directly on the App Store.
                  To cancel or update your plan, navigate to your iOS device: Settings &gt; [Your Name]
                  &gt; Subscriptions.
                </p>
              </div>

              {/* HealthKit Settings */}
              <div>
                <h4 className="text-sm font-semibold text-white">Apple Health (HealthKit) Options</h4>
                <p className="text-secondary text-xs mt-1 leading-relaxed">
                  Daily HRV, sleep, and heart rate telemetry are imported as read-only. You can revoke
                  or modify individual read permissions at any time via: Settings &gt; Privacy &amp;
                  Security &gt; Health &gt; APOS.
                </p>
              </div>

              {/* GDPR Rights */}
              <div>
                <h4 className="text-sm font-semibold text-white">GDPR &amp; Data Erasure (Article 17)</h4>
                <p className="text-secondary text-xs mt-1 leading-relaxed">
                  Organizations retain full sovereignty over their files. You can request a complete GDPR
                  data export or execute a permanent account deletion (Right of Erasure) using the form
                  panel on this page.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-4 flex flex-wrap gap-3 text-xs text-blue-400">
              <Link href="/privacy" className="hover:underline focus-ring rounded">
                Privacy Policy
              </Link>
              <span className="text-gray-800">|</span>
              <Link href="/terms" className="hover:underline focus-ring rounded">
                Terms of Service
              </Link>
              <span className="text-gray-800">|</span>
              <Link href="/medical-disclaimer" className="hover:underline focus-ring rounded">
                Medical Disclaimer
              </Link>
            </div>
          </div>

          {/* Right Column: Support Form Panel */}
          <div className="lg:col-span-7">
            <Card className="border border-gray-900 bg-gray-950/20 p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white tracking-wide">Contact performance desk</h3>
                <p className="text-secondary text-xs">
                  Direct inquiry line:{" "}
                  <a href="mailto:support@athleticsci.com" className="text-blue-400 hover:underline">
                    support@athleticsci.com
                  </a>
                </p>
              </div>

              <div className="flex gap-2 border-b border-gray-900 pb-4">
                <Button
                  variant={requestType === "general" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setRequestType("general")}
                >
                  General Enquiry
                </Button>
                <Button
                  variant={requestType === "bug" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setRequestType("bug")}
                >
                  Report Bug
                </Button>
                <Button
                  variant={requestType === "erasure" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setRequestType("erasure")}
                >
                  Account Deletion
                </Button>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 text-center border border-emerald-500/20 bg-emerald-950/10 rounded-lg space-y-3"
                  >
                    <Badge variant="success">Submitted</Badge>
                    <h4 className="text-sm font-semibold text-white">Inquiry Registered</h4>
                    <p className="text-secondary text-xs leading-relaxed max-w-sm mx-auto">
                      Your performance desk request has been logged. A support representative will
                      respond to your organizational email within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {requestType === "erasure" && (
                      <Alert variant="critical" title="Warning: Right of Erasure (GDPR)">
                        Executing a data erasure request is permanent. All historical athlete twins,
                        baseline HRV metrics, z-score profiles, and organization logs will be completely
                        scrubbed from our database systems. This action cannot be undone.
                      </Alert>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-xs font-semibold text-gray-300">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          className="bg-gray-950 border border-gray-900 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-xs font-semibold text-gray-300">
                          Organization Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          className="bg-gray-950 border border-gray-900 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label htmlFor="details" className="text-xs font-semibold text-gray-300">
                        Inquiry Details
                      </label>
                      <textarea
                        id="details"
                        rows={4}
                        required
                        className="bg-gray-950 border border-gray-900 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      />
                    </div>

                    <Button variant="primary" type="submit" className="w-full text-xs">
                      Submit Request
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </Card>
          </div>
        </div>

        {/* Verbatim Disclaimer at bottom of support */}
        <div className="max-w-3xl mx-auto mt-16">
          <Alert variant="warning" title="Medical Disclaimer Statement">
            APOS is not a medical device. The tools, algorithms, and telemetry data provided are
            strictly designed for high-performance athletic monitoring, training load tracking, and
            workload management. All recommendations, alerts (including Workload Spikes and
            Neuromuscular Fatigue flags), and scenarios are descriptive decision-support helpers.
            They do not constitute diagnostic medical advice or training prescriptions.
          </Alert>
        </div>
      </Section>
    </main>
  );
}
