"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const savedConsent = localStorage.getItem("marcopolo_cookie_consent");
      if (!savedConsent) {
        setShowBanner(true);
      }
    }, 0);
    return () => window.clearTimeout(id);
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
      className="cookie-banner"
      style={{
        position: "fixed",
        left: "50%",
        bottom: "82px",
        transform: "translateX(-50%)",
        width: "calc(100% - 28px)",
        maxWidth: "820px",
        zIndex: 4400,
        background: "rgba(36, 33, 31, 0.96)",
        color: "var(--ivory)",
        border: "1px solid var(--sand-dim)",
        borderRadius: "22px",
        boxShadow: "0 20px 52px rgba(0,0,0,0.45)",
        padding: "18px 22px",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <div style={{ flex: "1 1 360px" }}>
          <div className="eyebrow" style={{ marginBottom: "6px" }}>
            Cookie Preferences
          </div>
          <p
            style={{
              margin: 0,
              fontSize: "13.5px",
              lineHeight: 1.6,
              color: "var(--sand)",
            }}
          >
            We use essential cookies to keep the website running and optional
            analytics cookies to improve your experience. Read our{" "}
            <Link
              href="/cookies"
              style={{
                color: "var(--ivory)",
                textDecoration: "underline",
              }}
            >
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              style={{
                color: "var(--ivory)",
                textDecoration: "underline",
              }}
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={rejectCookies}
            className="cap-pill-ghost"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={acceptCookies}
            className="cap-pill"
            style={{ padding: "8px 18px" }}
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
}