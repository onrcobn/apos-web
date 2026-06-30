import * as React from "react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";

export const metadata = {
  title: "Terms of Service — APOS",
  description:
    "Official terms of service for the APOS athletic monitoring platform. Subscription terms, Apple ID payments, data ownership, and health limitations.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-12">
      <Section>
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Badge variant="info">Legal Agreement</Badge>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Terms of Service
            </h1>
            <p className="text-secondary text-sm">Effective Date: June 27, 2026</p>
          </div>

          {/* Compliance Medical Alert */}
          <Alert variant="warning" title="Medical Disclaimer Statement">
            APOS is not a medical device. The tools, algorithms, and telemetry data provided are
            strictly designed for high-performance athletic monitoring, training load tracking, and
            workload management. All recommendations, alerts (including Workload Spikes and
            Neuromuscular Fatigue flags), and scenarios are descriptive decision-support helpers.
            They do not constitute diagnostic medical advice or training prescriptions.
          </Alert>

          {/* Terms Body */}
          <Card className="border border-gray-900 bg-gray-950/20 p-8 space-y-8 text-sm text-secondary leading-relaxed">
            {/* Section 1: Acceptance */}
            <div className="space-y-3">
              <h2 className="text-base font-bold text-white uppercase tracking-wider">
                1. Acceptance of Terms
              </h2>
              <p>
                By creating an account, connecting Apple Health permissions, or purchasing an organization
                workspace inside the APOS ecosystem, you agree to comply with and be bound by these
                Terms of Service.
              </p>
            </div>

            {/* Section 2: Subscriptions & Billing */}
            <div className="space-y-3">
              <h2 className="text-base font-bold text-white uppercase tracking-wider">
                2. Subscription Tiers &amp; Apple ID Purchases
              </h2>
              <p>
                APOS offers subscription tiers handled securely through Apple Subscriptions:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>
                  <strong>Starter Tier:</strong> Billed at **$100.00/year**, allowing the creation of up
                  to **5 active athlete twin** dashboards.
                </li>
                <li>
                  <strong>Pro Tier:</strong> Billed at **$250.00/year**, allowing the creation of up
                  to **15 active athlete twin** dashboards.
                </li>
                <li>
                  <strong>Elite Tier:</strong> Billed at **$450.00/year**, allowing the creation of
                  up to **30 active athlete twin** dashboards.
                </li>
                <li>
                  <strong>Team Tier:</strong> Billed at **$650.00/year**, allowing the creation of
                  up to **50 active athlete twin** dashboards.
                </li>
              </ul>
              <p>
                All recurring payments, subscription upgrades, downgrades, and cancellations are
                managed directly within your Apple ID account settings. Refund parameters are handled
                strictly in accordance with Apple App Store refund protocols.
              </p>
            </div>

            {/* Section 3: Data Ownership */}
            <div className="space-y-3">
              <h2 className="text-base font-bold text-white uppercase tracking-wider">
                3. Data &amp; Organization Sovereignty
              </h2>
              <p>
                All telemetry records, roster configurations, and dashboard histories are fully owned
                by the purchasing Organization. APOS makes no claim of ownership over telemetry logs
                and only acts as a secure storage and analytical processor.
              </p>
            </div>

            {/* Section 4: Health & Physiological Limitations */}
            <div className="space-y-3">
              <h2 className="text-base font-bold text-white uppercase tracking-wider">
                4. Health &amp; Telemetry Limitations
              </h2>
              <p>
                The metrics and charts presented (e.g., HRV, acute training loads, Readiness Scores, and
                what-if workload projections) are based on mathematical normalization models. They rely
                on accurate user inputs (e.g., check-ins) and continuous, read-only Apple Health import
                states.
              </p>
              <p>
                If an athlete revokes HealthKit permissions, the application&apos;s forecast calculations may
                fail or drop in accuracy.
              </p>
            </div>

            {/* Section 5: Termination & Account Deletion */}
            <div className="space-y-3">
              <h2 className="text-base font-bold text-white uppercase tracking-wider">
                5. Cancellation &amp; Deletion
              </h2>
              <p>
                You may cancel your annual subscription through standard Apple ID subscriptions at any
                time. Account deletion requests (pursuant to GDPR right-of-erasure) can be executed
                directly inside the application or requested via our Support Hub.
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
