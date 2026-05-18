import { ArrowLeft, Download, FileText, MessageCircle } from "lucide-react";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWhatsAppUrl } from "@/lib/contact";
import { expeditions, getExpedition } from "@/lib/expeditions";
import { expeditionJsonLd, expeditionMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

const galleryIntervalSeconds = 5.5;
const equipmentPdf = "/pdfs/equipamiento-montana.pdf";
const detailImageSizes = "(max-width: 980px) calc(100vw - 40px), 50vw";

export function generateStaticParams() {
  return expeditions.map((expedition) => ({ slug: expedition.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const expedition = getExpedition(slug);

  if (!expedition) {
    return {};
  }

  return expeditionMetadata(expedition);
}

export default async function ExpeditionPage({ params }: Props) {
  const { slug } = await params;
  const expedition = getExpedition(slug);

  if (!expedition) {
    notFound();
  }

  const images = expedition.gallery ?? [expedition.thumbnail];
  const hasGallery = images.length > 1;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(expeditionJsonLd(expedition)) }}
      />
      <section className="detail-hero">
        <Link className="back-link" href="/salidas" prefetch={true}>
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
              <a className="button button--primary" href={expedition.pdf} download>
                Descargar ficha técnica <Download size={18} aria-hidden="true" />
              </a>
              <a className="button button--ghost" href={equipmentPdf} download>
                Descargar equipamiento <FileText size={18} aria-hidden="true" />
              </a>
              <a
                className="button button--whatsapp"
                href={getWhatsAppUrl(expedition.title)}
                target="_blank"
                rel="noreferrer"
              >
                Quiero subir <MessageCircle size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div
            className={hasGallery ? "detail-gallery detail-gallery--slider" : "detail-gallery"}
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
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes={detailImageSizes}
                style={{ "--gallery-index": index } as CSSProperties}
              />
            ))}
          </div>
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
          <a className="text-link" href={expedition.pdf} download>
            Descargar ficha técnica <Download size={16} aria-hidden="true" />
          </a>
          <a className="text-link" href={equipmentPdf} download>
            Descargar equipamiento <FileText size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
