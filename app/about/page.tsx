
export default function AboutPage() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f8fafc",
        paddingTop: "110px",
        paddingBottom: "80px",
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
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              color: "#1f4e5f",
            }}
          >
            About Marcopolo Hotel
          </h1>

          <p
            style={{
              marginTop: "16px",
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#475569",
            }}
          >
            Comfortable and affordable accommodation in Corfu, ideal for a
            relaxing and enjoyable stay near the beach and local attractions.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: "16px",
              color: "#1f2937",
            }}
          >
            A welcoming stay in Corfu
          </h2>

          <p style={{ color: "#475569", lineHeight: "1.8" }}>
            Marcopolo Hotel offers a simple, comfortable, and practical stay in
            Gouvia. Whether you are visiting as a couple, with friends, or with
            family, we aim to provide a relaxing base for your holiday.
          </p>
        </div>

        <div
          style={{
            textAlign: "center",
            backgroundColor: "#1f4e5f",
            color: "#fff",
            borderRadius: "20px",
            padding: "30px",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>
            Plan your stay with us
          </h2>

          <a
            href="/contact"
            style={{
              display: "inline-block",
              marginTop: "10px",
              backgroundColor: "#f4b942",
              color: "#1f2937",
              padding: "12px 20px",
              borderRadius: "999px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            CONTACT US
          </a>
        </div>
      </div>
    </div>
  );
}
