export default function LocationPage() {
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
          gap: "32px",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              color: "#1f4e5f",
              lineHeight: 1.2,
            }}
          >
            Location
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
            Stay in Gouvia, Corfu, just minutes from the beach and close to
            everything you need for a relaxing and enjoyable holiday.
          </p>
        </div>

        {/* MAIN GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {/* INFO CARD */}
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
                marginBottom: "18px",
                fontSize: "26px",
                fontWeight: 700,
                color: "#1f2937",
              }}
            >
              Where We Are
            </h2>

            <p
              style={{
                marginTop: 0,
                marginBottom: "18px",
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#475569",
              }}
            >
              Marcopolo Hotel is located in Gouvia, Corfu, just a short walk from
              the beach and close to restaurants, shops, and local attractions.
              It offers a convenient and comfortable base for exploring the
              island.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                fontSize: "15px",
                color: "#475569",
                lineHeight: "1.7",
              }}
            >
              <div>
                <strong style={{ color: "#1f4e5f" }}>Address:</strong>
                <div>Gouvia, Corfu 49100, Greece</div>
              </div>

              <div>
                <strong style={{ color: "#1f4e5f" }}>Ideal For:</strong>
                <div>Couples, families & holiday travelers</div>
              </div>
            </div>

            {/* DISTANCES */}
            <div style={{ marginTop: "18px" }}>
              <strong style={{ color: "#1f4e5f" }}>Distances:</strong>

              <ul
                style={{
                  marginTop: "10px",
                  paddingLeft: "18px",
                  color: "#475569",
                  lineHeight: "1.8",
                  fontSize: "15px",
                }}
              >
                <li>5 min walk to Gouvia Beach</li>
                <li>10 min drive to Corfu Town</li>
                <li>15 min from Corfu Airport</li>
                <li>Close to restaurants, bars & shops</li>
              </ul>
            </div>
          </div>

          {/* MAP CARD */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              padding: "18px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.05)",
              minHeight: "420px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                margin: "10px 10px 16px 10px",
                fontSize: "24px",
                fontWeight: 700,
                color: "#1f2937",
              }}
            >
              Find Us on the Map
            </h2>

            <div
              style={{
                flex: 1,
                borderRadius: "16px",
                overflow: "hidden",
                minHeight: "320px",
              }}
            >
              <iframe
                title="Marcopolo Hotel Location"
                src="https://www.google.com/maps?q=39.6505938,19.8442759&z=17&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: "320px",
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* EXTRA INFO CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "18px",
              padding: "24px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "12px",
                fontSize: "20px",
                fontWeight: 700,
                color: "#1f4e5f",
              }}
            >
              Nearby Attractions
            </h3>

            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#475569",
              }}
            >
              Enjoy nearby beaches, cafés, restaurants, and local attractions
              just minutes from the hotel.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "18px",
              padding: "24px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "12px",
                fontSize: "20px",
                fontWeight: 700,
                color: "#1f4e5f",
              }}
            >
              Easy to Reach
            </h3>

            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#475569",
              }}
            >
              Conveniently located for arrivals from the airport and easy access
              to Corfu Town and surrounding areas.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "18px",
              padding: "24px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "12px",
                fontSize: "20px",
                fontWeight: 700,
                color: "#1f4e5f",
              }}
            >
              Great Holiday Base
            </h3>

            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#475569",
              }}
            >
              A perfect starting point for exploring Corfu while enjoying a
              comfortable and affordable stay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}