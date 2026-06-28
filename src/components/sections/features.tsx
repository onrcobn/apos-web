"use client";

import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Icons } from "../ui/icons";
import { Section } from "../ui/section";

export default function FeaturesSection() {
  const comparison = [
    {
      dimension: "Daily Workflows",
      before: "Disconnected files, manual text updates, and email logs.",
      after: "One integrated workspace aligning coaches and performance staff around a single baseline.",
    },
    {
      dimension: "Performance History",
      before: "Manual files vulnerable to calculation drift, data gaps, and record decay.",
      after: "A structured, permanent record capturing longitudinal athlete histories consistently.",
    },
    {
      dimension: "Staff Collaboration",
      before: "Individual performance knowledge locked in personal notes and silos.",
      after: "Shared organizational records coordinating all support staff to reduce operational uncertainty.",
    },
    {
      dimension: "Decision Integrity",
      before: "Reactive training adjustments made after exhaustion or physical overload occurs.",
      after: "Consistent daily decision support projecting workload adaptations to protect athlete availability.",
    },
  ];

  return (
    <Section id="features" className="bg-background py-28">
      <div className="space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <Badge variant="info">Operational Maturity</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Operational Progression
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed font-light">
            Transition your department from disconnected tracking methods to a coordinated Performance Operations Platform.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {/* Header Row - visible on desktop */}
          <div className="hidden md:grid grid-cols-12 gap-6 px-6 pb-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-900">
            <div className="col-span-3">Dimension</div>
            <div className="col-span-4">Fragmented Operations</div>
            <div className="col-span-5">APOS Performance Operations</div>
          </div>

          {/* Matrix Rows */}
          <div className="divide-y divide-gray-900 border-b border-gray-900 md:border-b-0">
            {comparison.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-6 px-6 items-start hover:bg-gray-950/20 rounded-xl transition-colors duration-200"
              >
                {/* Dimension */}
                <div className="col-span-1 md:col-span-3">
                  <h3 className="text-sm font-semibold text-white tracking-wide">{item.dimension}</h3>
                </div>

                {/* Fragmented (Before) */}
                <div className="col-span-1 md:col-span-4 flex gap-2 text-xs sm:text-sm text-secondary font-light">
                  <span className="text-red-500 font-semibold shrink-0">✕</span>
                  <span>{item.before}</span>
                </div>

                {/* Coordinated (After) */}
                <div className="col-span-1 md:col-span-5 flex gap-2 text-xs sm:text-sm text-gray-200 font-light">
                  <span className="text-emerald-400 font-semibold shrink-0">✓</span>
                  <span>{item.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Organizations Adopt APOS Grid */}
        <div className="max-w-5xl mx-auto pt-16 border-t border-gray-900/60 space-y-12">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <Badge variant="info">Operational Impact</Badge>
            <h3 className="text-xl font-bold text-white tracking-tight">Why Organizations Adopt APOS</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white tracking-wide">Turnover Resilience</h4>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed font-light">
                Athlete records are permanent. When coaching staff changes, historical physical capacity baselines survive the transition, preventing database records loss.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white tracking-wide">Unified Medical & Coaching Context</h4>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed font-light">
                Wellness check-ins and screening notes live together. Important observation flags are never buried in personal text messages or disconnected docs.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white tracking-wide">Explainable Decisions</h4>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed font-light">
                All daily training volume and recovery adjustments remain documented and explainable months later during high-performance season audits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
