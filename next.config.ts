import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Keep links to the old Webnode site working after the switch.
  async redirects() {
    return [
      { source: "/conabizime", destination: "/sluzby", permanent: true },
      { source: "/dobrocinna-akce", destination: "/o-nas#pomahame", permanent: true },
      { source: "/faq", destination: "/caste-dotazy", permanent: true },
      // pages merged in the v2 restructure
      { source: "/cenik", destination: "/sluzby#cenik", permanent: true },
      { source: "/jak-to-probiha", destination: "/sluzby#prubeh", permanent: true },
      { source: "/pomahame", destination: "/o-nas#pomahame", permanent: true },
      { source: "/sluzby/:slug", destination: "/sluzby#:slug", permanent: true },
    ];
  },
};

export default nextConfig;
