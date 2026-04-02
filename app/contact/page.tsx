export default function ContactPage() {
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
          gap: "30px",
        }}
      >
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
            Contact Marcopolo Hotel
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
            We are here to help you with your stay in Corfu. Contact us for
            availability, room information, or any questions before your trip.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
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
                marginBottom: "20px",
                fontSize: "26px",
                fontWeight: 700,
                color: "#1f2937",
              }}
            >
              Send Us a Message
            </h2>

            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <input
                type="text"
                placeholder="Full Name"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />

              <input
                type="email"
                placeholder="Email Address"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />

              <textarea
                placeholder="Your Message"
                rows={6}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  fontSize: "15px",
                  outline: "none",
                  resize: "vertical",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                }}
              />

              <button
                type="submit"
                style={{
                  backgroundColor: "#f4b942",
                  color: "#1f2937",
                  border: "none",
                  borderRadius: "999px",
                  padding: "14px 22px",
                  fontSize: "15px",
                  fontWeight: 800,
                  cursor: "pointer",
                  alignSelf: "flex-start",
                  boxShadow: "0 6px 18px rgba(244,185,66,0.28)",
                }}
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
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
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#1f2937",
                }}
              >
                Contact Information
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  fontSize: "16px",
                  color: "#475569",
                  lineHeight: "1.7",
                }}
              >
                <div>
                  <strong style={{ color: "#1f4e5f" }}>Address:</strong>
                  <div>Corfu, Greece</div>
                </div>

                <div>
                  <strong style={{ color: "#1f4e5f" }}>Phone:</strong>
                  <div>+30 000 000 0000</div>
                </div>

                <div>
                  <strong style={{ color: "#1f4e5f" }}>Email:</strong>
                  <div>office@marcopolohotel.com</div>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#1f4e5f",
                borderRadius: "20px",
                padding: "28px",
                color: "#ffffff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "14px",
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              >
                Need a quick answer?
              </h3>

              <p
                style={{
                  marginTop: 0,
                  marginBottom: "18px",
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "rgba(255,255,255,0.88)",
                }}
              >
                Contact us directly for booking questions, room details, and
                general hotel information.
              </p>

              <a
                href="tel:+30693 904 1035"
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  backgroundColor: "#f4b942",
                  color: "#1f2937",
                  padding: "13px 18px",
                  borderRadius: "999px",
                  fontWeight: 800,
                  fontSize: "14px",
                }}
              >
                CALL US
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}