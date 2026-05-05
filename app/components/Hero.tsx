"use client";

import { useEffect, useState } from "react";
import HeroSideInfo from "./HeroSideInfo";
import HeroSideHighlights from "./HeroSideHighlights";

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: isDesktop ? "100svh" : "auto",
        width: "100%",
        overflow: "hidden",
        backgroundColor: isDesktop ? "#f8f5f0" : "#ffffff",
        boxSizing: "border-box",
      }}
    >
      {isDesktop ? (
        <>
          <img
            src="/hotel/photo_079.jpg"
            alt="Marcopolo Hotel"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />

          <HeroSideHighlights />
          <HeroSideInfo />

          <div
            style={{
              position: "relative",
              zIndex: 3,
              height: "100svh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              padding: "20px",
              boxSizing: "border-box",
              textShadow: "0 4px 18px rgba(0,0,0,0.5)",
            }}
          >
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: 300,
                margin: 0,
              }}
            >
              Welcome to
            </h1>

            <h2
              style={{
                fontSize: "4rem",
                fontWeight: 700,
                lineHeight: 1.05,
                margin: "8px 0 0",
              }}
            >
              Marcopolo Hotel
            </h2>

            <p
              style={{
                marginTop: "22px",
                fontSize: "1.2rem",
                maxWidth: "620px",
                lineHeight: 1.55,
              }}
            >
              Experience comfort, elegance, and unforgettable moments.
            </p>

            <button
  onClick={() => {
    window.open(
      "https://www.booking.com/searchresults.el.html?ss=Marco+Polo+Hotel%2C+Gouvia%2C+Ionian+Islands+%28Corfu%29%2C+Greece&efdco=1&label=gog235jc-10CAEoggI46AdIM1gDaFyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Atzi6s4GwAIB0gIkM2M1NTBkYjItN2ZjMy00NTM2LTlkMDctNGMxOGZlOWQyMDEx2AIB4AIB&sid=cabe4ff012203b0b68c99c4adfc71116&aid=397594&lang=el&sb=1&src_elem=sb&src=index&dest_id=9990606&dest_type=hotel&ac_position=2&ac_click_type=b&ac_langcode=xu&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=25ef8a44ca7b0041&ac_meta=GhAyNWVmOGE0NGNhN2IwMDQxIAIoATICeHU6Ek1hcmNvIFBvbG8gSG90ZWwgYw%3D%3D&ltfd=1%3A1%3A5-2026%3A1%3A1&group_adults=2&no_rooms=1&group_children=0",
      "_blank"
    );
  }}
  style={{
    padding: "14px 28px",
    background: "linear-gradient(135deg, #f8df9a, #d8ad57)",
    border: "none",
    color: "#111827",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: 850,
    fontSize: "15px",
    boxShadow: "0 10px 24px rgba(216,173,87,0.35)",
  }}
>
  Check Availability
</button>
          </div>
        </>
      ) : (
        <div
  style={{
    width: "100%",
    minHeight: "100svh",
    padding: "92px 18px 34px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: "#111827",
    background: "#ffffff",
  }}
>
  <div style={{ marginBottom: "18px" }}>
    <p
      style={{
        margin: "0 0 8px",
        fontSize: "13px",
        fontWeight: 800,
        letterSpacing: "1.8px",
        textTransform: "uppercase",
        color: "#c9a96e",
      }}
    >
      Corfu Budget Stay
    </p>

    <h1
      style={{
        fontSize: "1.65rem",
        fontWeight: 400,
        margin: 0,
        lineHeight: 1.15,
      }}
    >
      Welcome to
    </h1>

    <h2
      style={{
        fontSize: "2.25rem",
        fontWeight: 850,
        letterSpacing: "-0.8px",
        margin: "6px 0 0",
        lineHeight: 1.05,
      }}
    >
      Marcopolo Hotel
    </h2>
  </div>

  <img
    src="/hotel/photo_079.jpg"
    alt="Marcopolo Hotel"
    style={{
      width: "100%",
      maxWidth: "520px",
      height: "auto",
      objectFit: "contain",
      borderRadius: "24px",
      boxShadow: "0 18px 45px rgba(0,0,0,0.16)",
      margin: "0 auto 18px",
      display: "block",
    }}
  />

  <div
    style={{
      width: "100%",
      maxWidth: "520px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px",
      marginBottom: "18px",
    }}
  >
    {[
      "Near the beach",
      "Comfortable rooms",
      "Great location",
      "Relaxed Corfu stay",
    ].map((item) => (
      <div
        key={item}
        style={{
          background: "#f7f7f7",
          border: "1px solid #eeeeee",
          borderRadius: "16px",
          padding: "12px 10px",
          fontSize: "13px",
          fontWeight: 700,
          color: "#111827",
        }}
      >
        {item}
      </div>
    ))}
  </div>

  <p
    style={{
      maxWidth: "430px",
      fontSize: "1rem",
      lineHeight: 1.55,
      margin: "0 0 20px",
      color: "#374151",
    }}
  >
    Experience comfort, elegance, and unforgettable moments in a welcoming stay
    designed for your Corfu holiday.
  </p>

  <button
  onClick={() => {
    window.open(
      "https://www.booking.com/searchresults.el.html?ss=Marco+Polo+Hotel%2C+Gouvia%2C+Ionian+Islands+%28Corfu%29%2C+Greece&efdco=1&label=gog235jc-10CAEoggI46AdIM1gDaFyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Atzi6s4GwAIB0gIkM2M1NTBkYjItN2ZjMy00NTM2LTlkMDctNGMxOGZlOWQyMDEx2AIB4AIB&sid=cabe4ff012203b0b68c99c4adfc71116&aid=397594&lang=el&sb=1&src_elem=sb&src=index&dest_id=9990606&dest_type=hotel&ac_position=2&ac_click_type=b&ac_langcode=xu&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=25ef8a44ca7b0041&ac_meta=GhAyNWVmOGE0NGNhN2IwMDQxIAIoATICeHU6Ek1hcmNvIFBvbG8gSG90ZWwgYw%3D%3D&ltfd=1%3A1%3A5-2026%3A1%3A1&group_adults=2&no_rooms=1&group_children=0",
      "_blank"
    );
  }}
  style={{
    padding: "14px 28px",
    background: "linear-gradient(135deg, #f8df9a, #d8ad57)",
    border: "none",
    color: "#111827",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: 850,
    fontSize: "15px",
    boxShadow: "0 10px 24px rgba(216,173,87,0.35)",
  }}
>
  Check Availability
</button>
</div>

      )}
    </section>
  );
}