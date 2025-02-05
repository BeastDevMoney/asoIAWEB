import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "AIA",
  description: "Página oficial de la Asociación de Estudiantes de Inteligencia Artificial de la Universidad Rey Juan Carlos (URJC)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
