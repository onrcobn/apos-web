import * as React from "react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Medical Disclaimer — APOS",
  description: "Official medical disclaimer for the APOS athletic monitoring platform.",
};

export default function MedicalDisclaimerPage() {
  return (
    <main className="min-h-screen pt-12">
      <Section>
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4">
            <Badge variant="critical">Regulatory Status</Badge>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Medical Disclaimer
            </h1>
          </div>

          <Card className="border border-red-500/20 bg-red-950/5 p-8 space-y-6">
            <p className="text-white font-semibold text-base">Required Statutory Statement</p>

            <p className="text-secondary text-sm sm:text-base leading-relaxed font-medium">
              APOS is not a medical device.
            </p>
            <p className="text-secondary text-sm sm:text-base leading-relaxed">
              The tools, algorithms, and telemetry data provided are strictly designed for
              high-performance athletic monitoring, training load tracking, and workload management.
            </p>
            <p className="text-secondary text-sm sm:text-base leading-relaxed">
              All recommendations, alerts (including Workload Spikes and Neuromuscular Fatigue
              flags), and scenarios are descriptive decision-support helpers.
            </p>
            <p className="text-secondary text-sm sm:text-base leading-relaxed">
              They do not constitute diagnostic medical advice or training prescriptions.
            </p>
          </Card>
        </div>
      </Section>
    </main>
  );
}
