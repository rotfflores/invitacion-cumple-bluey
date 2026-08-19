import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" });

export const metadata: Metadata = {
  title: "¡Mi cumple! | Invitación",
  description: "Una invitación digital para celebrar un cumpleaños muy especial.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={fredoka.variable}>{children}</body></html>;
}
