"use client";

import Image from "next/image";
import { useState } from "react";

export default function GalleryClient({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <main
        style={{
          width: "100%",
          backgroundColor: "#f8fafc",
          paddingTop: "110px",
          paddingBottom: "80px",
          paddingLeft: "20px",
          paddingRight: "20px",
          boxSizing: "border-box",
          minHeight: "100vh",
        }}
      >
        <section style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(34px, 5vw, 54px)",
                fontWeight: 800,
                color: "#1f4e5f",
              }}
            >
              Gallery
            </h1>

            <p
              style={{
                marginTop: "14px",
                fontSize: "17px",
                color: "#64748b",
                lineHeight: 1.7,
              }}
            >
              Discover moments from Marcopolo Hotel in Corfu.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
            }}
          >
            {images.map((src, index) => (
              <div
                key={src}
                onClick={() => setSelectedIndex(index)}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "260px",
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
                  backgroundColor: "#e5e7eb",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.88)",
            zIndex: 9999,
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
              maxWidth: "1200px",
              height: "90vh",
            }}
          >
            <Image
              src={images[selectedIndex]}
              alt="Expanded gallery image"
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
            />

            <button
              onClick={() => setSelectedIndex(null)}
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "#ffffff",
                border: "none",
                borderRadius: "999px",
                width: "44px",
                height: "44px",
                fontSize: "20px",
                fontWeight: 700,
                cursor: "pointer",
                zIndex: 10000,
              }}
            >
              ✕
            </button>

            <button
              onClick={() =>
                setSelectedIndex(
                  selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
                )
              }
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.6)",
                color: "#fff",
                border: "none",
                width: "52px",
                height: "52px",
                borderRadius: "999px",
                fontSize: "30px",
                cursor: "pointer",
                zIndex: 10000,
              }}
            >
              ‹
            </button>

            <button
              onClick={() =>
                setSelectedIndex(
                  selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
                )
              }
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.6)",
                color: "#fff",
                border: "none",
                width: "52px",
                height: "52px",
                borderRadius: "999px",
                fontSize: "30px",
                cursor: "pointer",
                zIndex: 10000,
              }}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}