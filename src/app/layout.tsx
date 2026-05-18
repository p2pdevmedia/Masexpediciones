import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { buildMetadata, defaultTitle, organizationJsonLd, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata({
    title: defaultTitle,
    description:
      "Salidas guiadas de montaña, trekking y expediciones en la cordillera argentina y chilena desde San Martín de los Andes.",
  }),
  applicationName: "Más Expediciones",
  authors: [{ name: "Más Expediciones", url: siteUrl }],
  creator: "Más Expediciones",
  publisher: "Más Expediciones",
  formatDetection: {
    telephone: false,
  },
  verification: {
    google: "TkULGeXulb0ULW7sn-KFM4kdZNg1I_Q2SIgU-fXuB4Q",
    yandex: "10a1a461d60f2374",
  },
  icons: {
    icon: [{ url: "/masexpediciones.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
