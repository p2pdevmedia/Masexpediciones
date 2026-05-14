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
    slug: "lanin",
    title: "Volcán Lanín",
    region: "Cordillera argentino-chilena",
    summary:
      "Una de las cumbres más solicitadas por la agencia. La ficha original queda disponible para revisar itinerario, condiciones y equipo.",
    audience: "Salida de montaña con cupos a coordinar según experiencia del grupo.",
    pdf: "/pdfs/lanin.pdf",
    thumbnail: "/images/lanin.pdf.png",
    tags: ["Cumbre", "Volcán", "Ficha PDF"],
  },
  {
    slug: "domuyo",
    title: "Volcán Domuyo",
    region: "4709 msnm",
    summary:
      "Programa de ascenso al Domuyo basado en la ficha entregada por Más Expediciones.",
    audience: "Para montañistas que quieran revisar una propuesta de alta montaña.",
    pdf: "/pdfs/domuyo.pdf",
    thumbnail: "/images/domuyo.pdf.png",
    tags: ["Cumbre", "Altura", "Ficha PDF"],
  },
  {
    slug: "puyehue",
    title: "Volcán Puyehue",
    region: "Cordillera argentino-chilena",
    summary:
      "Salida volcánica con ficha específica para clientes, preparada como página individual de consulta.",
    audience: "Itinerario a revisar desde la ficha antes de reservar.",
    pdf: "/pdfs/puyehue.pdf",
    thumbnail: "/images/puyehue.pdf.png",
    tags: ["Volcán", "Travesía", "Ficha PDF"],
  },
  {
    slug: "mocho-villarrica",
    title: "Tour de volcanes Mocho-Choshuenco y Villarrica",
    region: "Cordillera chilena",
    summary:
      "Tour de volcanes cargado desde la ficha original de Mocho-Choshuenco y Villarrica.",
    audience: "Programa por etapas para evaluar con el equipo de guías.",
    pdf: "/pdfs/mocho-villarrica.pdf",
    thumbnail: "/images/mocho-villarrica.pdf.png",
    tags: ["Volcanes", "Chile", "Ficha PDF"],
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
    title: "San Francisco",
    region: "Cordillera de los Andes",
    summary:
      "Salida documentada en PDF para revisar detalles del programa junto al equipo de Más Expediciones.",
    audience: "Consulta recomendada de ficha antes de definir reserva.",
    pdf: "/pdfs/san-francisco.pdf",
    thumbnail: "/images/san-francisco.pdf.png",
    tags: ["Montaña", "Ficha PDF"],
  },
  {
    slug: "avion-de-los-uruguayos",
    title: "Avión de los Uruguayos",
    region: "Cordillera de los Andes",
    summary:
      "Itinerario cargado desde el PDF provisto para presentar esta salida como página independiente.",
    audience: "Programa especial a coordinar con la agencia.",
    pdf: "/pdfs/avion-de-los-uruguayos.pdf",
    thumbnail: "/images/avion-de-los-uruguayos.pdf.png",
    tags: ["Itinerario", "Ficha PDF"],
  },
];

export const documents = [
  {
    title: "Equipamiento de montaña",
    href: "/pdfs/equipamiento-montana.pdf",
    thumbnail: "/images/equipamiento-montana.pdf.png",
    description: "Documento base para preparar el equipo antes de viajar.",
  },
];

export function getExpedition(slug: string) {
  return expeditions.find((expedition) => expedition.slug === slug);
}
