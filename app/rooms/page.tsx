"use client";

import { useState } from "react";
import { CONTACT_INFO, ROOM_PILLS, ROOMS, RoomDetail } from "../data/hotel";
import { useCapsulesUI } from "../components/CapsulesContext";

export default function RoomsPage() {
  const { openReserve } = useCapsulesUI();
  const [selectedRoom, setSelectedRoom] = useState<RoomDetail | null>(null);

  return (
    <div className="cap-subpage">
      <div
        style={{
          maxWidth: "1260px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            alignItems: "end",
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: "12px" }}>
              Accommodation • Gouvia, Corfu
            </div>
            <h1 className="display-lg" style={{ margin: 0 }}>
              Our Rooms
              <sup style={{ fontSize: "0.45em", color: "var(--sand)" }}>®</sup>
            </h1>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p
              style={{
                margin: 0,
                fontSize: "15.5px",
                lineHeight: 1.68,
                color: "var(--sand)",
              }}
            >
              Comfortable, bright room options designed for a restful stay in
              Corfu, with practical 17 m² layouts, private balconies, and all
              holiday essentials.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {ROOM_PILLS.map((pill) => (
                <span
                  key={pill}
                  style={{
                    padding: "7px 14px",
                    borderRadius: "999px",
                    border: "1px solid var(--sand-dim)",
                    background: "var(--bg-surface)",
                    fontSize: "12.5px",
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {ROOMS.map((room) => (
            <article
              key={room.id}
              className="cap-card"
              style={{
                padding: 0,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative", height: "280px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={room.image}
                  alt={room.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    padding: "6px 13px",
                    borderRadius: "999px",
                    background: "rgba(29,27,25,0.78)",
                    border: "1px solid rgba(244,239,231,0.22)",
                    fontSize: "11.5px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {room.badge}
                </span>
              </div>

              <div
                style={{
                  padding: "26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  flex: 1,
                }}
              >
                <div>
                  <h2
                    className="display-md"
                    style={{ margin: "0 0 10px 0", fontSize: "1.9rem" }}
                  >
                    {room.title}
                    <sup style={{ fontSize: "0.48em", color: "var(--sand)" }}>
                      ®
                    </sup>
                  </h2>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14.5px",
                      lineHeight: 1.68,
                      color: "var(--sand)",
                    }}
                  >
                    {room.summary}
                  </p>
                </div>

                <div>
                  {room.specs.slice(0, 4).map(([k, v]) => (
                    <div
                      key={k}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "9px 0",
                        borderBottom: "1px solid rgba(177,166,150,0.14)",
                        fontSize: "13.5px",
                      }}
                    >
                      <span style={{ color: "var(--sand)" }}>{k}</span>
                      <span style={{ color: "var(--ivory)", fontWeight: 500 }}>
                        {v}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    marginTop: "auto",
                    paddingTop: "8px",
                  }}
                >
                  <button
                    type="button"
                    className="cap-pill-ghost"
                    onClick={() => setSelectedRoom(room)}
                  >
                    <span>Full Specs +</span>
                  </button>
                  <button
                    type="button"
                    className="cap-pill"
                    onClick={() => openReserve(room.reserveLabel)}
                  >
                    <span>Reserve</span>
                    <span className="cap-circle">↗</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="cap-card"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div style={{ maxWidth: "640px" }}>
            <div className="eyebrow" style={{ marginBottom: "8px" }}>
              Personal Assistance
            </div>
            <h2 className="display-md" style={{ margin: "0 0 8px 0" }}>
              Need help choosing the right room?
            </h2>
            <p
              style={{
                margin: 0,
                color: "var(--sand)",
                fontSize: "15px",
                lineHeight: 1.65,
              }}
            >
              Contact our reception directly for availability, dates, and
              tailored recommendations for couples, friends, or families.
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href={CONTACT_INFO.phoneHref} className="cap-pill-ghost">
              {CONTACT_INFO.phone}
            </a>
            <button
              type="button"
              className="cap-pill"
              onClick={() => openReserve()}
            >
              <span>Request Booking</span>
              <span className="cap-circle">↗</span>
            </button>
          </div>
        </div>
      </div>

      {/* SLIDE-OVER ROOM DETAILS DRAWER */}
      <div
        className={`drawer-backdrop ${selectedRoom ? "open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedRoom(null);
        }}
        aria-hidden={!selectedRoom}
      >
        <div className="drawer-panel">
          {selectedRoom && (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div>
                  <div className="eyebrow">Details ({selectedRoom.title}®)</div>
                  <h3
                    style={{
                      margin: "6px 0 0",
                      fontSize: "26px",
                      fontWeight: 500,
                    }}
                  >
                    {selectedRoom.title}®
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedRoom(null)}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "999px",
                    border: "1px solid var(--sand-dim)",
                    background: "var(--bg-base)",
                    color: "var(--ivory)",
                    cursor: "pointer",
                  }}
                >
                  ✕
                </button>
              </div>

              <div
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  height: "210px",
                  border: "1px solid var(--sand-dim)",
                  flexShrink: 0,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div>
                {selectedRoom.specs.map(([k, v]) => (
                  <div
                    key={k}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px 0",
                      borderBottom: "1px solid rgba(177,166,150,0.16)",
                      fontSize: "14px",
                    }}
                  >
                    <span style={{ color: "var(--sand)" }}>{k}</span>
                    <span style={{ color: "var(--ivory)", fontWeight: 500 }}>
                      {v}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <div className="eyebrow" style={{ marginBottom: "10px" }}>
                  All Amenities
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {selectedRoom.amenities.map((a) => (
                    <span
                      key={a}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "999px",
                        background: "var(--bg-base)",
                        border: "1px solid rgba(177,166,150,0.2)",
                        fontSize: "12px",
                      }}
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="cap-pill"
                style={{
                  marginTop: "auto",
                  width: "100%",
                  justifyContent: "space-between",
                }}
                onClick={() => {
                  const label = selectedRoom.reserveLabel;
                  setSelectedRoom(null);
                  openReserve(label);
                }}
              >
                <span>Ready to reserve?</span>
                <span className="cap-circle">↗</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}