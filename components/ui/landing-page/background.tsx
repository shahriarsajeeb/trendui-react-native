"use client";
import Image from "next/image";
import mesh from "../../../public/mesh.svg";

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
