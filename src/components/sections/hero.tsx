"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20 px-6 border-b border-gray-900/60">
      {/* Premium Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold tracking-widest uppercase"
        >
          <Icons.Twin className="w-3.5 h-3.5" />
          <span>Next-Generation Athletic Intelligence</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] sm:leading-none"
        >
          Optimize Athletic Adaptation. <br />
          <span className="gradient-text-blue">Pre-empt Fatigue.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          APOS is the decision-support platform for strength coaches, sport scientists, and elite
          performance teams. Build athlete digital twins, simulate workloads, and optimize
          readiness.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a href="#pricing" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full">
              View Pricing Tiers
            </Button>
          </a>
          <a href="#features" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full">
              Explore Features
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
