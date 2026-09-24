import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/sluzby", priority: 0.9 },
    { path: "/cenik", priority: 0.9 },
    { path: "/kontakt", priority: 0.8 },
    { path: "/jak-to-probiha", priority: 0.7 },
    { path: "/caste-dotazy", priority: 0.7 },
    { path: "/o-nas", priority: 0.6 },
    { path: "/pomahame", priority: 0.6 },
    { path: "/ochrana-osobnich-udaju", priority: 0.2 },
    ...services.map((s) => ({ path: `/sluzby/${s.slug}`, priority: 0.8 })),
  ];
  const lastModified = new Date();
  return pages.map((p) => ({ url: `${site.url}${p.path}`, lastModified, priority: p.priority }));
}
