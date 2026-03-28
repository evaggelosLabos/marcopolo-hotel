"use client";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Background */}
      <img
        src="/hotel_clean_highres/photo_035.jpg"
        alt="Hotel"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* Dark overlay */}
      

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 300,
            marginBottom: "10px",
          }}
        >
          Welcome to
        </h1>

        <h2
          style={{
            fontSize: "4rem",
            fontWeight: 600,
            letterSpacing: "2px",
          }}
        >
          Marcopolo Hotel
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "1.2rem",
            maxWidth: "600px",
          }}
        >
          Experience comfort, elegance, and unforgettable moments.
        </p>

        {/* CTA */}
        <button
          style={{
            marginTop: "30px",
            padding: "14px 30px",
            backgroundColor: "#c9a96e",
            border: "none",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Check Availability
        </button>
      </div>
    </section>
  );
}