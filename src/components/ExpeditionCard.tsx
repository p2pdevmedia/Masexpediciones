"use client";

import { ArrowRight, FileText, X } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import type { Expedition } from "@/lib/expeditions";

const galleryTransitions: Record<string, string> = {
  "avion-de-los-uruguayos": "expedition-card__media--reveal",
  osorno: "expedition-card__media--slide",
  "puyehue-2-noches": "expedition-card__media--zoom",
  "san-francisco": "expedition-card__media--rise",
};

const galleryIntervalSeconds = 5.5;

export function ExpeditionCard({ expedition }: { expedition: Expedition }) {
  const images = expedition.gallery ?? [expedition.thumbnail];
  const hasGallery = images.length > 1;
  const galleryTransition = galleryTransitions[expedition.slug] ?? "expedition-card__media--fade";
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  useEffect(() => {
    if (!isPdfOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPdfOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isPdfOpen]);

  return (
    <article className="expedition-card">
      <Link href={`/salidas/${expedition.slug}`} aria-label={`Ver ${expedition.title}`} prefetch={true}>
        <div
          className={
            hasGallery
              ? `expedition-card__media expedition-card__media--gallery ${galleryTransition}`
              : "expedition-card__media"
          }
          style={
            {
              "--gallery-duration": `${images.length * galleryIntervalSeconds}s`,
              "--gallery-interval": `${galleryIntervalSeconds}s`,
            } as CSSProperties
          }
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
          <Link className="text-link" href={`/salidas/${expedition.slug}`} prefetch={true}>
            Ver salida <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <button className="icon-link" type="button" onClick={() => setIsPdfOpen(true)}>
            <FileText size={16} aria-hidden="true" />
            PDF
          </button>
        </div>
      </div>
      {isPdfOpen ? (
        <div className="pdf-modal" role="presentation" onClick={() => setIsPdfOpen(false)}>
          <div
            aria-label={`Ficha PDF de ${expedition.title}`}
            aria-modal="true"
            className="pdf-modal__dialog"
            role="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pdf-modal__header">
              <div>
                <p className="eyebrow">Ficha PDF</p>
                <h2>{expedition.title}</h2>
              </div>
              <button
                aria-label="Cerrar ficha PDF"
                className="pdf-modal__close"
                type="button"
                onClick={() => setIsPdfOpen(false)}
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <iframe src={expedition.pdf} title={`Ficha PDF de ${expedition.title}`} />
          </div>
        </div>
      ) : null}
    </article>
  );
}
