"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 992);
    const handleScroll = () => setScrolled(window.scrollY > 30);

    checkScreen();
    handleScroll();

    window.addEventListener("resize", checkScreen);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkScreen);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/rooms" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Location", href: "/location" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: isMobile ? "10px" : "18px",
        left: "50%",
        transform: "translateX(-50%)",
        width: isMobile ? "calc(100% - 20px)" : "calc(100% - 80px)",
        maxWidth: "1480px",
        zIndex: 1000,
        borderRadius: isMobile ? "18px" : "999px",
        backgroundColor: scrolled
          ? "rgba(9, 14, 20, 0.88)"
          : "rgba(9, 14, 20, 0.56)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.16)",
        boxShadow: scrolled
          ? "0 18px 55px rgba(0,0,0,0.35)"
          : "0 12px 35px rgba(0,0,0,0.22)",
        boxSizing: "border-box",
        transition: "all 0.35s ease",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: isMobile ? "12px 14px" : "13px 18px 13px 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
          gap: "20px",
        }}
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          style={{
            textDecoration: "none",
            color: "#fff",
            fontSize: isMobile ? "20px" : "28px",
            fontWeight: 800,
            letterSpacing: isMobile ? "1.4px" : "2px",
            whiteSpace: "nowrap",
            textTransform: "uppercase",
            textShadow: "0 2px 18px rgba(0,0,0,0.35)",
          }}
        >
          MARCOPOLO
        </Link>

        {!isMobile && (
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "6px",
              borderRadius: "999px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.92)",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "10px 13px",
                  borderRadius: "999px",
                  whiteSpace: "nowrap",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.color = "#f4d38a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "rgba(255,255,255,0.92)";
                }}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              style={{
                marginLeft: "6px",
                textDecoration: "none",
                color: "#111827",
                background:
                  "linear-gradient(135deg, #f8df9a 0%, #d8ad57 100%)",
                padding: "11px 22px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 900,
                whiteSpace: "nowrap",
                boxShadow: "0 8px 22px rgba(216,173,87,0.35)",
                letterSpacing: "0.3px",
              }}
            >
              BOOK NOW
            </Link>
          </nav>
        )}

        {isMobile && (
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            style={{
              width: "44px",
              height: "44px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#fff",
              fontSize: "26px",
              borderRadius: "14px",
              cursor: "pointer",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <div
          style={{
            margin: "0 10px 10px",
            borderRadius: "16px",
            overflow: "hidden",
            background: "rgba(8, 13, 20, 0.98)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 18px 45px rgba(0,0,0,0.35)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: 600,
                padding: "15px 18px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              margin: "14px",
              textAlign: "center",
              color: "#111827",
              background:
                "linear-gradient(135deg, #f8df9a 0%, #d8ad57 100%)",
              padding: "14px",
              borderRadius: "999px",
              fontWeight: 900,
              textDecoration: "none",
              boxShadow: "0 8px 22px rgba(216,173,87,0.35)",
            }}
          >
            BOOK NOW
          </Link>
        </div>
      )}
    </header>
  );
}