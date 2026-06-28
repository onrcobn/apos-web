"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { Badge } from "../ui/badge";

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden py-24 px-6 border-b border-gray-900/60">
      {/* Premium Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-800 bg-gray-950/40 text-gray-400 text-[10px] font-semibold tracking-wider uppercase"
        >
          <Icons.Logo className="w-3.5 h-3.5" />
          <span>Performance Operations System</span>
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-3xl mx-auto">
            The Operating System for Performance Departments
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base sm:text-lg text-secondary max-w-3xl mx-auto leading-relaxed font-light"
          >
            Modern sports organizations face increasing operational complexity—more athletes, more support staff, and more daily observations. Yet many departments still rely on disconnected spreadsheets and fragmented messaging threads. APOS coordinates all physical logs, wellness status data, and coaching views into one operational source of truth.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <a href="#digital-twin" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full">
              Explore the Twin
            </Button>
          </a>
          <a href="#pricing" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full">
              View Licensing
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
