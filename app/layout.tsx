import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pollution With Solution | Clean Earth, Green Future",
  description:
    "Pollution With Solution spreads awareness about pollution control, sustainable living, and eco-friendly technologies in West Bengal and beyond.",
  keywords:
    "pollution control, WBPCB, environment, sustainable development, pollution license, West Bengal, eco-friendly, awareness, clean earth, green future, water pollution, air pollution",
  authors: [{ name: "Pollution With Solution Team" }],
  openGraph: {
    title: "Pollution With Solution | Clean Earth, Green Future",
    description:
      "Join Pollution With Solution to build a cleaner, greener, and healthier planet.",
    url: "https://pollutionwithsolution.in",
    siteName: "Pollution With Solution",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://pollutionwithsolution.in"),
  alternates: {
    canonical: "https://pollutionwithsolution.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="google-site-verification=7c8lN5XGZKs2rQ_Xqop77R7q9hf7ZKAgidwQXZPD7fQ"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
