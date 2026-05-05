"use client";

import Script from "next/script";

const GA_ID = "G-LZVWGSFPM2"; // replace with your GA4 Measurement ID

export default function GoogleAnalytics() {
  const consent =
    typeof window !== "undefined"
      ? localStorage.getItem("marcopolo_cookie_consent")
      : null;

  if (consent !== "accepted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}