import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "APOS — Athletic Performance Optimization System",
  description:
    "The official platform for elite athletic monitoring, workload management, and adaptation forecasting. Empowering coaches, sport scientists, and elite athletes.",
  metadataBase: new URL("https://apos.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "APOS — Athletic Performance Optimization System",
    description:
      "The official platform for elite athletic monitoring, workload management, and adaptation forecasting.",
    url: "https://apos.app",
    siteName: "APOS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APOS — Athletic Performance Optimization System",
    description:
      "The official platform for elite athletic monitoring, workload management, and adaptation forecasting.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
