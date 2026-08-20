import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rotfflores.github.io/invitacion-cumple-bluey/"),
  title: "¡Mi cumple! | Invitación de Mateo",
  description: "Acompáñanos a celebrar el cumpleaños de Mateo.",
  openGraph: {
    title: "¡Mi cumple! | Invitación de Mateo",
    description: "Acompáñanos a celebrar el cumpleaños de Mateo.",
    url: "https://rotfflores.github.io/invitacion-cumple-bluey/",
    siteName: "Invitación de Mateo",
    locale: "es_MX",
    type: "website",
    images: [{
      url: "/assets/rsvp-card.png?v=2",
      width: 1536,
      height: 1024,
      alt: "Invitación de cumpleaños de Mateo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "¡Mi cumple! | Invitación de Mateo",
    description: "Acompáñanos a celebrar el cumpleaños de Mateo.",
    images: ["/assets/rsvp-card.png?v=2"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={fredoka.variable}>{children}</body></html>;
}
