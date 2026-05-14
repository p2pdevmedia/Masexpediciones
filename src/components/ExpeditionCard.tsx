import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import type { Expedition } from "@/lib/expeditions";

export function ExpeditionCard({ expedition }: { expedition: Expedition }) {
  return (
    <article className="expedition-card">
      <Link href={`/salidas/${expedition.slug}`} aria-label={`Ver ${expedition.title}`}>
        <img src={expedition.thumbnail} alt={`Ficha de ${expedition.title}`} />
      </Link>
      <div className="expedition-card__body">
        <div className="eyebrow">{expedition.region}</div>
        <h3>{expedition.title}</h3>
        <p>{expedition.summary}</p>
        <div className="tag-row" aria-label="Características">
          {expedition.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="card-actions">
          <Link className="text-link" href={`/salidas/${expedition.slug}`}>
            Ver salida <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a className="icon-link" href={expedition.pdf} target="_blank" rel="noreferrer">
            <FileText size={16} aria-hidden="true" />
            PDF
          </a>
        </div>
      </div>
    </article>
  );
}
