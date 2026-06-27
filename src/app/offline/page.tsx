import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Offline — APOS",
  description: "Connectivity lost. Reconnecting to telemetry database...",
};

export default function OfflinePage() {
  return (
    <main className="min-h-screen pt-12">
      <Section>
        <div className="max-w-md mx-auto text-center space-y-6">
          <Badge variant="warning">Connection Offline</Badge>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Reconnecting...</h1>
          <p className="text-secondary text-sm leading-relaxed">
            APOS was unable to synchronize logs with the Supabase database. Verify your Wi-Fi or
            cellular parameters to resume telemetry calculations.
          </p>
        </div>
      </Section>
    </main>
  );
}
