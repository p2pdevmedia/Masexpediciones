import type { Metadata } from "next";
import type { Expedition } from "@/lib/expeditions";

export const siteUrl = "https://masexpediciones.com";
export const siteName = "Más Expediciones";
export const defaultTitle = "Más Expediciones | Guías de montaña en San Martín de los Andes";
export const defaultDescription =
  "Salidas guiadas de montaña, trekking y expediciones en la cordillera argentina y chilena desde San Martín de los Andes.";
export const defaultImage = "/images/salidas/lanin.jpeg";

const keywords = [
  "Más Expediciones",
  "guias de montaña",
  "San Martín de los Andes",
  "salidas de montaña",
  "trekking Patagonia",
  "Volcán Lanín",
  "Aconcagua",
  "cordillera argentina",
  "cordillera chilena",
];

type SeoMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = defaultImage,
  type = "website",
}: SeoMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "es_AR",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function expeditionMetadata(expedition: Expedition): Metadata {
  return buildMetadata({
    title: `${expedition.title} | ${siteName}`,
    description: expedition.summary,
    path: `/salidas/${expedition.slug}`,
    image: expedition.thumbnail,
    type: "article",
  });
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl("/masexpediciones.svg"),
    description: defaultDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Martín de los Andes",
      addressRegion: "Neuquén",
      addressCountry: "AR",
    },
    areaServed: ["Patagonia", "Argentina", "Chile", "Cordillera de los Andes"],
    knowsAbout: [
      "montañismo",
      "trekking",
      "alta montaña",
      "expediciones guiadas",
      "seguridad en montaña",
    ],
  };
}

export function expeditionJsonLd(expedition: Expedition) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: expedition.title,
    description: expedition.summary,
    url: absoluteUrl(`/salidas/${expedition.slug}`),
    image: absoluteUrl(expedition.thumbnail),
    provider: {
      "@type": "TravelAgency",
      name: siteName,
      url: siteUrl,
    },
    touristType: expedition.tags,
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: expedition.region,
          description: expedition.audience,
        },
      ],
    },
  };
}
