"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function GalleryClient({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((selectedIndex + 1) % images.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <>
      <div className="cap-subpage">
        <section style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "18px",
              marginBottom: "36px",
            }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: "10px" }}>
                Full Archive ({images.length} Photos)
              </div>
              <h1 className="display-lg" style={{ margin: 0 }}>
                Inside Marcopolo
                <sup style={{ fontSize: "0.45em", color: "var(--sand)" }}>®</sup>
              </h1>
            </div>
            <p
              style={{
                margin: 0,
                maxWidth: "420px",
                fontSize: "15px",
                color: "var(--sand)",
                lineHeight: 1.65,
              }}
            >
              Explore rooms, sunlit balconies, the outdoor pool courtyard,
              restaurant lounge, and Gouvia surroundings. Click any photo to
              expand.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "16px",
            }}
          >
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setSelectedIndex(index)}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "250px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid var(--sand-dim)",
                  backgroundColor: "var(--bg-surface)",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <Image
                  src={src}
                  alt={`Marcopolo Hotel Corfu photo ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </button>
            ))}
          </div>
        </section>
      </div>

      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(18, 16, 15, 0.94)",
            backdropFilter: "blur(16px)",
            zIndex: 6000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1180px",
              height: "86vh",
            }}
          >
            <Image
              src={images[selectedIndex]}
              alt={`Marcopolo Hotel photo ${selectedIndex + 1}`}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
            />

            <button
              type="button"
              aria-label="Close lightbox"
              onClick={() => setSelectedIndex(null)}
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                width: "42px",
                height: "42px",
                borderRadius: "999px",
                backgroundColor: "rgba(29,27,25,0.84)",
                border: "1px solid var(--sand-dim)",
                color: "var(--ivory)",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            <button
              type="button"
              aria-label="Previous photo"
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex - 1 + images.length) % images.length
                )
              }
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "46px",
                height: "46px",
                borderRadius: "999px",
                backgroundColor: "rgba(29,27,25,0.8)",
                border: "1px solid var(--sand-dim)",
                color: "var(--ivory)",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              ‹
            </button>

            <button
              type="button"
              aria-label="Next photo"
              onClick={() =>
                setSelectedIndex((selectedIndex + 1) % images.length)
              }
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "46px",
                height: "46px",
                borderRadius: "999px",
                backgroundColor: "rgba(29,27,25,0.8)",
                border: "1px solid var(--sand-dim)",
                color: "var(--ivory)",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              ›
            </button>

            <div
              style={{
                position: "absolute",
                bottom: "12px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(29,27,25,0.84)",
                border: "1px solid var(--sand-dim)",
                padding: "7px 16px",
                borderRadius: "999px",
                fontSize: "13px",
              }}
            >
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}