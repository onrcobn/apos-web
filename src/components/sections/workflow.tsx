"use client";

import * as React from "react";
import { Badge } from "../ui/badge";
import { Section } from "../ui/section";

export default function WorkflowSection() {
  const steps = [
    {
      time: "07:00",
      title: "Morning Observations",
      description: "Athletes log daily wellness indices and sleep hours, establishing the morning physiological baseline.",
    },
    {
      time: "08:30",
      title: "Medical Review",
      description: "Support staff record screening parameters and active treatment notes directly in the shared workspace.",
    },
    {
      time: "09:00",
      title: "Availability Status",
      description: "The system matches biometric states and medical notes to compile squad availability automatically.",
    },
    {
      time: "10:00",
      title: "Load Scaling Decisions",
      description: "Coaches check exponentially weighted (EWMA) load forecasts to align daily session intensities.",
    },
    {
      time: "11:30",
      title: "Shared Staff Context",
      description: "Coaching, performance, and medical departments coordinate using a single operational baseline.",
    },
    {
      time: "13:00",
      title: "Consistent Execution",
      description: "Daily training is executed with decisions informed by complete context instead of fragmented messaging.",
    },
  ];

  return (
    <Section id="workflow" className="bg-gray-950/20 border-b border-gray-900/60 py-28">
      <div className="space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <Badge variant="info">Platform Workflow</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Daily Performance Operations
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed font-light">
            APOS organizes the daily operational flow, transforming disjointed observations into coordinated staff execution.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col justify-between p-6 rounded-2xl border border-gray-900 bg-gray-950/40 space-y-4 hover:border-gray-800 transition-colors duration-300">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-blue-400 tracking-wider">{step.time}</span>
                  <h3 className="text-sm font-semibold text-white tracking-wide leading-snug">{step.title}</h3>
                </div>
                <p className="text-secondary text-xs leading-relaxed font-light mt-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
