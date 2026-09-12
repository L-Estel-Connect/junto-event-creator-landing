import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Junto Event Creator · Madrid",
  description:
    "Event Creator freelance en Madrid. Organiza eventos sociales con Junto: remuneración por evento, con comisiones e incentivos según resultados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} font-sans antialiased bg-white text-junto-ink`}>
        {children}
      </body>
    </html>
  );
}
