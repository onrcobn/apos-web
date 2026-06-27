"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Icons } from "../ui/icons";
import { Section } from "../ui/section";

export default function DigitalTwinSection() {
  return (
    <Section id="digital-twin" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Description Column */}
        <div className="lg:col-span-5 space-y-6">
          <Badge variant="info">Platform Feature</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            The Athlete <span className="text-blue-500">Digital Twin</span>
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            APOS builds a mathematical representation of your athletes using daily bio-telemetry. By
            analyzing multi-dimensional variables, the platform synthesizes physiological adaptation and
            fatigue levels into one unified model.
          </p>
          <div className="space-y-4 pt-2">
            <div className="flex gap-3">
              <Icons.Security className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Apple Health Integration</h4>
                <p className="text-secondary text-xs mt-1 leading-relaxed">
                  Automatically maps HRV, sleep stages, and resting heart rate. Permission-based, read-only
                  telemetry that can be revoked by the athlete at any time.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Icons.Dashboard className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Physiological Telemetry</h4>
                <p className="text-secondary text-xs mt-1 leading-relaxed">
                  Maintains continuous metrics normalization. Generates precise indices of neuromuscular state without invasive testing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Mockup Column */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="max-w-xl mx-auto border border-gray-800/80 bg-gray-950/40 relative overflow-hidden">
              {/* Card top border highlight */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

              {/* Mockup Header */}
              <div className="flex items-center justify-between border-b border-gray-900 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-gray-300">Athlete Twin Active</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-semibold text-blue-400">
                  <Icons.Security className="w-3 h-3" />
                  <span>Apple Health Connected</span>
                </div>
              </div>

              {/* Main Score Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                {/* Dial Score */}
                <div className="flex flex-col items-center justify-center p-4 border border-gray-900 rounded-lg bg-gray-950/20 relative">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Readiness Score
                  </span>
                  <span className="text-5xl font-extrabold text-white my-2">86</span>
                  <Badge variant="success">Optimal</Badge>
                </div>

                {/* Short Sub-metrics */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400 font-medium">HRV (Rmssd)</span>
                      <span className="text-white font-semibold">82 ms</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden">
                      <div className="w-[82%] h-full bg-blue-500 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400 font-medium">Sleep Quality</span>
                      <span className="text-white font-semibold">8h 15m</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden">
                      <div className="w-[88%] h-full bg-blue-500 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400 font-medium">Resting HR</span>
                      <span className="text-white font-semibold">52 bpm</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden">
                      <div className="w-[92%] h-full bg-blue-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom twin logs indicator */}
              <div className="mt-6 pt-4 border-t border-gray-900 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 bg-gray-950/30 rounded border border-gray-900/50">
                  <p className="text-[10px] text-gray-500 uppercase font-semibold">Chronic Load</p>
                  <p className="text-sm font-bold text-white mt-0.5">380</p>
                </div>
                <div className="p-2 bg-gray-950/30 rounded border border-gray-900/50">
                  <p className="text-[10px] text-gray-500 uppercase font-semibold">Acute Load</p>
                  <p className="text-sm font-bold text-white mt-0.5">410</p>
                </div>
                <div className="p-2 bg-gray-950/30 rounded border border-gray-900/50">
                  <p className="text-[10px] text-gray-500 uppercase font-semibold">AWR Ratio</p>
                  <p className="text-sm font-bold text-emerald-400 mt-0.5">1.08</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
