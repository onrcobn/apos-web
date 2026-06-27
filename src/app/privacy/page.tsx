import * as React from "react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";

export const metadata = {
  title: "Privacy Policy — APOS",
  description:
    "Official privacy policy for the APOS athletic monitoring platform. Bundle ID: com.athleticsci.APOS. Supabase security disclosures and GDPR compliance parameters.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-12">
      <Section>
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Badge variant="info">Legal Compliance</Badge>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="text-secondary text-sm">Effective Date: June 27, 2026</p>
          </div>

          {/* Compliance Medical Alert */}
          <Alert variant="warning" title="Medical Disclosure Statement">
            APOS is not a medical device. The tools, algorithms, and telemetry data provided are
            strictly designed for high-performance athletic monitoring, training load tracking, and
            workload management. All recommendations, alerts (including Workload Spikes and
            Neuromuscular Fatigue flags), and scenarios are descriptive decision-support helpers.
            They do not constitute diagnostic medical advice or training prescriptions.
          </Alert>

          {/* Policy Body */}
          <Card className="border border-gray-900 bg-gray-950/20 p-8 space-y-8 text-sm text-secondary leading-relaxed">
            {/* Section 1: Identifier */}
            <div className="space-y-3">
              <h2 className="text-base font-bold text-white uppercase tracking-wider">
                1. Scope &amp; Identifier
              </h2>
              <p>
                This Privacy Policy applies strictly to the APOS mobile application and ecosystem,
                officially registered with the App Store under Bundle Identifier:{" "}
                <code className="text-blue-400 bg-gray-900 px-1.5 py-0.5 rounded">
                  com.athleticsci.APOS
                </code>
                .
              </p>
            </div>

            {/* Section 2: Data Security & Supabase */}
            <div className="space-y-3">
              <h2 className="text-base font-bold text-white uppercase tracking-wider">
                2. Data Security &amp; Hosting Architecture
              </h2>
              <p>
                All user and organizational information is hosted in a secure database workspace powered
                by **Supabase**. We enforce high-grade security protocols:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>
                  <strong>Encrypted Transport:</strong> All data is securely transmitted in transit
                  using strict HTTPS (TLS) connections.
                </li>
                <li>
                  <strong>Encrypted Storage:</strong> Telemetry logs and structural database segments
                  are encrypted at rest.
                </li>
                <li>
                  <strong>Role-Based Access Control:</strong> Strict database schemas verify
                  organizational authentication states before allowing read or write actions.
                </li>
              </ul>
            </div>

            {/* Section 3: Data Sovereignty */}
            <div className="space-y-3">
              <h2 className="text-base font-bold text-white uppercase tracking-wider">
                3. Advertising &amp; Commercialization Limits
              </h2>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>
                  <strong>No Advertising:</strong> The application does not deploy advertising
                  trackers, analytics brokers, or commercial marketing SDKs.
                </li>
                <li>
                  <strong>No Sale of Data:</strong> APOS never sells, licenses, leases, or shares
                  personal or organizational performance database assets with third parties.
                </li>
                <li>
                  <strong>Organization Owned Data:</strong> All athlete profiles, rosters, and
                  associated metrics remain the sole property of the purchasing athletic organization.
                </li>
              </ul>
            </div>

            {/* Section 4: Apple HealthKit */}
            <div className="space-y-3">
              <h2 className="text-base font-bold text-white uppercase tracking-wider">
                4. Apple Health (HealthKit) Telemetry
              </h2>
              <p>
                The platform retrieves physiological markers (including Heart Rate Variability, Sleep
                duration, and Resting Heart Rate) strictly through Apple Health permissions.
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>
                  <strong>Read-Only access:</strong> The application only reads HealthKit parameters;
                  it never writes or updates physical records in the Apple Health database.
                </li>
                <li>
                  <strong>Revocability:</strong> Athletes can revoke read permissions for any
                  individual parameter at any time through standard iOS Settings.
                </li>
              </ul>
            </div>

            {/* Section 5: GDPR Rights */}
            <div className="space-y-3">
              <h2 className="text-base font-bold text-white uppercase tracking-wider">
                5. GDPR Rights &amp; Regulatory Disclosures
              </h2>
              <p>
                In compliance with the General Data Protection Regulation (GDPR) Articles 15–21,
                athletes and organizational users are provided with specific data sovereignty controls:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>
                  <strong>Right of Access (Article 15):</strong> Request a complete summary of your
                  stored database telemetry at any time.
                </li>
                <li>
                  <strong>Right of Rectification (Article 16):</strong> Correct or update inaccurate
                  wellness baseline information.
                </li>
                <li>
                  <strong>Right of Erasure / Deletion (Article 17):</strong> Execute a permanent
                  deletion command to completely erase your athlete twin and history files.
                </li>
                <li>
                  <strong>Right to Portability (Article 20):</strong> Export your complete performance
                  history in a structured, machine-readable JSON format.
                </li>
                <li>
                  <strong>Right to Withdraw Consent (Article 21):</strong> Revoke data processing
                  approvals or turn off HealthKit imports.
                </li>
              </ul>
              <p className="mt-2 text-xs">
                To execute any of these GDPR rights, coaches or athletes can initiate a direct request from
                their settings panel or contact the organization administrator.
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
