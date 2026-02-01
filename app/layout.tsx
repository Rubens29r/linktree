import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import config from "@/data/config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${config.profile.name} | Mes Liens`,
  description: config.profile.bio || `Retrouvez tous les liens de ${config.profile.name}`,
  openGraph: {
    title: `${config.profile.name} | Mes Liens`,
    description: config.profile.bio || `Retrouvez tous les liens de ${config.profile.name}`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${config.profile.name} | Mes Liens`,
    description: config.profile.bio || `Retrouvez tous les liens de ${config.profile.name}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
