import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Keep links to the old Webnode site working after the switch.
  async redirects() {
    return [
      { source: "/conabizime", destination: "/sluzby", permanent: true },
      { source: "/dobrocinna-akce", destination: "/pomahame", permanent: true },
      { source: "/faq", destination: "/caste-dotazy", permanent: true },
    ];
  },
};

export default nextConfig;
