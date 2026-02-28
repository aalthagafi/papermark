import { Metadata } from "next";
import { Inter } from "next/font/google";

import PlausibleProvider from "next-plausible";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const data = {
  description:
    "Khaznah is a Saudi-hosted, PDPL-compliant virtual data room and document sharing platform. Share sensitive documents securely within Saudi Arabia.",
  title: "Khaznah | خزنة - Secure Saudi Document Sharing",
  url: "/",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://app.kaznah.com"),
  title: data.title,
  description: data.description,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    siteName: "Khaznah",
    images: [
      {
        url: "/_static/meta-image.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: data.title,
    description: data.description,
    creator: "@kaznahcom",
    images: ["/_static/meta-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider
          domain="app.kaznah.com"
          enabled={process.env.NEXT_PUBLIC_VERCEL_ENV === "production"}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
