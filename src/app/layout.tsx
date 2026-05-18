import type { Metadata } from "next";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Más Expediciones | Guías de montaña",
  description:
    "Agencia de guías de montaña con salidas por la cordillera argentina y chilena.",
  icons: {
    icon: [{ url: "/masexpediciones.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
