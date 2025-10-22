"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface ProjectImageProps
  extends Omit<ImageProps, "src" | "alt" | "onError"> {
  src: string;
  alt: string;
}

export function ProjectImage({ src, alt, ...props }: ProjectImageProps) {
  const [imgSrc, setImgSrc] = useState(src || "/projects/default.png");

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc("/projects/default.png")}
    />
  );
}
