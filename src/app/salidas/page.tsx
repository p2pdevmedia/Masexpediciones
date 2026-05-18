import type { Metadata } from "next";
import { ExpeditionCard } from "@/components/ExpeditionCard";
import { expeditions } from "@/lib/expeditions";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Salidas de montaña | Más Expediciones",
  description:
    "Programas guiados de trekking, volcanes y alta montaña en Argentina y Chile, con fichas técnicas para preparar cada salida.",
  path: "/salidas",
  image: "/images/salidas/lanin.jpeg",
});

export default function SalidasPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Itinerarios</p>
        <h1>Salidas de montaña</h1>
        <p>
          Explorá nuestras próximas salidas, revisá los detalles de cada programa y elegí la
          experiencia de montaña que mejor se adapta a tu momento.
        </p>
      </section>
      <section className="section section--tight">
        <div className="grid">
          {expeditions.map((expedition) => (
            <ExpeditionCard key={expedition.slug} expedition={expedition} />
          ))}
        </div>
      </section>
    </main>
  );
}
