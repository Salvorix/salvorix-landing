import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://salvorix.id"),
  title: {
    default: "Salvorix — Mining compliance ERP for Indonesian operators",
    template: "%s · Salvorix",
  },
  description:
    "Track inventory, production tonnage, recovery, and HR certifications. Generate Minerba-ready reports from one place. Built for mine sites, not boardrooms.",
  applicationName: "Salvorix",
  keywords: [
    "mining ERP",
    "Minerba reporting",
    "Indonesian mining compliance",
    "production tonnage tracking",
    "K3 certifications",
    "stock opname",
  ],
  authors: [{ name: "Salvorix" }],
  openGraph: {
    type: "website",
    title: "Salvorix — Mining compliance ERP",
    description:
      "From pit face to Minerba submission. One ERP for inventory, production, HR, and compliance.",
    siteName: "Salvorix",
  },
  twitter: { card: "summary_large_image", title: "Salvorix" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#080704" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body className="min-h-[100dvh] antialiased">
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
