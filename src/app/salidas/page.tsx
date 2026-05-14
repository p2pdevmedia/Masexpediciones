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
          Cada excursión tiene su propia página y la ficha PDF original para consultar detalles sin
          perder la fuente.
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
