import type { Metadata } from "next";
import { Nunito, DynaPuff } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
  variable: "--font-nunito",
});

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dynapuff",
});

export const metadata: Metadata = {
  title: "Dišpet - Sportske aktivnosti za djecu",
  description: "Dišpet organizira sportske aktivnosti i zabavu za djecu. Pridružite se našim programima!",
  manifest: "/manifest.json",
  themeColor: "#e83e70",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr" className={`${nunito.variable} ${dynaPuff.variable}`}>
      <head>
        <link rel="icon" href="/dispet-logo-symbol.png" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  );
}
