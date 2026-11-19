import Link from "next/link";
import { CONTACT_INFO } from "../data/hotel";

export const metadata = {
  title: "Location | Marcopolo Hotel® Corfu",
  description:
    "Located in Gouvia, Corfu — 5 minutes from Gouvia Beach, 10 minutes to Corfu Town, and 15 minutes from Corfu Airport.",
};

export default function LocationPage() {
  return (
    <div className="cap-subpage">
      <div
        style={{
          maxWidth: "1260px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "780px",
            margin: "0 auto",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: "12px" }}>
            {CONTACT_INFO.coordinates}
          </div>
          <h1 className="display-lg" style={{ margin: "0 0 14px 0" }}>
            Closer Than You Think
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "16px",
              lineHeight: 1.7,
              color: "var(--sand)",
            }}
          >
            Stay in Gouvia, Corfu, just minutes from the beach and close to
            everything you need for a relaxing and enjoyable island holiday.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "24px",
          }}
        >
          <div
            className="cap-card"
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: "8px" }}>
                Where We Are
              </div>
              <h2 className="display-md" style={{ margin: "0 0 12px 0" }}>
                Gouvia, Corfu
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--sand)",
                }}
              >
                Marcopolo Hotel is located in Gouvia, Corfu, just a short walk
                from the beach and close to restaurants, shops, and local
                attractions. It offers a convenient and peaceful base for
                exploring the entire island.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
              }}
            >
              {[
                ["5 min", "Gouvia Beach"],
                ["10 min", "Corfu Town"],
                ["15 min", "Corfu Airport"],
              ].map(([t, label]) => (
                <div
                  key={label}
                  style={{
                    background: "var(--bg-base)",
                    border: "1px solid var(--sand-dim)",
                    borderRadius: "16px",
                    padding: "14px",
                  }}
                >
                  <div style={{ fontSize: "20px", fontWeight: 600 }}>{t}</div>
                  <div style={{ fontSize: "12px", color: "var(--sand)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "14.5px",
                color: "var(--sand)",
                borderTop: "1px solid var(--sand-dim)",
                paddingTop: "16px",
              }}
            >
              <div>
                <strong style={{ color: "var(--ivory)" }}>Address:</strong>{" "}
                {CONTACT_INFO.address}
              </div>
              <div>
                <strong style={{ color: "var(--ivory)" }}>Ideal For:</strong>{" "}
                Couples, families &amp; island explorers
              </div>
            </div>

            <div style={{ marginTop: "auto" }}>
              <Link href="/contact" className="cap-pill">
                <span>Contact Reception</span>
                <span className="cap-circle">↗</span>
              </Link>
            </div>
          </div>

          <div
            className="cap-card"
            style={{
              padding: "18px",
              minHeight: "430px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "4px 6px",
              }}
            >
              <span className="eyebrow">Interactive Map</span>
              <span style={{ fontSize: "12.5px", color: "var(--sand)" }}>
                Gouvia, Corfu 49100
              </span>
            </div>
            <div
              style={{
                flex: 1,
                borderRadius: "20px",
                overflow: "hidden",
                minHeight: "340px",
                border: "1px solid var(--sand-dim)",
              }}
            >
              <iframe
                title="Marcopolo Hotel Location"
                src={CONTACT_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: "340px",
                  display: "block",
                  filter: "grayscale(0.25) contrast(1.04)",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            [
              "Nearby Attractions",
              "Enjoy nearby beaches, seaside tavernas, Gouvia Marina, cafés, and shops just minutes on foot from the hotel.",
            ],
            [
              "Easy to Reach",
              "Conveniently positioned for effortless arrivals from Corfu Airport and quick access to Corfu Old Town.",
            ],
            [
              "Great Island Base",
              "A calm, practical starting point for northern coves, Paleokastritsa, and Ionian day trips.",
            ],
          ].map(([title, body]) => (
            <div key={title} className="cap-card">
              <h3
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "20px",
                  fontWeight: 500,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "14.5px",
                  lineHeight: 1.7,
                  color: "var(--sand)",
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}