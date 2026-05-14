import { ArrowRight, Download, MapPin } from "lucide-react";
import Link from "next/link";
import { ExpeditionCard } from "@/components/ExpeditionCard";
import { documents, expeditions } from "@/lib/expeditions";

const featured = expeditions.slice(0, 5);

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Guías de montaña · San Martín de los Andes y Buenos Aires</p>
          <h1>Más Expediciones</h1>
          <p className="hero__lead">
            Salidas guiadas a lo largo de la cordillera argentina y chilena, con programas para
            quienes empiezan y para montañistas con experiencia.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" href="/salidas">
              Ver salidas <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button--ghost" href="/documentos">
              Documentos <Download size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="hero__visual" aria-label="Guía de Más Expediciones">
          <img src="/images/ezequiel.jpeg" alt="Ezequiel Caporaletti, guía de montaña" />
          <div>
            <strong>Ezequiel Caporaletti</strong>
            <span>Guía de cabecera</span>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Cumbres solicitadas</p>
            <h2>Salidas destacadas</h2>
          </div>
          <Link className="text-link" href="/salidas">
            Todas las salidas <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid">
          {featured.map((expedition) => (
            <ExpeditionCard key={expedition.slug} expedition={expedition} />
          ))}
        </div>
      </section>

      <section className="band">
        <div>
          <p className="eyebrow">Equipo</p>
          <h2>Guías de cabecera</h2>
          <p>
            La agencia está conformada por dos guías de San Martín de los Andes y uno de Buenos
            Aires. Los guías de cabecera informados son Ezequiel Caporaletti y Ricardo Calderón.
          </p>
        </div>
        <Link className="button button--dark" href="/guias">
          Ver guías <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Antes de viajar</p>
            <h2>Documentos para clientes</h2>
          </div>
        </div>
        <div className="document-strip">
          {documents.map((document) => (
            <a key={document.href} href={document.href} target="_blank" rel="noreferrer">
              <img src={document.thumbnail} alt="" />
              <span>
                <MapPin size={16} aria-hidden="true" />
                {document.title}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
