"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth <= 992);
    };

    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/rooms" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Location", href: "/location" },
    { label: "Contact", href: "/contact" },
  ];

  const linkStyle: React.CSSProperties = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 500,
    letterSpacing: "0.5px",
    transition: "all 0.3s ease",
    padding: "8px 10px",
    borderRadius: "8px",
    display: "inline-block",
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: scrolled
          ? "rgba(10, 20, 30, 0.92)"
          : "rgba(10, 20, 30, 0.45)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: isMobile ? "14px 16px" : "16px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#fff",
            fontSize: isMobile ? "24px" : "28px",
            fontWeight: 700,
            letterSpacing: "1px",
            whiteSpace: "nowrap",
          }}
        >
          MARCOPOLO
        </Link>

        {!isMobile ? (
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={linkStyle}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.12)";
                  e.currentTarget.style.color = "#f4d38a";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              style={{
                marginLeft: "8px",
                textDecoration: "none",
                color: "#0f1720",
                backgroundColor: "#f4d38a",
                padding: "10px 16px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              BOOK NOW
            </Link>
          </nav>
        ) : (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.22)",
              color: "#fff",
              fontSize: "22px",
              borderRadius: "10px",
              padding: "6px 12px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <div
          style={{
            backgroundColor: "rgba(10, 20, 30, 0.98)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "10px 16px 18px 16px",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "15px",
                  padding: "12px 10px",
                }}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none",
                textAlign: "center",
                color: "#0f1720",
                backgroundColor: "#f4d38a",
                padding: "12px 14px",
                borderRadius: "999px",
                fontWeight: 700,
              }}
            >
              BOOK NOW
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}