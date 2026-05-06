import fs from "fs";
import path from "path";
import GalleryClient from "./GalleryClient";

export default function GalleryPage() {
  const hotelDir = path.join(process.cwd(), "public", "hotel");

  const images = fs
    .readdirSync(hotelDir)
    .filter((file) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(file)
    )
    .map((file) => `/hotel/${file}`);

  return <GalleryClient images={images} />;
}