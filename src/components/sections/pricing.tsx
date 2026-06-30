"use client";

import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { Section } from "../ui/section";

export default function PricingSection() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      description: "For individual athletes self-monitoring capacity.",
      features: [
        "1 active athlete maximum",
        "Local data storage only",
        "Basic morning check-ins",
        "No shared coaching workspaces",
        "Standard community support",
      ],
      cta: "Use Free Mode",
      accent: false,
    },
    {
      name: "Starter",
      price: "$100",
      description: "Essential tools for small teams or individual coaches.",
      features: [
        "Up to 5 active athletes",
        "Biometric status mapping",
        "Basic morning check-ins",
        "Shared coaching workspaces",
        "Standard email support",
      ],
      cta: "Get Started Starter",
      accent: false,
    },
    {
      name: "Pro",
      price: "$250",
      description: "Ideal for individual strength coaches and personal trainers.",
      features: [
        "Up to 15 active athletes",
        "Biometric status mapping",
        "Workload adaptation forecasting",
        "Microcycle simulation tools",
        "Standard email support",
      ],
      cta: "Get Started Pro",
      accent: false,
    },
    {
      name: "Elite",
      price: "$450",
      description: "Designed for sports academies, universities, and professional clubs.",
      features: [
        "Up to 30 active athletes",
        "Biometric status mapping",
        "Workload adaptation forecasting",
        "Microcycle simulation tools",
        "Organization-owned workspaces",
        "Priority support access",
      ],
      cta: "Get Started Elite",
      accent: true,
    },
    {
      name: "Team",
      price: "$650",
      description: "Ultimate capacity for larger athletic departments and teams.",
      features: [
        "Up to 50 active athletes",
        "Biometric status mapping",
        "Workload adaptation forecasting",
        "Microcycle simulation tools",
        "Dedicated priority support",
        "Custom workflow options",
      ],
      cta: "Get Started Team",
      accent: false,
    },
  ];

  return (
    <Section id="pricing" className="bg-gray-950/20 border-b border-gray-900/60 py-28">
      <div className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <Badge variant="info">Pricing & Licensing</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Simple Annual Licensing
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed font-light">
            Licenses are billed annually. Pricing tiers reflect organizational scale and active athlete volume constraints, rather than arbitrary feature restrictions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto items-stretch">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col justify-between border relative h-full ${
                tier.accent
                  ? "border-blue-500/50 bg-gray-950/80"
                  : "border-gray-900/80 bg-gray-950/20"
              }`}
            >
              {tier.accent && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <Badge variant="info">Most Popular</Badge>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide">{tier.name}</h3>
                  <p className="text-secondary text-xs mt-1 leading-relaxed font-light">{tier.description}</p>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-secondary text-xs font-semibold uppercase tracking-wider">
                    / year
                  </span>
                </div>

                <div className="h-px bg-gray-900" />

                <ul className="space-y-3 text-xs sm:text-sm text-secondary">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <Icons.Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 space-y-4">
                <Button variant={tier.accent ? "primary" : "outline"} className="w-full">
                  {tier.name === "Free" ? "Select Free License" : `Select ${tier.name} License`}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Billed Information */}
        <div className="max-w-3xl mx-auto rounded-xl bg-gray-950/40 border border-gray-900 p-8 text-xs text-secondary leading-relaxed space-y-4">
          <p className="font-semibold text-gray-300 text-sm">Predictable Volume Licensing</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-light">
            <div className="space-y-1">
              <strong className="text-white font-medium">Transaction Safety</strong>
              <p>All subscription lifecycles are processed securely through standard Apple ID agreements. Cancel or adjust allocations instantly inside iOS Settings.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-white font-medium">Sovereignty Rights</strong>
              <p>Organizations retain complete ownership of all historical metrics and logs. APOS maintains no proprietary claims over athlete diagnostic data.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-white font-medium">Compliance Architecture</strong>
              <p>Supports native GDPR data erasure and export requests. Perform full JSON schema exports directly from the settings panel.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
