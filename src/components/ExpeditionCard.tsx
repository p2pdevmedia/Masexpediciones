import { ArrowRight, FileText } from "lucide-react";
import type { CSSProperties } from "react";
import Link from "next/link";
import type { Expedition } from "@/lib/expeditions";

export function ExpeditionCard({ expedition }: { expedition: Expedition }) {
  const images = expedition.gallery ?? [expedition.thumbnail];
  const hasGallery = images.length > 1;

  return (
    <article className="expedition-card">
      <Link href={`/salidas/${expedition.slug}`} aria-label={`Ver ${expedition.title}`}>
        <div
          className={
            hasGallery
              ? "expedition-card__media expedition-card__media--gallery"
              : "expedition-card__media"
          }
          style={{ "--gallery-duration": `${images.length * 4}s` } as CSSProperties}
        >
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={index === 0 ? `Foto de ${expedition.title}` : ""}
              aria-hidden={index > 0}
              style={{ "--gallery-index": index } as CSSProperties}
            />
          ))}
        </div>
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
