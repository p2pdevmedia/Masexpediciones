import { Download } from "lucide-react";
import { documents, expeditions } from "@/lib/expeditions";

export const metadata = {
  title: "Documentos | Más Expediciones",
};

export default function DocumentosPage() {
  const expeditionDocs = expeditions.map((expedition) => ({
    title: expedition.title,
    href: expedition.pdf,
    thumbnail: expedition.thumbnail,
    description: expedition.summary,
  }));

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Fichas y preparación</p>
        <h1>Documentos para clientes</h1>
        <p>
          PDFs importantes para revisar antes de confirmar una salida.
        </p>
      </section>

      <section className="section section--tight">
        <div className="document-grid">
          {[...documents, ...expeditionDocs].map((document) => (
            <a className="document-card" key={document.href} href={document.href} target="_blank" rel="noreferrer">
              <img src={document.thumbnail} alt="" />
              <div>
                <h2>{document.title}</h2>
                <p>{document.description}</p>
                <span>
                  Descargar <Download size={16} aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
