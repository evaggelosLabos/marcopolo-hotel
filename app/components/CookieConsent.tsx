"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem("marcopolo_cookie_consent");

    if (!savedConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("marcopolo_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("marcopolo_cookie_consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        bottom: "18px",
        transform: "translateX(-50%)",
        width: "calc(100% - 28px)",
        maxWidth: "980px",
        zIndex: 9999,
        background: "rgba(12, 18, 26, 0.96)",
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.14)",
        borderRadius: "22px",
        boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
        padding: "18px",
        boxSizing: "border-box",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <div>
          <p
            style={{
              margin: "0 0 8px",
              color: "#f4d38a",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
            }}
          >
            Cookie Preferences
          </p>

          <h3
            style={{
              margin: "0 0 8px",
              fontSize: "20px",
              lineHeight: 1.2,
            }}
          >
            We use cookies to improve your experience
          </h3>

          <p
            style={{
              margin: 0,
              fontSize: "14px",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            We use essential cookies to make the website work and optional
            cookies to understand how visitors use our website. You can accept
            or reject optional cookies. Read our{" "}
            <Link
              href="/cookies"
              style={{
                color: "#f4d38a",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              style={{
                color: "#f4d38a",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={rejectCookies}
            style={{
              padding: "12px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.22)",
              background: "transparent",
              color: "#fff",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Reject
          </button>

          <button
            onClick={acceptCookies}
            style={{
              padding: "12px 20px",
              borderRadius: "999px",
              border: "none",
              background: "linear-gradient(135deg, #f8df9a, #d8ad57)",
              color: "#111827",
              fontWeight: 900,
              cursor: "pointer",
              boxShadow: "0 10px 24px rgba(216,173,87,0.28)",
            }}
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
}