import { ExpeditionCard } from "@/components/ExpeditionCard";
import { expeditions } from "@/lib/expeditions";

export const metadata = {
  title: "Salidas | Más Expediciones",
};

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
