"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 py-12">
      <div className="max-w-md space-y-6">
        <span className="text-xs font-bold text-blue-500 uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
          Error 404
        </span>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">Page Not Found</h1>
        <p className="text-secondary text-sm leading-relaxed">
          The requested dashboard or legal resource was not found. Check the URL parameters or
          return to the main adaptation platform.
        </p>
        <div className="pt-2">
          <Link href="/">
            <Button variant="primary">Return Home</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
