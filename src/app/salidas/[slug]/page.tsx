import { ArrowLeft, Download, FileText } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { expeditions, getExpedition } from "@/lib/expeditions";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return expeditions.map((expedition) => ({ slug: expedition.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const expedition = getExpedition(slug);

  if (!expedition) {
    return {};
  }

  return {
    title: `${expedition.title} | Más Expediciones`,
    description: expedition.summary,
  };
}

export default async function ExpeditionPage({ params }: Props) {
  const { slug } = await params;
  const expedition = getExpedition(slug);

  if (!expedition) {
    notFound();
  }

  return (
    <main>
      <section className="detail-hero">
        <Link className="back-link" href="/salidas">
          <ArrowLeft size={16} aria-hidden="true" />
          Salidas
        </Link>
        <div className="detail-hero__grid">
          <div>
            <p className="eyebrow">{expedition.region}</p>
            <h1>{expedition.title}</h1>
            <p>{expedition.summary}</p>
            <div className="tag-row">
              {expedition.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="hero__actions">
              <a className="button button--primary" href={expedition.pdf} target="_blank" rel="noreferrer">
                Descargar ficha <Download size={18} aria-hidden="true" />
              </a>
              <Link className="button button--ghost" href="/documentos">
                Equipamiento <FileText size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <img src={expedition.thumbnail} alt={`Primera página de la ficha ${expedition.title}`} />
        </div>
      </section>

      <section className="section two-column">
        <div>
          <p className="eyebrow">Para quién</p>
          <h2>{expedition.audience}</h2>
        </div>
        <div className="plain-panel">
          <h3>Información disponible</h3>
          <p>
            Esta página usa el material entregado para ordenar la consulta. Los datos finos de
            itinerario, requisitos, logística y equipo se mantienen en la ficha PDF original.
          </p>
          <a className="text-link" href={expedition.pdf} target="_blank" rel="noreferrer">
            Abrir ficha PDF <Download size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
