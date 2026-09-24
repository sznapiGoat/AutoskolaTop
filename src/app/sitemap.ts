import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/sluzby", priority: 0.9 },
    { path: "/kontakt", priority: 0.8 },
    { path: "/caste-dotazy", priority: 0.7 },
    { path: "/o-nas", priority: 0.6 },
    { path: "/ochrana-osobnich-udaju", priority: 0.2 },
  ];
  const lastModified = new Date();
  return pages.map((p) => ({ url: `${site.url}${p.path}`, lastModified, priority: p.priority }));
}
