export type Expedition = {
  slug: string;
  title: string;
  region: string;
  summary: string;
  audience: string;
  pdf: string;
  thumbnail: string;
  tags: string[];
};

export const expeditions: Expedition[] = [
  {
    slug: "domuyo",
    title: "Volcán Domuyo",
    region: "4709 msnm",
    summary:
      "Programa completo al Domuyo con base, cumbre, domos y termas según la ficha vigente.",
    audience: "Dificultad informada en ficha: media a alta.",
    pdf: "/pdfs/domuyo.pdf",
    thumbnail: "/images/domuyo.pdf.png",
    tags: ["Programa completo", "Media/alta", "Ficha PDF"],
  },
  {
    slug: "puyehue-osorno",
    title: "Tour Puyehue + Osorno",
    region: "Chile",
    summary:
      "Tour de volcanes por Puyehue y Osorno con programa completo y salida desde San Martín de los Andes.",
    audience: "Dificultad informada en ficha: media / alta.",
    pdf: "/pdfs/puyehue-osorno.pdf",
    thumbnail: "/images/puyehue-osorno.pdf.png",
    tags: ["Tour de volcanes", "Chile", "Media/alta"],
  },
  {
    slug: "mocho-villarrica",
    title: "Tour Mocho-Choshuenco + Villarrica",
    region: "Chile",
    summary:
      "Tour de volcanes en Chile con Mocho-Choshuenco de 2224 msnm y Villarrica de 2870 msnm.",
    audience: "Dificultad informada en ficha: media.",
    pdf: "/pdfs/mocho-villarrica.pdf",
    thumbnail: "/images/mocho-villarrica.pdf.png",
    tags: ["Tour de volcanes", "Chile", "Media"],
  },
  {
    slug: "osorno",
    title: "Volcán Osorno",
    region: "Chile · 2652 msnm",
    summary:
      "Programa 3 días / 2 noches al Volcán Osorno, con cumbre de 2652 msnm según ficha vigente.",
    audience: "Dificultad informada en ficha: media/alta.",
    pdf: "/pdfs/osorno.pdf",
    thumbnail: "/images/osorno.pdf.png",
    tags: ["3D / 2N", "Chile", "Media/alta"],
  },
  {
    slug: "puyehue-2-noches",
    title: "Volcán Puyehue · 2 noches",
    region: "Chile · 2240 msnm",
    summary:
      "Programa al Volcán Puyehue con dos noches, traslado, trekking y jornada de cumbre.",
    audience: "Dificultad informada en ficha: baja a media.",
    pdf: "/pdfs/puyehue-2-noches.pdf",
    thumbnail: "/images/puyehue-2-noches.pdf.png",
    tags: ["2 noches", "Chile", "Baja/media"],
  },
  {
    slug: "aconcagua",
    title: "Aconcagua",
    region: "Cordillera de los Andes",
    summary:
      "Propuesta de expedición a Aconcagua con ficha completa disponible para clientes.",
    audience: "Orientada a montañistas que buscan una expedición mayor.",
    pdf: "/pdfs/aconcagua.pdf",
    thumbnail: "/images/aconcagua.pdf.png",
    tags: ["Expedición", "Alta montaña", "Ficha PDF"],
  },
  {
    slug: "san-francisco",
    title: "Nevado de San Francisco",
    region: "6018 msnm",
    summary:
      "Expedición al Nevado de San Francisco con campamento, comidas, seguros, asistencia y traslados según ficha.",
    audience: "Salida de alta montaña para revisar en detalle con la ficha vigente.",
    pdf: "/pdfs/san-francisco.pdf",
    thumbnail: "/images/san-francisco.pdf.png",
    tags: ["6018 msnm", "Alta montaña", "Ficha PDF"],
  },
  {
    slug: "avion-de-los-uruguayos",
    title: "Avión de los Uruguayos",
    region: "3600 msnm",
    summary:
      "Trekking homenaje con alojamiento incluido y jornadas de caminata en la cordillera.",
    audience: "Programa especial con campamento y desniveles informados en ficha.",
    pdf: "/pdfs/avion-de-los-uruguayos.pdf",
    thumbnail: "/images/avion-de-los-uruguayos.pdf.png",
    tags: ["Trekking", "3600 msnm", "Ficha PDF"],
  },
];

export const documents: Array<{
  title: string;
  href: string;
  thumbnail: string;
  description: string;
}> = [];

export function getExpedition(slug: string) {
  return expeditions.find((expedition) => expedition.slug === slug);
}
