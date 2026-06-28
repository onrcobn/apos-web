import * as React from "react";
import Link from "next/link";
import { Icons } from "../ui/icons";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-gray-900/80 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2 col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-white font-extrabold text-lg tracking-tight focus-ring rounded-md"
            >
              <Icons.Logo className="w-5 h-5 text-gray-300" />
              <span>APOS</span>
            </Link>
            <p className="text-secondary text-sm leading-relaxed max-w-sm">
              Athletic Performance Optimization System. High performance athletic monitoring,
              workload tracking, and predictive adaptation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 col-span-1">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">Platform</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li>
                <Link href="/#features" className="hover:text-white transition-colors focus-ring rounded">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white transition-colors focus-ring rounded">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors focus-ring rounded">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Contact */}
          <div className="space-y-3 col-span-1">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">Legal & Support</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors focus-ring rounded">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors focus-ring rounded">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/medical-disclaimer"
                  className="hover:text-white transition-colors focus-ring rounded"
                >
                  Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition-colors focus-ring rounded">
                  Support & Help
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-900" />

        {/* Disclaimer & Copyright */}
        <div className="space-y-6 text-xs text-secondary leading-relaxed">
          <div className="p-4 rounded-lg bg-gray-950/60 border border-gray-900">
            <p className="font-semibold text-gray-300 mb-1">Medical Disclaimer</p>
            <p>
              APOS is not a medical device. The tools, algorithms, and telemetry data provided are
              strictly designed for high-performance athletic monitoring, training load tracking, and
              workload management. All recommendations, alerts (including Workload Spikes and
              Neuromuscular Fatigue flags), and scenarios are descriptive decision-support helpers.
              They do not constitute diagnostic medical advice or training prescriptions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500">
            <p>© 2026 APOS. All rights reserved.</p>
            <p className="text-[10px] text-gray-600">Bundle ID: com.athleticsci.APOS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
