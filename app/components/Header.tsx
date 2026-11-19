"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCapsulesUI } from "./CapsulesContext";

export default function Header() {
  const { openReserve } = useCapsulesUI();
  const [clock, setClock] = useState("--:--");

  useEffect(() => {
    const updateClock = () => {
      try {
        setClock(
          new Date().toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Europe/Athens",
          })
        );
      } catch {
        setClock("Corfu");
      }
    };
    updateClock();
    const id = window.setInterval(updateClock, 30000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 3000,
        padding: "14px clamp(12px, 2.4vw, 28px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        pointerEvents: "none",
      }}
    >
      <Link
        href="/"
        style={{
          pointerEvents: "auto",
          textDecoration: "none",
          color: "var(--ivory)",
          fontSize: "18px",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          background: "rgba(29, 27, 25, 0.68)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(244, 239, 231, 0.16)",
          padding: "8px 16px",
          borderRadius: "999px",
        }}
      >
        Marcopolo
        <sup
          style={{
            fontSize: "10px",
            color: "var(--sand)",
            marginLeft: "2px",
          }}
        >
          ®
        </sup>
      </Link>

      <div
        style={{
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          className="hidden sm:flex items-center gap-2 text-xs px-4 py-2 rounded-full"
          style={{
            background: "rgba(29, 27, 25, 0.68)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(244, 239, 231, 0.16)",
            color: "var(--sand)",
          }}
        >
          <span>Corfu, GR</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span
            style={{
              color: "var(--ivory)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {clock}
          </span>
        </div>

        <button
          type="button"
          className="cap-pill"
          onClick={() => openReserve()}
        >
          <span>Reserve</span>
          <span className="cap-circle">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 11L11 3M11 3H4.5M11 3V9.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </header>
  );
}