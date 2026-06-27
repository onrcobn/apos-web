import Hero from "@/components/sections/hero";
import DigitalTwinSection from "@/components/sections/digital-twin";
import ForecastEngineSection from "@/components/sections/forecast-engine";
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
      lowPrice: "5.90",
      highPrice: "9.90",
      priceValued: "monthly",
    },
    description: "Athletic Performance Optimization System for coaches and elite athletes.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <DigitalTwinSection />
      <ForecastEngineSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
    </>
  );
}
