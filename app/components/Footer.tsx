import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1f4e5f",
        color: "#ffffff",
        padding: "50px 20px 24px 20px",
        marginTop: "0",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "32px",
        }}
      >
        <div>
          <h3
            style={{
              margin: "0 0 12px 0",
              fontSize: "26px",
              fontWeight: 800,
              letterSpacing: "0.5px",
            }}
          >
            MARCOPOLO
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "15px",
              lineHeight: "1.8",
              color: "rgba(255,255,255,0.82)",
              maxWidth: "300px",
            }}
          >
            Comfortable and affordable accommodation in Corfu, ideal for guests
            looking for a pleasant stay with easy access to the island.
          </p>
        </div>

        <div>
          <h4
            style={{
              margin: "0 0 14px 0",
              fontSize: "16px",
              fontWeight: 700,
              color: "#f4d38a",
            }}
          >
            Quick Links
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Link href="/" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
              Home
            </Link>
            <Link href="/rooms" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
              Rooms
            </Link>
            <Link href="/facilities" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
              Facilities
            </Link>
            <Link href="/location" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
              Location
            </Link>
            <Link href="/contact" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h4
            style={{
              margin: "0 0 14px 0",
              fontSize: "16px",
              fontWeight: 700,
              color: "#f4d38a",
            }}
          >
            Contact Info
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "15px",
              color: "rgba(255,255,255,0.85)",
              lineHeight: "1.7",
            }}
          >
            <span>Corfu, Greece</span>
            <span>+30  693 904 1035</span>
            <span>office@marcopolohotel.com</span>
          </div>
        </div>

        <div>
          <h4
            style={{
              margin: "0 0 14px 0",
              fontSize: "16px",
              fontWeight: 700,
              color: "#f4d38a",
            }}
          >
            Why Stay With Us
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "15px",
              color: "rgba(255,255,255,0.85)",
              lineHeight: "1.7",
            }}
          >
            <span>Comfortable rooms</span>
            <span>Friendly atmosphere</span>
            <span>Convenient location</span>
            <span>Great value for money</span>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1300px",
          margin: "26px auto 0 auto",
          paddingTop: "18px",
          borderTop: "1px solid rgba(255,255,255,0.14)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "12px",
          fontSize: "14px",
          color: "rgba(255,255,255,0.72)",
        }}
      >
        <span>© {new Date().getFullYear()} Marcopolo Hotel. All rights reserved.</span>
        <span>Designed for easy bookings and a comfortable stay.</span>
      </div>
    </footer>
  );
}