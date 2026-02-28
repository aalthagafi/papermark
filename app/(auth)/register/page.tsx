import { Metadata } from "next";

import RegisterClient from "./page-client";

const data = {
  description: "Signup to Khaznah",
  title: "Sign up | Khaznah",
  url: "/register",
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

export default function RegisterPage() {
  return <RegisterClient />;
}
