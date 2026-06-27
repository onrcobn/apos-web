import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://apos.app";
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/support`, lastModified: new Date() },
    { url: `${baseUrl}/privacy`, lastModified: new Date() },
    { url: `${baseUrl}/terms`, lastModified: new Date() },
    { url: `${baseUrl}/medical-disclaimer`, lastModified: new Date() },
  ];
}
