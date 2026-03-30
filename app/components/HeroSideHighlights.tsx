"use client";

export default function HeroSideHighlights() {
  return (
    <div
      style={{
        position: "absolute",
       left: "-1%",
top: "50%",
transform: "translateY(-40%)",
zIndex: 4,
width: "240px",
      }}
    >
      <div
        style={{
         backgroundColor: "rgba(255,255,255,0.75)",
borderRadius: "18px",
padding: "25px",
boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
backdropFilter: "blur(10px)",
WebkitBackdropFilter: "blur(10px)",
color: "#1f1f1f",
        }}
      >
        <div style={{ marginBottom: "18px" }}>
          <p
            style={{
              margin: 0,
              fontSize: "0.82rem",
              color: "#777",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            Why Stay Here
          </p>
          <p
            style={{
              margin: "8px 0 0 0",
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#222",
              lineHeight: 1.4,
            }}
          >
            Comfort and convenience in Corfu
          </p>
        </div>

        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(0,0,0,0.08)",
            margin: "14px 0",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div>
            <p style={{ margin: 0, fontSize: "1rem", fontWeight: 600, color: "#222" }}>
              🏖️ Near the beach
            </p>
            <p style={{ margin: "4px 0 0 0", fontSize: "0.92rem", color: "#666", lineHeight: 1.5 }}>
              Easy access to relaxing seaside moments.
            </p>
          </div>

          <div>
            <p style={{ margin: 0, fontSize: "1rem", fontWeight: 600, color: "#222" }}>
              🛏️ Comfortable rooms
            </p>
            <p style={{ margin: "4px 0 0 0", fontSize: "0.92rem", color: "#666", lineHeight: 1.5 }}>
              Practical, welcoming spaces for a restful stay.
            </p>
          </div>

          <div>
            <p style={{ margin: 0, fontSize: "1rem", fontWeight: 600, color: "#222" }}>
              📍 Great location
            </p>
            <p style={{ margin: "4px 0 0 0", fontSize: "0.92rem", color: "#666", lineHeight: 1.5 }}>
              A convenient base for exploring Corfu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}