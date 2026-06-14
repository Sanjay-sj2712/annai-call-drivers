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

export const metadata = {
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} ${playfairDisplay.variable}`}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
