"use client";

import Link from "next/link";
import { CONTACT_INFO } from "../data/hotel";
import { useCapsulesUI } from "./CapsulesContext";

export default function Footer() {
  const { openReserve } = useCapsulesUI();

  return (
    <footer
      style={{
        padding: "52px clamp(16px, 4vw, 52px) 112px",
        borderTop: "1px solid var(--sand-dim)",
        background: "var(--bg-surface-soft)",
        color: "var(--ivory)",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "32px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "26px",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              marginBottom: "12px",
            }}
          >
            Marcopolo
            <sup style={{ fontSize: "12px", color: "var(--sand)" }}>®</sup>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              lineHeight: 1.7,
              color: "var(--sand)",
              maxWidth: "280px",
            }}
          >
            Comfortable and welcoming accommodation in Gouvia, Corfu — just
            minutes from the beach and local attractions.
          </p>
        </div>

        <div>
          <div className="eyebrow" style={{ marginBottom: "12px" }}>
            Explore
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "9px",
              fontSize: "14.5px",
            }}
          >
            <Link
              href="/"
              style={{ color: "var(--ivory)", textDecoration: "none" }}
            >
              Home
            </Link>
            <Link
              href="/rooms"
              style={{ color: "var(--sand)", textDecoration: "none" }}
            >
              Rooms
            </Link>
            <Link
              href="/gallery"
              style={{ color: "var(--sand)", textDecoration: "none" }}
            >
              Gallery
            </Link>
            <Link
              href="/location"
              style={{ color: "var(--sand)", textDecoration: "none" }}
            >
              Location
            </Link>
            <Link
              href="/about"
              style={{ color: "var(--sand)", textDecoration: "none" }}
            >
              About
            </Link>
            <Link
              href="/contact"
              style={{ color: "var(--sand)", textDecoration: "none" }}
            >
              Contact
            </Link>
          </div>
        </div>

        <div>
          <div className="eyebrow" style={{ marginBottom: "12px" }}>
            Contact
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "9px",
              fontSize: "14.5px",
              color: "var(--sand)",
            }}
          >
            <span>{CONTACT_INFO.address}</span>
            <a
              href={CONTACT_INFO.phoneHref}
              style={{ color: "var(--ivory)", textDecoration: "none" }}
            >
              {CONTACT_INFO.phone}
            </a>
            <a
              href={CONTACT_INFO.emailHref}
              style={{ color: "var(--ivory)", textDecoration: "none" }}
            >
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        <div>
          <div className="eyebrow" style={{ marginBottom: "12px" }}>
            Booking &amp; Legal
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "9px",
              fontSize: "14.5px",
            }}
          >
            <button
              type="button"
              onClick={() => openReserve()}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "var(--ivory)",
                textAlign: "left",
                cursor: "pointer",
                fontSize: "14.5px",
              }}
            >
              Request Reservation ↗
            </button>
            <Link
              href="/privacy"
              style={{ color: "var(--sand)", textDecoration: "none" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              style={{ color: "var(--sand)", textDecoration: "none" }}
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1300px",
          margin: "36px auto 0",
          paddingTop: "18px",
          borderTop: "1px solid rgba(177,166,150,0.16)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "12px",
          fontSize: "12.5px",
          color: "var(--sand-muted)",
        }}
      >
        <span>
          © {new Date().getFullYear()} Marcopolo Hotel Corfu. All rights
          reserved.
        </span>
        <span>Gouvia • Corfu Island • Greece</span>
      </div>
    </footer>
  );
}
