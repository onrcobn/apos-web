"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Alert } from "../ui/alert";
import { Section } from "../ui/section";
import { Button } from "../ui/button";

export default function ForecastEngineSection() {
  const [simulation, setSimulation] = React.useState<"baseline" | "spike" | "recovery">("baseline");

  const data = {
    baseline: {
      status: "Optimal Adaptation",
      badge: "success" as const,
      readiness: 82,
      awr: "1.02",
      alert: {
        variant: "success" as const,
        title: "Balanced Progression",
        text: "Chronic adaptation matches targeted progression. No fatigue anomalies projected.",
      },
    },
    spike: {
      status: "Neuromuscular Fatigue Projection",
      badge: "critical" as const,
      readiness: 54,
      awr: "1.62",
      alert: {
        variant: "critical" as const,
        title: "Workload Spike Warning",
        text: "AWR ratio exceeds 1.5. Model projects significant exhaustion risk and potential injury parameters over the next 72 hours.",
      },
    },
    recovery: {
      status: "System Recovery Phase",
      badge: "info" as const,
      readiness: 94,
      awr: "0.78",
      alert: {
        variant: "info" as const,
        title: "Supercompensation Achieved",
        text: "Low active load stimulates recovery index. Ideal window for high-performance testing.",
      },
    },
  }[simulation];

  return (
    <Section id="forecast" className="bg-gray-950/20 border-b border-gray-900/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Simulator Panel Column */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <Card className="border border-gray-800/80 bg-gray-950/40 relative overflow-hidden max-w-xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

            {/* Simulated Heading */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-900 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  Adaptation Engine
                </span>
                <h3 className="text-sm font-bold text-white mt-0.5">What-if Simulator</h3>
              </div>
              {/* Simulator Options */}
              <div className="flex gap-2">
                <Button
                  variant={simulation === "baseline" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setSimulation("baseline")}
                >
                  Baseline
                </Button>
                <Button
                  variant={simulation === "spike" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setSimulation("spike")}
                >
                  +25% Spike
                </Button>
                <Button
                  variant={simulation === "recovery" ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setSimulation("recovery")}
                >
                  Recovery
                </Button>
              </div>
            </div>

            {/* Interactive Dynamic Metrics */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Simulation Status</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={simulation}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Badge variant={data.badge}>{data.status}</Badge>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Graphic Displays */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gray-950/30 border border-gray-900/50 text-center">
                  <p className="text-[10px] text-gray-500 uppercase font-semibold">Simulated Readiness</p>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={simulation}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="text-3xl font-extrabold text-white mt-1"
                    >
                      {data.readiness}%
                    </motion.p>
                  </AnimatePresence>
                </div>
                <div className="p-4 rounded-lg bg-gray-950/30 border border-gray-900/50 text-center">
                  <p className="text-[10px] text-gray-500 uppercase font-semibold">Acute/Chronic Ratio</p>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={simulation}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className={`text-3xl font-extrabold mt-1 ${
                        simulation === "spike" ? "text-red-400" : "text-white"
                      }`}
                    >
                      {data.awr}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* Compliance Inline Alerts */}
              <div className="pt-2 min-h-[92px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={simulation}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Alert variant={data.alert.variant} title={data.alert.title}>
                      {data.alert.text}
                    </Alert>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Card>
        </div>

        {/* Details Column */}
        <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
          <Badge variant="info">Decision Support</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Adaptation & <span className="text-blue-500">Forecasting</span>
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            The APOS Forecast Engine utilizes mathematical load modeling (Banister impulse-response model derivatives) to project athlete adaptations. Simulate scheduled sessions to predict how workloads impact future fatigue indices.
          </p>
          <ul className="space-y-3 text-sm text-secondary pt-2">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>DESCRIPTIVE DECISION-SUPPORT: Purely descriptive, non-prescription tools.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>PRE-EMPT FATIGUE: Flags potential workload spikes prior to scheduled sessions.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>WHAT-IF SCENARIOS: Adjust intensity maps dynamically to preview response cycles.</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
