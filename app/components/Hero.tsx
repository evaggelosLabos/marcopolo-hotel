"use client";

import { useEffect, useState } from "react";
import HeroSideInfo from "./HeroSideInfo";
import HeroSideHighlights from "./HeroSideHighlights";

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#f8f5f0",
      }}
    >
      {/* IMAGE */}
      <img
        src="/hotel/photo_079.jpg"
        alt="Hotel"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: isDesktop ? "contain" : "cover",
          objectPosition: "center",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* LEFT PANEL */}
      <HeroSideHighlights />

      {/* RIGHT PANEL */}
      <HeroSideInfo />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: 300 }}>
          Welcome to
        </h1>

        <h2 style={{ fontSize: "4rem", fontWeight: 600 }}>
          Marcopolo Hotel
        </h2>

        <p style={{ marginTop: "20px", fontSize: "1.2rem" }}>
          Experience comfort, elegance, and unforgettable moments.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "14px 30px",
            backgroundColor: "#c9a96e",
            border: "none",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Check Availability
        </button>
      </div>
    </section>
  );
}