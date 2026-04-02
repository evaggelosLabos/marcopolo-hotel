"use client";

import { useState } from "react";

type Room = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  fullDetails: {
    capacity: string;
    bedSetup: string;
    size: string;
    views: string[];
    amenities: string[];
  };
};

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const rooms: Room[] = [
    {
      image: "/hotel/photo_024.jpg",
      title: "Double Room",
      subtitle: "Ideal for 2 guests with separate beds",
      description:
        "A practical and welcoming room with two separate single beds, ideal for guests who prefer comfort, simplicity, and a relaxing stay in a bright 17 m² space.",
      details: ["2 Guests", "17 m²", "2 Single Beds", "Balcony", "Free WiFi"],
      fullDetails: {
        capacity: "Up to 2 guests",
        bedSetup: "2 single beds",
        size: "17 m²",
        views: ["Garden View", "Pool View", "City View"],
        amenities: [
          "Balcony",
          "Air Conditioning",
          "Patio",
          "Private Bathroom",
          "Flat-screen TV",
          "Minibar",
          "Free WiFi",
          "Free Toiletries",
          "Safety Deposit Box",
          "Toilet",
          "Bath or Shower",
          "Wooden / Parquet Floor",
          "Towels",
          "Linens",
          "Cleaning Products",
          "Hypoallergenic",
          "Desk",
          "Outdoor Furniture",
          "Wardrobe",
          "Upper Floors Accessible by Elevator",
          "Clothes Rack",
          "Fold-up Bed",
          "Toilet Paper",
        ],
      },
    },
    {
      image: "/hotel/photo_003.jpg",
      title: "Triple Room",
      subtitle: "Perfect for up to 3 guests",
      description:
        "A smart and functional room designed for small groups or families, featuring two single beds and one bunk bed in a practical 17 m² layout.",
      details: [
        "3 Guests",
        "17 m²",
        "2 Single Beds + 1 Bunk Bed",
        "Balcony",
        "Free WiFi",
      ],
      fullDetails: {
        capacity: "Up to 3 guests",
        bedSetup: "2 single beds and 1 bunk bed",
        size: "17 m²",
        views: ["Garden View", "Pool View", "City View"],
        amenities: [
          "Balcony",
          "Air Conditioning",
          "Patio",
          "Private Bathroom",
          "Flat-screen TV",
          "Minibar",
          "Free WiFi",
          "Free Toiletries",
          "Safety Deposit Box",
          "Toilet",
          "Bath or Shower",
          "Wooden / Parquet Floor",
          "Towels",
          "Linens",
          "Cleaning Products",
          "Hypoallergenic",
          "Desk",
          "Outdoor Furniture",
          "Wardrobe",
          "Upper Floors Accessible by Elevator",
          "Clothes Rack",
          "Fold-up Bed",
          "Toilet Paper",
        ],
      },
    },
  ];

  return (
    <>
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
            gap: "34px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: "820px",
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
              Our Rooms
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
              Discover comfortable room options designed for a pleasant and
              affordable stay in Corfu, with practical layouts, relaxing views,
              and the essentials you need for your holiday.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
            }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "18px",
                padding: "22px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "10px",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#1f4e5f",
                }}
              >
                Comfortable Stay
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#475569",
                }}
              >
                Practical and welcoming rooms designed for restful holidays.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "18px",
                padding: "22px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "10px",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#1f4e5f",
                }}
              >
                Great for Couples & Families
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#475569",
                }}
              >
                Choose the room type that best fits your travel plans.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "18px",
                padding: "22px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "10px",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#1f4e5f",
                }}
              >
                Practical Amenities
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#475569",
                }}
              >
                Balcony, air conditioning, private bathroom, WiFi, and more.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "18px",
                padding: "22px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "10px",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#1f4e5f",
                }}
              >
                Good Value
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#475569",
                }}
              >
                A budget-friendly stay without missing the essentials.
              </p>
            </div>
          </div>

          <section
            style={{
              width: "100%",
              padding: "10px 0 0 0",
              backgroundColor: "transparent",
            }}
          >
            <div
              style={{
                maxWidth: "1050px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "30px",
                }}
              >
                {rooms.map((room, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "18px",
                      overflow: "hidden",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.10)",
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "280px",
                        overflow: "hidden",
                      }}
                    >
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
                    </div>

                    <div
                      style={{
                        padding: "28px 24px",
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          color: "#222",
                          marginTop: 0,
                          marginBottom: "10px",
                        }}
                      >
                        {room.title}
                      </h2>

                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#c9a96e",
                          fontWeight: 700,
                          marginTop: 0,
                          marginBottom: "14px",
                        }}
                      >
                        {room.subtitle}
                      </p>

                      <p
                        style={{
                          fontSize: "0.98rem",
                          color: "#666",
                          lineHeight: 1.7,
                          marginTop: 0,
                          marginBottom: "20px",
                        }}
                      >
                        {room.description}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "10px",
                          marginBottom: "24px",
                        }}
                      >
                        {room.details.map((detail, detailIndex) => (
                          <span
                            key={detailIndex}
                            style={{
                              padding: "8px 12px",
                              backgroundColor: "#f5efe4",
                              color: "#8a6b3d",
                              borderRadius: "999px",
                              fontSize: "0.9rem",
                              fontWeight: 500,
                            }}
                          >
                            {detail}
                          </span>
                        ))}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: "12px",
                          flexWrap: "wrap",
                          marginTop: "auto",
                        }}
                      >
                        <button
                          onClick={() => setSelectedRoom(room)}
                          style={{
                            padding: "12px 22px",
                            borderRadius: "8px",
                            border: "none",
                            backgroundColor: "#1f4e5f",
                            color: "white",
                            cursor: "pointer",
                            fontSize: "0.95rem",
                            fontWeight: 600,
                          }}
                        >
                          View Details
                        </button>

                        <a
                          href="/contact"
                          style={{
                            display: "inline-block",
                            textDecoration: "none",
                            padding: "12px 22px",
                            borderRadius: "8px",
                            border: "none",
                            backgroundColor: "#f4b942",
                            color: "#1f2937",
                            cursor: "pointer",
                            fontSize: "0.95rem",
                            fontWeight: 700,
                          }}
                        >
                          Request Booking
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "22px",
              padding: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "28px",
                fontWeight: 800,
                color: "#1f4e5f",
              }}
            >
              Need help choosing the right room?
            </h2>

            <p
              style={{
                margin: 0,
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#475569",
                maxWidth: "760px",
                marginInline: "auto",
              }}
            >
              Contact us for availability, room options, and booking assistance.
              We will be happy to help you choose the best room for your stay in
              Corfu.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "6px",
              }}
            >
              <a
                href="/contact"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#f4b942",
                  color: "#1f2937",
                  padding: "13px 22px",
                  borderRadius: "999px",
                  fontWeight: 800,
                  fontSize: "14px",
                }}
              >
                CONTACT US
              </a>

              <a
                href="tel:+300000000000"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#1f4e5f",
                  color: "#ffffff",
                  padding: "13px 22px",
                  borderRadius: "999px",
                  fontWeight: 800,
                  fontSize: "14px",
                }}
              >
                CALL NOW
              </a>
            </div>
          </div>
        </div>
      </div>

      {selectedRoom && (
        <div
          onClick={() => setSelectedRoom(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.55)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            zIndex: 9999,
            boxSizing: "border-box",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "750px",
              maxHeight: "90vh",
              overflowY: "auto",
              backgroundColor: "white",
              borderRadius: "18px",
              padding: "30px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                marginBottom: "20px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.8rem",
                  color: "#1f1f1f",
                }}
              >
                {selectedRoom.title}
              </h3>

              <button
                onClick={() => setSelectedRoom(null)}
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "1.8rem",
                  cursor: "pointer",
                  color: "#333",
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>

            <img
              src={selectedRoom.image}
              alt={selectedRoom.title}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "24px",
              }}
            />

            <div style={{ marginBottom: "20px" }}>
              <p
                style={{
                  margin: "0 0 10px 0",
                  color: "#444",
                  lineHeight: 1.7,
                }}
              >
                <strong>Capacity:</strong> {selectedRoom.fullDetails.capacity}
              </p>

              <p
                style={{
                  margin: "0 0 10px 0",
                  color: "#444",
                  lineHeight: 1.7,
                }}
              >
                <strong>Bed setup:</strong> {selectedRoom.fullDetails.bedSetup}
              </p>

              <p
                style={{
                  margin: "0 0 10px 0",
                  color: "#444",
                  lineHeight: 1.7,
                }}
              >
                <strong>Room size:</strong> {selectedRoom.fullDetails.size}
              </p>

              <p
                style={{
                  margin: 0,
                  color: "#444",
                  lineHeight: 1.7,
                }}
              >
                <strong>Views:</strong> {selectedRoom.fullDetails.views.join(", ")}
              </p>
            </div>

            <div>
              <h4
                style={{
                  fontSize: "1.2rem",
                  marginTop: 0,
                  marginBottom: "14px",
                  color: "#1f1f1f",
                }}
              >
                Amenities
              </h4>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {selectedRoom.fullDetails.amenities.map((amenity, index) => (
                  <span
                    key={index}
                    style={{
                      padding: "9px 14px",
                      backgroundColor: "#f7f7f7",
                      borderRadius: "999px",
                      color: "#444",
                      fontSize: "0.92rem",
                    }}
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: "28px",
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/contact"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#f4b942",
                  color: "#1f2937",
                  padding: "12px 20px",
                  borderRadius: "999px",
                  fontWeight: 800,
                  fontSize: "14px",
                }}
              >
                REQUEST BOOKING
              </a>

              <button
                onClick={() => setSelectedRoom(null)}
                style={{
                  backgroundColor: "#1f4e5f",
                  color: "#ffffff",
                  padding: "12px 20px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  fontSize: "14px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}