"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "", // honeypot
    startedAt: Date.now(), // time protection
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("Message sent successfully.");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        website: "",
        startedAt: Date.now(),
      });
    } catch (error) {
      setStatus("Message failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f8fafc",
        paddingTop: "110px",
        paddingBottom: "70px",
        paddingLeft: "20px",
        paddingRight: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              color: "#1f4e5f",
              lineHeight: 1.2,
            }}
          >
            Contact Marcopolo Hotel
          </h1>

          <p
            style={{
              marginTop: "16px",
              marginBottom: 0,
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#475569",
            }}
          >
            We are here to help you with your stay in Corfu. Contact us for
            availability, room information, or any questions before your trip.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              padding: "28px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                marginBottom: "20px",
                fontSize: "26px",
                fontWeight: 700,
                color: "#1f2937",
              }}
            >
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
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
                style={inputStyle}
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                required
                maxLength={150}
                style={inputStyle}
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone Number"
                maxLength={50}
                style={inputStyle}
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                required
                maxLength={3000}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
              />

              {/* Honeypot field - real users will not see this */}
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
                style={{
                  backgroundColor: "#f4b942",
                  color: "#1f2937",
                  border: "none",
                  borderRadius: "999px",
                  padding: "14px 22px",
                  fontSize: "15px",
                  fontWeight: 800,
                  cursor: loading ? "not-allowed" : "pointer",
                  alignSelf: "flex-start",
                  boxShadow: "0 6px 18px rgba(244,185,66,0.28)",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </button>

              {status && (
                <p
                  style={{
                    margin: 0,
                    color: status.includes("successfully") ? "#166534" : "#b91c1c",
                    fontWeight: 700,
                  }}
                >
                  {status}
                </p>
              )}
            </form>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "28px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <h2 style={{ marginTop: 0, fontSize: "24px", color: "#1f2937" }}>
                Contact Information
              </h2>

              <div style={{ fontSize: "16px", color: "#475569", lineHeight: "1.7" }}>
                <p>
                  <strong style={{ color: "#1f4e5f" }}>Address:</strong>
                  <br />
                  Corfu, Greece
                </p>
                <p>
                  <strong style={{ color: "#1f4e5f" }}>Phone:</strong>
                  <br />
                  +30 693 904 1035
                </p>
                <p>
                  <strong style={{ color: "#1f4e5f" }}>Email:</strong>
                  <br />
                  office@marcopolohotel.com
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#1f4e5f",
                borderRadius: "20px",
                padding: "28px",
                color: "#ffffff",
              }}
            >
              <h3 style={{ marginTop: 0, fontSize: "24px" }}>
                Need a quick answer?
              </h3>

              <p style={{ lineHeight: "1.8", color: "rgba(255,255,255,0.88)" }}>
                Contact us directly for booking questions, room details, and
                general hotel information.
              </p>

              <a
                href="tel:+306939041035"
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  backgroundColor: "#f4b942",
                  color: "#1f2937",
                  padding: "13px 18px",
                  borderRadius: "999px",
                  fontWeight: 800,
                }}
              >
                CALL US
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};