"use client";

import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Icons } from "../ui/icons";
import { Section } from "../ui/section";

export default function FeaturesSection() {
  const features = [
    {
      title: "Digital Twin Synthesis",
      description:
        "Aggregates physiological markers into a mathematical replica of adaptation states.",
      icon: Icons.Twin,
    },
    {
      title: "Adaptation Forecasting",
      description:
        "Projects responses and flags fatigue indicators using advanced load kinetics.",
      icon: Icons.Forecast,
    },
    {
      title: "Apple Health Import",
      description:
        "Continuous read-only synchronization of Sleep, HRV, and Resting Heart Rate telemetry.",
      icon: Icons.Security,
    },
    {
      title: "What-If Simulation",
      description:
        "Run hypothetical microcycles to observe changes in readiness coefficients.",
      icon: Icons.Play,
    },
    {
      title: "Athlete Check-Ins",
      description:
        "Morning wellness check-ins combined with immediate post-session performance feedback.",
      icon: Icons.CheckIn,
    },
    {
      title: "Data Sovereignty (GDPR)",
      description:
        "Right of export and erasure (Articles 15–21) built natively into client dashboards.",
      icon: Icons.Erasure,
    },
  ];

  return (
    <Section id="features" className="bg-background">
      <div className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <Badge variant="info">Complete Capabilities</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineered for Elite Outcomes
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            APOS delivers scientifically grounded telemetry models without fitness influencer gimmicks.
            Pure, objective decision support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <Card
                key={feat.title}
                className="bg-gray-950/20 border border-gray-900/60 p-6 flex flex-col justify-between hover:border-blue-500/20 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-wide">{feat.title}</h3>
                  <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
