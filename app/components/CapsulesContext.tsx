"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CONTACT_INFO, MENU_SECTIONS } from "../data/hotel";

type CapsulesUIContextValue = {
  openReserve: (roomName?: string) => void;
  closeReserve: () => void;
  menuOpen: boolean;
  toggleMenu: (force?: boolean) => void;
  dockLabel: string;
  setDockLabel: (label: string) => void;
};

const CapsulesUIContext = createContext<CapsulesUIContextValue | null>(null);

export function useCapsulesUI() {
  const ctx = useContext(CapsulesUIContext);
  if (!ctx) {
    throw new Error("useCapsulesUI must be used inside CapsulesProvider");
  }
  return ctx;
}

const ROUTE_LABELS: Record<string, string> = {
  "/": "01 Welcome",
  "/rooms": "Rooms",
  "/location": "Location",
  "/about": "About",
  "/why-marcopolo": "Why Marcopolo®",
  "/gallery": "Gallery",
  "/contact": "Contact",
  "/privacy": "Privacy Policy",
  "/cookies": "Cookie Policy",
};

export function CapsulesProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<"Double Room" | "Triple Room">(
    "Double Room"
  );
  const [dockLabel, setDockLabel] = useState(ROUTE_LABELS[pathname] || "Marcopolo®");
  const [previewIdx, setPreviewIdx] = useState(0);

  // Reserve drawer form state (wired directly to POST /api/contact)
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [website, setWebsite] = useState("");
  const startedAtRef = useRef<number>(Date.now());
  const [submitting, setSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{
    type: "ok" | "err";
    text: string;
  } | null>(null);

  useEffect(() => {
    setDockLabel(ROUTE_LABELS[pathname] || "Marcopolo®");
    setMenuOpen(false);
  }, [pathname]);

  const openReserve = useCallback((roomName?: string) => {
    if (roomName === "Triple Room" || roomName === "Double Room") {
      setSelectedRoom(roomName);
    }
    setStatusMsg(null);
    startedAtRef.current = Date.now();
    setReserveOpen(true);
    setMenuOpen(false);
  }, []);

  const closeReserve = useCallback(() => {
    setReserveOpen(false);
  }, []);

  const toggleMenu = useCallback((force?: boolean) => {
    setMenuOpen((prev) => (typeof force === "boolean" ? force : !prev));
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setReserveOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleMenuNavigate = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      const targetId = href.slice(1);
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    router.push(href);
  };

  const handleReserveSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg(null);

    const detailsLines = [
      `Reservation Enquiry — ${selectedRoom}`,
      checkIn ? `Check-in: ${checkIn}` : null,
      checkOut ? `Check-out: ${checkOut}` : null,
      "",
      notes,
    ]
      .filter((line) => line !== null)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: detailsLines,
          website,
          startedAt: startedAtRef.current,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unable to send enquiry.");
      }
      setStatusMsg({
        type: "ok",
        text: `Thank you! Your ${selectedRoom} enquiry was sent to ${CONTACT_INFO.email}.`,
      });
      setName("");
      setEmail("");
      setPhone("");
      setCheckIn("");
      setCheckOut("");
      setNotes("");
      setWebsite("");
      startedAtRef.current = Date.now();
    } catch {
      setStatusMsg({
        type: "err",
        text: `Could not send right now. Please try again or email ${CONTACT_INFO.email} directly.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const activePreview = MENU_SECTIONS[previewIdx] || MENU_SECTIONS[0];

  return (
    <CapsulesUIContext.Provider
      value={{
        openReserve,
        closeReserve,
        menuOpen,
        toggleMenu,
        dockLabel,
        setDockLabel,
      }}
    >
      {children}

      {/* SIGNATURE BOTTOM-CENTER FLOATING MENU DOCK */}
      <div className="floating-menu-dock" role="navigation" aria-label="Quick menu">
        <span className="dock-section-label">{dockLabel}</span>
        <button
          type="button"
          className="cap-pill"
          onClick={() => toggleMenu()}
          style={{ padding: "5px 5px 5px 18px" }}
          aria-expanded={menuOpen}
          aria-controls="capsules-menu-overlay"
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className="cap-circle">
            {menuOpen ? (
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 3L11 11M11 3L3 11"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2.5 5.5H13.5M2.5 10.5H13.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </span>
        </button>
      </div>

      {/* FULLSCREEN EDITORIAL MENU OVERLAY */}
      <div
        id="capsules-menu-overlay"
        className={`cap-menu-overlay ${menuOpen ? "open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) toggleMenu(false);
        }}
        aria-hidden={!menuOpen}
      >
        <div className="menu-shell">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              overflowY: "auto",
              paddingRight: "6px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <span className="eyebrow">Navigate Marcopolo®</span>
              <button
                type="button"
                onClick={() => toggleMenu(false)}
                style={{
                  background: "none",
                  border: "1px solid var(--sand-dim)",
                  color: "var(--ivory)",
                  borderRadius: "999px",
                  padding: "6px 14px",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                Close ✕
              </button>
            </div>

            <nav style={{ display: "flex", flexDirection: "column" }}>
              {MENU_SECTIONS.map((item, idx) => (
                <button
                  key={item.num}
                  type="button"
                  className="menu-link-item"
                  style={{ background: "none", borderLeft: "none", borderRight: "none", borderTop: "none", textAlign: "left", width: "100%" }}
                  onMouseEnter={() => setPreviewIdx(idx)}
                  onFocus={() => setPreviewIdx(idx)}
                  onClick={() => handleMenuNavigate(item.href)}
                >
                  <span className="menu-title">{item.label}</span>
                  <span
                    style={{
                      fontSize: "12.5px",
                      color: "var(--sand-muted)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    ({item.num})
                  </span>
                </button>
              ))}
            </nav>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
                paddingTop: "14px",
                marginTop: "10px",
                fontSize: "12.5px",
                color: "var(--sand)",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <Link
                  href="/rooms"
                  onClick={() => toggleMenu(false)}
                  style={{ color: "var(--sand)", textDecoration: "none" }}
                >
                  All Rooms
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => toggleMenu(false)}
                  style={{ color: "var(--sand)", textDecoration: "none" }}
                >
                  Full Gallery
                </Link>
                <Link
                  href="/location"
                  onClick={() => toggleMenu(false)}
                  style={{ color: "var(--sand)", textDecoration: "none" }}
                >
                  Map
                </Link>
              </div>
              <button
                type="button"
                className="cap-pill"
                onClick={() => openReserve()}
              >
                <span>Reserve</span>
                <span className="cap-circle">↗</span>
              </button>
            </div>
          </div>

          <div
            className="menu-visual-col"
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div
              style={{
                flex: 1,
                borderRadius: "22px",
                overflow: "hidden",
                border: "1px solid var(--sand-dim)",
                position: "relative",
                background: "var(--bg-base)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activePreview.img}
                alt={activePreview.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "opacity 0.25s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 55%, rgba(24,23,23,0.84) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  right: "20px",
                  fontSize: "15.5px",
                  lineHeight: 1.45,
                  color: "var(--ivory)",
                }}
              >
                {activePreview.caption}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SLIDE-OVER RESERVE DRAWER (LIVE /api/contact INTEGRATION) */}
      <div
        className={`drawer-backdrop ${reserveOpen ? "open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeReserve();
        }}
        aria-hidden={!reserveOpen}
      >
        <div className="drawer-panel">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div className="eyebrow">Direct Enquiry</div>
              <h3
                style={{
                  margin: "6px 0 0",
                  fontSize: "26px",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                }}
              >
                Reserve Your Stay
              </h3>
            </div>
            <button
              type="button"
              onClick={closeReserve}
              aria-label="Close reservation drawer"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "999px",
                border: "1px solid var(--sand-dim)",
                background: "var(--bg-base)",
                color: "var(--ivory)",
                cursor: "pointer",
                fontSize: "17px",
              }}
            >
              ✕
            </button>
          </div>

          <p
            style={{
              margin: 0,
              fontSize: "14px",
              lineHeight: 1.6,
              color: "var(--sand)",
            }}
          >
            Send us your preferred dates and room choice — we reply directly via{" "}
            <span style={{ color: "var(--ivory)" }}>{CONTACT_INFO.email}</span>.
          </p>

          <form
            onSubmit={handleReserveSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              {(["Double Room", "Triple Room"] as const).map((room) => {
                const active = selectedRoom === room;
                return (
                  <button
                    key={room}
                    type="button"
                    onClick={() => setSelectedRoom(room)}
                    style={{
                      padding: "11px",
                      borderRadius: "14px",
                      border: `1px solid ${
                        active ? "var(--ivory)" : "var(--sand-dim)"
                      }`,
                      background: active
                        ? "rgba(244,239,231,0.12)"
                        : "var(--bg-base)",
                      color: active ? "var(--ivory)" : "var(--sand)",
                      fontSize: "13px",
                      fontWeight: active ? 600 : 500,
                      cursor: "pointer",
                    }}
                  >
                    {room}
                  </button>
                );
              })}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <div>
                <label
                  style={{
                    fontSize: "11.5px",
                    color: "var(--sand)",
                    display: "block",
                    marginBottom: "5px",
                  }}
                >
                  Check-in
                </label>
                <input
                  type="date"
                  className="cap-field"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              <div>
                <label
                  style={{
                    fontSize: "11.5px",
                    color: "var(--sand)",
                    display: "block",
                    marginBottom: "5px",
                  }}
                >
                  Check-out
                </label>
                <input
                  type="date"
                  className="cap-field"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
            </div>

            <input
              type="text"
              className="cap-field"
              placeholder="Full Name"
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="cap-field"
              placeholder="Email Address"
              required
              maxLength={150}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              className="cap-field"
              placeholder="Phone Number (optional)"
              maxLength={50}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              className="cap-field"
              rows={3}
              placeholder="Tell us about your stay or questions..."
              required
              maxLength={2500}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{ resize: "vertical", fontFamily: "inherit" }}
            />

            {/* Honeypot anti-bot field matching /api/contact */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
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
              disabled={submitting}
              className="cap-pill"
              style={{
                justifyContent: "space-between",
                width: "100%",
                padding: "7px 7px 7px 22px",
                opacity: submitting ? 0.7 : 1,
                cursor: submitting ? "not-allowed" : "pointer",
              }}
            >
              <span>
                {submitting ? "Sending Enquiry..." : "Send Reservation Enquiry"}
              </span>
              <span className="cap-circle">↗</span>
            </button>

            {statusMsg && (
              <div
                style={{
                  padding: "13px",
                  borderRadius: "14px",
                  background:
                    statusMsg.type === "ok"
                      ? "rgba(177,166,150,0.16)"
                      : "rgba(220,38,38,0.18)",
                  border: `1px solid ${
                    statusMsg.type === "ok"
                      ? "var(--sand-dim)"
                      : "rgba(248,113,113,0.4)"
                  }`,
                  fontSize: "13.5px",
                  color: "var(--ivory)",
                  lineHeight: 1.5,
                }}
              >
                {statusMsg.text}
              </div>
            )}
          </form>

          <div
            style={{
              marginTop: "auto",
              paddingTop: "14px",
              borderTop: "1px solid var(--sand-dim)",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "13px",
              color: "var(--sand)",
            }}
          >
            <span>Direct Reception</span>
            <a
              href={CONTACT_INFO.phoneHref}
              style={{
                color: "var(--ivory)",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </CapsulesUIContext.Provider>
  );
}
