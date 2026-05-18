import { Instagram, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, instagramHandle, instagramUrl, whatsappPhoneDisplay } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <img src="/masexpediciones.svg" alt="Más Expediciones" />
        <p>Salidas guiadas de montaña, trekking y expediciones en Argentina y Chile.</p>
      </div>
      <div className="site-footer__contact" aria-label="Contacto">
        <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
          <MessageCircle size={18} aria-hidden="true" />
          {whatsappPhoneDisplay}
        </a>
        <a href={instagramUrl} target="_blank" rel="noreferrer">
          <Instagram size={18} aria-hidden="true" />
          {instagramHandle}
        </a>
      </div>
    </footer>
  );
}
