import { guides } from "@/lib/guides";

export const metadata = {
  title: "Guías | Más Expediciones",
};

export default function GuiasPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Equipo de montaña</p>
        <h1>Guías</h1>
        <p>
          Más Expediciones está conformada por dos guías de San Martín de los Andes y uno de Buenos
          Aires: Micaela, Ricardo "El Negro" Calderón y Ezequiel Caporaletti.
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
