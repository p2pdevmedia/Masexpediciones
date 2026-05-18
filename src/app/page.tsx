import { ArrowRight, Download } from "lucide-react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExpeditionCard } from "@/components/ExpeditionCard";
import { expeditions } from "@/lib/expeditions";
import { guides } from "@/lib/guides";

const featured = expeditions;
const heroImageSizes = "(max-width: 980px) calc(100vw - 40px), 50vw";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Guías de montaña · San Martín de los Andes</p>
          <h1>Más Expediciones</h1>
          <p className="hero__lead">
            Salidas guiadas a lo largo de la cordillera argentina y chilena, con programas para
            quienes empiezan y para montañistas con experiencia.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" href="/salidas" prefetch={true}>
              Ver salidas <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button--ghost" href="/documentos" prefetch={true}>
              Documentos <Download size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="hero__visual hero-slider" aria-label="Equipo de guías de Más Expediciones">
          {guides.map((guide, index) => (
            <figure
              className="hero-slider__slide"
              key={guide.name}
              style={{ "--slide-index": index } as CSSProperties}
            >
              <Image
                src={guide.image}
                alt={guide.alt}
                fill
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : undefined}
                loading={index === 0 ? "eager" : "lazy"}
                sizes={heroImageSizes}
              />
              <figcaption>
                <strong>{guide.name}</strong>
                <span>Equipo de guías</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section section--tight">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Cumbres solicitadas</p>
            <h2>Salidas destacadas</h2>
          </div>
          <Link className="text-link" href="/salidas" prefetch={true}>
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
          <h2>Equipo de guías</h2>
          <p>
            La agencia está conformada por dos guías de San Martín de los Andes y uno de Buenos
            Aires: Micaela Insua, Ricardo "El Negro" Calderón y Ezequiel Caporaletti.
          </p>
        </div>
        <Link className="button button--dark" href="/guias" prefetch={true}>
          Ver guías <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
