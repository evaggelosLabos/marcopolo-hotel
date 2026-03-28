export default function WhyChooseUs() {
  const items = [
    {
      icon: "🏖️",
      title: "Close to the Beach",
      text: "Enjoy easy access to the sea and relaxing coastal moments just minutes away.",
    },
    {
      icon: "🛏️",
      title: "Comfortable Rooms",
      text: "Modern rooms designed for rest, comfort, and a pleasant stay for every guest.",
    },
    {
      icon: "🍽️",
      title: "Great Local Experience",
      text: "Discover nearby restaurants, attractions, and authentic hospitality around the hotel.",
    },
    {
      icon: "📍",
      title: "Excellent Location",
      text: "Stay close to key points of interest with a convenient base for your vacation.",
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        padding: "80px 20px",
        backgroundColor: "#f8f5f0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.4rem",
            fontWeight: 600,
            marginBottom: "15px",
            color: "#1f1f1f",
          }}
        >
          Why Choose Us
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            color: "#666",
            maxWidth: "700px",
            margin: "0 auto 50px auto",
            lineHeight: 1.7,
          }}
        >
          A welcoming stay, beautiful surroundings, and everything you need for a
          relaxing hotel experience.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "25px",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "30px 22px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                minHeight: "240px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.4rem",
                  marginBottom: "18px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  marginBottom: "14px",
                  color: "#222",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "0.98rem",
                  color: "#666",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}