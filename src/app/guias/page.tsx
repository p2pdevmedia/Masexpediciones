import type { Metadata } from "next";
import { guides } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Guías de montaña | Más Expediciones",
  description:
    "Conocé al equipo de guías de Más Expediciones para salidas de montaña en San Martín de los Andes, Patagonia, Argentina y Chile.",
  path: "/guias",
  image: "/images/micaela.jpeg",
});

export default function GuiasPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Equipo de montaña</p>
        <h1>Guías</h1>
        <p>
          Más Expediciones está conformada por dos guías de San Martín de los Andes y uno de Buenos
          Aires: Micaela Insua, Ricardo "El Negro" Calderón y Ezequiel Caporaletti.
        </p>
      </section>

      <section className="guides">
        {guides.map((guide) => (
          <article className="guide-profile" key={guide.name}>
            <img src={guide.image} alt={guide.alt} />
            <div>
              <p className="eyebrow">Equipo de guías</p>
              <h2>{guide.name}</h2>
              <p>{guide.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
