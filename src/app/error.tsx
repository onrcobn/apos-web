"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 py-12">
      <div className="max-w-md space-y-6">
        <span className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
          Error 500
        </span>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">System Exception</h1>
        <p className="text-secondary text-sm leading-relaxed">
          An unexpected physiological telemetry exception occurred. Our performance logs have
          registered the anomaly.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Button variant="primary" onClick={() => reset()}>
            Retry Session
          </Button>
          <Link href="/">
            <Button variant="outline">Return Home</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
