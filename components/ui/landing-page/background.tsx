"use client";
import mesh from "@/assests/mesh.svg";
import Image from "next/image";

export default function Background() {
  return (
    <Image
      alt="mesh"
      src={mesh}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
      }}
    />
  );
}
