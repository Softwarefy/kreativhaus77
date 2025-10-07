import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kreativ Haus 77 - Parceiro de Negócios",
  description: "Não entregamos postzinho bonito, entregamos aumento de faturamento e mais vendas. Somos um parceiro de negócios, não apenas uma agência de marketing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">{children}</body>
    </html>
  );
}
