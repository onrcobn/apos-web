"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Icons } from "../ui/icons";
import { Section } from "../ui/section";

export default function DigitalTwinSection() {
  const views = [
    {
      id: "snapshot",
      name: "State Snapshot",
      shortTitle: "Trends",
      description: "Aggregates daily check-ins, sleep logs, and resting metrics into a single athlete state. Track capacity trends longitudinally to make structured coaching decisions rather than relying on isolated numbers.",
      image: "/screenshots/trends.png",
      tag: "Biometric Twin",
    },
    {
      id: "alerts",
      name: "Decision Center",
      shortTitle: "Alerts",
      description: "Flags workload deviations and neuromuscular fatigue alerts. Keeps coaching staff aligned on physical risks so you can protect athlete availability collectively.",
      image: "/screenshots/alerts.png",
      tag: "Risk Prevention",
    },
    {
      id: "prescription",
      name: "Load Prescription",
      shortTitle: "Plan",
      description: "Computes recommended workload adjustments based on cumulative stress. Translates complex recovery indices into a clear volume scaling indicator for the daily training session.",
      image: "/screenshots/plan.png",
      tag: "Prescription",
    },
    {
      id: "roster",
      name: "Roster Directory",
      shortTitle: "Team",
      description: "Tracks cohort records and active rosters in one place. Coordinates all support staff around athlete status histories, eliminating manual administrative work.",
      image: "/screenshots/roster.png",
      tag: "Roster",
    },
  ];

  const [activeTab, setActiveTab] = React.useState("snapshot");
  const currentView = views.find((v) => v.id === activeTab) || views[0];

  return (
    <Section id="digital-twin" className="bg-background py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Description Column */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <Badge variant="info">Institutional Memory</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              The Athlete Digital Twin
            </h2>
            <p className="text-secondary text-sm sm:text-base leading-relaxed font-light">
              The Athlete Twin is not a visualization dashboard. It is a continuously updated operational profile that accumulates everything known about an athlete. By consolidating daily wellness logs, sleep values, resting heart rate indices, and training logs, APOS builds institutional memory that survives team transitions.
            </p>
            <p className="text-secondary text-sm sm:text-base leading-relaxed font-light">
              This structured profile ensures coaching, performance, and medical staffs look at the complete historical context of each athlete instead of relying on isolated metrics or siloed files:
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-white tracking-wide pt-2">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-900 border border-gray-800">
                Know when to push
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-900 border border-gray-800">
                Know when to recover
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-900 border border-gray-800">
                Know when to intervene
              </span>
            </div>
          </div>

          {/* Interactive Menu List */}
          <div className="space-y-4 pt-4" role="tablist" aria-label="Product views Selector">
            {views.map((v) => {
              const isActive = v.id === activeTab;
              return (
                <button
                  key={v.id}
                  onClick={() => setActiveTab(v.id)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${v.id}`}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 focus-ring cursor-pointer ${
                    isActive
                      ? "border-blue-500/20 bg-blue-500/5 shadow-[0_0_20px_rgba(59,130,246,0.02)]"
                      : "border-gray-900 bg-gray-950/20 hover:border-gray-800/80 hover:bg-gray-950/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">{v.tag}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    )}
                  </div>
                  <h4 className="text-base font-bold text-white mt-1">{v.name}</h4>
                  <p className="text-secondary text-xs sm:text-sm mt-1 leading-relaxed font-light">
                    {v.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dashboard Mockup Column (iPhone Mockup) */}
        <div className="lg:col-span-6 flex justify-center">
          <div
            id={`panel-${currentView.id}`}
            role="tabpanel"
            className="relative"
          >
            {/* Interactive screenshot container */}
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[640px] w-[300px] device-shadow overflow-hidden">
              {/* Metallic edge highlight */}
              <div className="absolute inset-0 rounded-[1.8rem] border border-white/5 pointer-events-none z-30" />

              {/* Dynamic Island / Speaker notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-40 flex items-center justify-center">
                <div className="w-12 h-1 bg-gray-900 rounded-full" />
              </div>

              {/* Volume & Side buttons details */}
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg" />
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg" />
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg" />
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[94px] rounded-e-lg" />

              {/* Glass Reflection Overlay */}
              <div className="absolute inset-0 device-reflection rounded-[1.8rem] pointer-events-none" />

              {/* Simulated Screen Body */}
              <div className="rounded-[1.8rem] overflow-hidden w-full h-full bg-black relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentView.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={currentView.image}
                      className="w-full h-full object-cover"
                      alt={`APOS iOS App - ${currentView.name}`}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
