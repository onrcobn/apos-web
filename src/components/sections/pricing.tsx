"use client";

import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { Section } from "../ui/section";

export default function PricingSection() {
  const tiers = [
    {
      name: "Pro",
      price: "$5.90",
      description: "Ideal for individual strength coaches and personal trainers.",
      features: [
        "Up to 15 active athlete twins",
        "Continuous HRV & Sleep metrics mapping",
        "Standard adaptation forecasting",
        "Descriptive decision-support simulator",
        "Standard email support",
      ],
      cta: "Get Started Pro",
      accent: false,
    },
    {
      name: "Elite",
      price: "$9.90",
      description: "Designed for sports academies, universities, and professional clubs.",
      features: [
        "Up to 30 active athlete twins",
        "Continuous HRV & Sleep metrics mapping",
        "Advanced load adaptation forecasting",
        "Fully detailed What-if simulator",
        "Organization-owned data workspaces",
        "Priority support access",
      ],
      cta: "Get Started Elite",
      accent: true,
    },
  ];

  return (
    <Section id="pricing" className="bg-gray-950/20 border-b border-gray-900/60">
      <div className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <Badge variant="info">Pricing & Tiers</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Transparent, Fixed Subscriptions
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Choose the operational volume required by your performance group. All subscriptions are
            billed securely via standard Apple accounts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
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
                  <p className="text-secondary text-xs mt-1 leading-relaxed">{tier.description}</p>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-secondary text-xs font-semibold uppercase tracking-wider">
                    / month
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
                  {tier.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Billed Information */}
        <div className="max-w-2xl mx-auto rounded-lg bg-gray-950/40 border border-gray-900/60 p-6 text-xs text-secondary leading-relaxed space-y-3">
          <p className="font-semibold text-gray-300">Subscription &amp; Ownership Disclosures</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <strong>Apple Subscriptions:</strong> Subscriptions are managed directly under your
              Apple ID. Cancel anytime through Apple Settings.
            </li>
            <li>
              <strong>Refund Information:</strong> Billing and payment processing are subject
              strictly to Apple App Store policies.
            </li>
            <li>
              <strong>Data Ownership:</strong> All athlete profiles, organization structures, and
              diagnostic histories are organization-owned. We maintain no claim of ownership over
              telemetry data.
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
