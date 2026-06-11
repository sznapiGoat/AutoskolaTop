"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SafeImage({ className, alt, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn("bg-gray-200", className)}
      />
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
