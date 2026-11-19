"use client";

import { useState } from "react";
import { CONTACT_INFO } from "../data/hotel";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
    startedAt: Date.now(),
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "ok" | "err";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus({
        type: "ok",
        text: "Message sent successfully. We will reply shortly.",
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        website: "",
        startedAt: Date.now(),
      });
    } catch {
      setStatus({
        type: "err",
        text: "Message failed. Please try again or call reception directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cap-subpage">
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <div style={{ maxWidth: "760px" }}>
          <div className="eyebrow" style={{ marginBottom: "12px" }}>
            Direct Reception • Gouvia, Corfu
          </div>
          <h1 className="display-lg" style={{ margin: "0 0 14px 0" }}>
            Contact Marcopolo
            <sup style={{ fontSize: "0.45em", color: "var(--sand)" }}>®</sup>
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "16px",
              lineHeight: 1.7,
              color: "var(--sand)",
            }}
          >
            We are here to help with availability, room options, arrivals, or
            any questions before your Corfu holiday.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "24px",
          }}
        >
          <div className="cap-card">
            <h2
              className="display-md"
              style={{ margin: "0 0 20px 0", fontSize: "1.85rem" }}
            >
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                position: "relative",
              }}
            >
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
                required
                maxLength={100}
                className="cap-field"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                required
                maxLength={150}
                className="cap-field"
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone Number (optional)"
                maxLength={50}
                className="cap-field"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                required
                maxLength={3000}
                className="cap-field"
                style={{ resize: "vertical", fontFamily: "inherit" }}
              />

              {/* Honeypot anti-bot field */}
              <input
                name="website"
                value={form.website}
                onChange={handleChange}
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  opacity: 0,
                  height: 0,
                  width: 0,
                  pointerEvents: "none",
                }}
              />

              <button
                type="submit"
                disabled={loading}
                className="cap-pill"
                style={{
                  alignSelf: "flex-start",
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>
                <span className="cap-circle">↗</span>
              </button>

              {status && (
                <p
                  style={{
                    margin: "4px 0 0",
                    padding: "12px 14px",
                    borderRadius: "14px",
                    background:
                      status.type === "ok"
                        ? "rgba(177,166,150,0.16)"
                        : "rgba(220,38,38,0.18)",
                    border: `1px solid ${
                      status.type === "ok"
                        ? "var(--sand-dim)"
                        : "rgba(248,113,113,0.4)"
                    }`,
                    color: "var(--ivory)",
                    fontSize: "14px",
                  }}
                >
                  {status.text}
                </p>
              )}
            </form>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="cap-card">
              <div className="eyebrow" style={{ marginBottom: "10px" }}>
                Contact Information
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  fontSize: "15.5px",
                  color: "var(--sand)",
                }}
              >
                <div>
                  <div style={{ fontSize: "12px", color: "var(--sand-muted)" }}>
                    Address
                  </div>
                  <div style={{ color: "var(--ivory)", marginTop: "3px" }}>
                    {CONTACT_INFO.address}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "12px", color: "var(--sand-muted)" }}>
                    Phone
                  </div>
                  <a
                    href={CONTACT_INFO.phoneHref}
                    style={{
                      color: "var(--ivory)",
                      textDecoration: "none",
                      display: "inline-block",
                      marginTop: "3px",
                    }}
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: "12px", color: "var(--sand-muted)" }}>
                    Email
                  </div>
                  <a
                    href={CONTACT_INFO.emailHref}
                    style={{
                      color: "var(--ivory)",
                      textDecoration: "none",
                      display: "inline-block",
                      marginTop: "3px",
                    }}
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div
              className="cap-card"
              style={{
                background: "#2E2A27",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div className="eyebrow">Quick Assistance</div>
              <h3 style={{ margin: 0, fontSize: "24px", fontWeight: 500 }}>
                Need a quick answer?
              </h3>
              <p
                style={{
                  margin: 0,
                  lineHeight: 1.7,
                  color: "var(--sand)",
                  fontSize: "14.5px",
                }}
              >
                Call our reception directly for booking questions, room details,
                airport transfer tips, and local Corfu guidance.
              </p>
              <div style={{ marginTop: "6px" }}>
                <a href={CONTACT_INFO.phoneHref} className="cap-pill">
                  <span>Call Reception</span>
                  <span className="cap-circle">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
