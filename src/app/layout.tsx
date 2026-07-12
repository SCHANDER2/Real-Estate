import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Choudhary Property | Buy Sell Rent Properties",
  description: "Trusted real-estate solutions for buying, selling and renting residential and commercial properties.",
  openGraph: { title: "Choudhary Property", description: "Your trusted partner for buying, selling and renting properties.", type: "website" }
};
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Choudhary Property",
  description: "Trusted real-estate solutions for buying, selling and renting residential and commercial properties.",
  telephone: "+917665074030",
  address: { "@type": "PostalAddress", streetAddress: "Near SBI Bank, Dabri", addressLocality: "Bhadra", addressRegion: "Rajasthan", addressCountry: "IN" },
  areaServed: "Bhadra, Rajasthan"
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} /></body></html>; }
