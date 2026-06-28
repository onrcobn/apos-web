"use client";

import * as React from "react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { Section } from "../ui/section";

export default function ReliabilitySection() {
  const pillars = [
    {
      title: "Structured Athlete History",
      description: "Enforces database-level constraints on daily logs, preventing data gaps or formatting drift over multiple seasons.",
    },
    {
      title: "Longitudinal Record Integrity",
      description: "Tracks physical baseline histories continuously, providing coaches with context that survives squad or staff transitions.",
    },
    {
      title: "Consistent Workload Tracking",
      description: "Computes z-scores and exponentially weighted load decay values uniformly, removing manual formula variation.",
    },
    {
      title: "Unified Database Workspace",
      description: "Unites medical screening summaries and training load observation lists in a single secure workspace for high-performance staff.",
    },
    {
      title: "Role-Based Access Control",
      description: "Maintains clear privacy boundaries between coach administrative portals and athlete input configurations.",
    },
    {
      title: "Reproducible Staff Workflows",
      description: "Standardizes data collection and notification patterns, ensuring warning thresholds execute uniformly every day.",
    },
  ];

  return (
    <Section id="reliability" className="bg-background py-28">
      <div className="space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <Badge variant="info">Engineering Credibility</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Built for Reliability
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed font-light">
            SaaS tools represent an operational foundation. APOS is engineered with the structure required to manage sensitive biometric records.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {pillars.map((pillar, idx) => (
            <Card key={idx} className="bg-gray-950/20 border border-gray-900 p-6 flex flex-col justify-between hover:border-blue-500/10 transition-all duration-300">
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-white tracking-wide">{pillar.title}</h3>
                <p className="text-secondary text-xs sm:text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
