import Hero from "@/components/sections/hero";
import WorkflowSection from "@/components/sections/workflow";
import DigitalTwinSection from "@/components/sections/digital-twin";
import ForecastEngineSection from "@/components/sections/forecast-engine";
import ReliabilitySection from "@/components/sections/reliability";
import FeaturesSection from "@/components/sections/features";
import PricingSection from "@/components/sections/pricing";
import FAQSection from "@/components/sections/faq";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "APOS",
    operatingSystem: "iOS",
    applicationCategory: "SportsApplication",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "250.00",
      highPrice: "450.00",
      priceValued: "yearly",
    },
    description: "APOS organizes daily performance operations and coordinates athlete records.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <WorkflowSection />
      <DigitalTwinSection />
      <ForecastEngineSection />
      <ReliabilitySection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
    </>
  );
}
