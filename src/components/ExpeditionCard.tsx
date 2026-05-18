import { ArrowRight, FileText, MessageCircle } from "lucide-react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/contact";
import type { Expedition } from "@/lib/expeditions";

const galleryTransitions: Record<string, string> = {
  "avion-de-los-uruguayos": "expedition-card__media--reveal",
  osorno: "expedition-card__media--slide",
  "puyehue-2-noches": "expedition-card__media--zoom",
  "san-francisco": "expedition-card__media--rise",
};

const galleryIntervalSeconds = 5.5;
const cardImageSizes =
  "(max-width: 640px) calc(100vw - 40px), (max-width: 980px) calc((100vw - 64px - 20px) / 2), 380px";

export function ExpeditionCard({ expedition }: { expedition: Expedition }) {
  const images = expedition.gallery ?? [expedition.thumbnail];
  const hasGallery = images.length > 1;
  const galleryTransition = galleryTransitions[expedition.slug] ?? "expedition-card__media--fade";

  return (
    <article className="expedition-card">
      <Link
        className="expedition-card__main"
        href={`/salidas/${expedition.slug}`}
        aria-label={`Ver ${expedition.title}`}
        prefetch={true}
      >
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
            <Image
              key={image}
              src={image}
              alt={index === 0 ? `Foto de ${expedition.title}` : ""}
              aria-hidden={index > 0}
              fill
              loading="lazy"
              sizes={cardImageSizes}
              style={{ "--gallery-index": index } as CSSProperties}
            />
          ))}
        </div>
        <div className="expedition-card__body">
          <div className="eyebrow">{expedition.region}</div>
          <h3>{expedition.title}</h3>
          <p>{expedition.summary}</p>
          <div className="tag-row" aria-label="Características">
            {expedition.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </Link>
      <div className="card-actions expedition-card__actions">
        <Link className="text-link" href={`/salidas/${expedition.slug}`} prefetch={true}>
          Ver salida <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <a className="icon-link" href={expedition.pdf} download>
          <FileText size={16} aria-hidden="true" />
          PDF
        </a>
        <a
          className="whatsapp-link"
          href={getWhatsAppUrl(expedition.title)}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={16} aria-hidden="true" />
          Quiero subir
        </a>
      </div>
    </article>
  );
}
