import Link from "next/link";
import { WHY_CHAPTERS } from "../data/hotel";

export const metadata = {
  title: "About | Marcopolo Hotel® Corfu",
  description:
    "Discover the story and hospitality behind Marcopolo Hotel in Gouvia, Corfu.",
};

export default function AboutPage() {
  return (
    <div className="cap-subpage">
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "36px",
        }}
      >
        <div style={{ maxWidth: "820px" }}>
          <div className="eyebrow" style={{ marginBottom: "12px" }}>
            About Marcopolo®
          </div>
          <h1 className="display-lg" style={{ margin: "0 0 16px 0" }}>
            A welcoming stay in Gouvia, Corfu
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "16.5px",
              lineHeight: 1.75,
              color: "var(--sand)",
            }}
          >
            Marcopolo Hotel offers a calm, sunlit, and practical stay in Gouvia.
            Whether you are visiting as a couple, with friends, or with family,
            we aim to provide a relaxed base surrounded by Mediterranean
            greenery and authentic Greek island hospitality.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {WHY_CHAPTERS.map((ch) => (
            <article
              key={ch.num}
              className="cap-card"
              style={{ padding: 0, overflow: "hidden" }}
            >
              <div style={{ height: "230px", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ch.image}
                  alt={ch.caption}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "24px" }}>
                <div className="eyebrow" style={{ marginBottom: "8px" }}>
                  {ch.num} / 03
                </div>
                <h2
                  style={{
                    margin: "0 0 10px 0",
                    fontSize: "21px",
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  {ch.title}
                </h2>
                <p
                  style={{
                    margin: 0,
                    fontSize: "14.5px",
                    lineHeight: 1.7,
                    color: "var(--sand)",
                  }}
                >
                  {ch.description}
                </p>
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
          <div>
            <div className="eyebrow" style={{ marginBottom: "8px" }}>
              Plan Your Corfu Stay
            </div>
            <h2 className="display-md" style={{ margin: 0 }}>
              Ready to unwind in Gouvia?
            </h2>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/rooms" className="cap-pill-ghost">
              Explore Rooms
            </Link>
            <Link href="/contact" className="cap-pill">
              <span>Contact Us</span>
              <span className="cap-circle">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
