
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

export default function RoomsSection() {
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
     <section
  style={{
    width: "100%",
    padding: "80px 20px",
    backgroundColor: "#f8f5f0",
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
              textAlign: "center",
              marginBottom: "55px",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: 600,
                color: "#1f1f1f",
                marginBottom: "15px",
              }}
            >
              Our Rooms
            </h2>

            <p
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                color: "#666",
                fontSize: "1.05rem",
                lineHeight: 1.7,
              }}
            >
              Discover comfortable room options with practical layouts,
              pleasant views, and all the essentials for a relaxing stay.
            </p>
          </div>

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
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "#222",
                      marginBottom: "10px",
                    }}
                  >
                    {room.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#c9a96e",
                      fontWeight: 600,
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

                  <button
                    onClick={() => setSelectedRoom(room)}
                    style={{
                      marginTop: "auto",
                      alignSelf: "flex-start",
                      padding: "12px 22px",
                      borderRadius: "6px",
                      border: "none",
                      backgroundColor: "#1f1f1f",
                      color: "white",
                      cursor: "pointer",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
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

              <p style={{ margin: 0, color: "#444", lineHeight: 1.7 }}>
                <strong>Views:</strong>{" "}
                {selectedRoom.fullDetails.views.join(", ")}
              </p>
            </div>

            <div>
              <h4
                style={{
                  fontSize: "1.2rem",
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
          </div>
        </div>
      )}
    </>
  );
}