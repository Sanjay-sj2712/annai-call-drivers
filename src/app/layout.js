import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://annaicalldrivers.com';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: "ANNAI CALL DRIVERS | Pinnacle of Professional Driving",
  description: "Trusted by film productions, luxury hotels, and elite events, Annai Call Drivers delivers bespoke driving solutions with precision, discretion, and professionalism where reputation matters most.",
  keywords: [
    "annai call drivers",
    "call drivers chennai",
    "professional drivers chennai",
    "best call drivers in chennai",
    "hire driver in chennai",
    "temporary drivers chennai",
    "outstation call drivers chennai",
    "local call drivers chennai",
    "valet parking service chennai",
    "corporate driver service chennai",
    "luxury car drivers chennai",
    "reliable call drivers chennai",
    "chennai driver agency",
    "24/7 call drivers chennai",
    "hourly driver service chennai",
    "monthly driver service chennai",
    "event driver service chennai",
    "chauffeur service chennai",
    "safe drivers chennai",
    "annai drivers chennai",
    "Call drivers",
    "Chennai call drivers",
    "Car drivers",
    "Cab drivers"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ANNAI CALL DRIVERS | Pinnacle of Professional Driving",
    description: "Trusted by film productions, luxury hotels, and elite events, Annai Call Drivers delivers bespoke driving solutions with precision, discretion, and professionalism where reputation matters most.",
    url: baseUrl,
    siteName: "Annai Call Drivers",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Annai Call Drivers - Pinnacle of Professional Driving",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANNAI CALL DRIVERS | Pinnacle of Professional Driving",
    description: "Trusted by film productions, luxury hotels, and elite events, Annai Call Drivers delivers bespoke driving solutions with precision, discretion, and professionalism where reputation matters most.",
    images: ["/banner.png"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ANNAI CALL DRIVERS",
    "image": `${baseUrl}/banner.png`,
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "telephone": "+919444482386",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "description": "Trusted by film productions, luxury hotels, and elite events, Annai Call Drivers delivers bespoke driving solutions with precision, discretion, and professionalism in Chennai.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${playfairDisplay.variable}`}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
