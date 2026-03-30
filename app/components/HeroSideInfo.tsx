"use client";

import { useEffect, useState } from "react";

export default function HeroSideInfo() {
  const [timeString, setTimeString] = useState("");
  const [showDesktop, setShowDesktop] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTimeString(formatted);
    };

    const checkScreen = () => {
      setShowDesktop(window.innerWidth >= 1200);
    };

    updateClock();
    checkScreen();

    const interval = setInterval(updateClock, 30000);
    window.addEventListener("resize", checkScreen);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  if (!showDesktop) return null;

  return (
    <div
      style={{
        position: "absolute",
        right: "-1%",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 4,
        width: "240px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.75)",
          borderRadius: "18px",
          padding: "25px",
          boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          color: "#1f1f1f",
        }}
      >
        <div style={{ marginBottom: "18px" }}>
          <p
            style={{
              margin: 0,
              fontSize: "0.82rem",
              color: "#777",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            Weather
          </p>
          <p
            style={{
              margin: "6px 0 0 0",
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "#222",
            }}
          >
            ☀ 24°C
          </p>
        </div>

        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(0,0,0,0.08)",
            margin: "14px 0",
          }}
        />

        <div style={{ marginBottom: "0" }}>
          <p
            style={{
              margin: 0,
              fontSize: "0.82rem",
              color: "#777",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            Local Time
          </p>
          <p
            style={{
              margin: "6px 0 0 0",
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "#222",
            }}
          >
            {timeString}
          </p>
        </div>
      </div>
    </div>
  );
}