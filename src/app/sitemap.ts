import type { MetadataRoute } from "next";
import { expeditions } from "@/lib/expeditions";
import { absoluteUrl } from "@/lib/seo";

const lastModified = new Date("2026-05-18");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/salidas"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/guias"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/documentos"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const expeditionRoutes = expeditions.map((expedition) => ({
    url: absoluteUrl(`/salidas/${expedition.slug}`),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...expeditionRoutes];
}
