import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://choudharyproperty.in";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/properties", "/contact", ...properties.map(p => `/properties/${p.id}`)].map(url => ({ url: `${baseUrl}${url}`, lastModified: new Date(), changeFrequency: "weekly", priority: url === "" ? 1 : .7 })); }
