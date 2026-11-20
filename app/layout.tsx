import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./scroll-reference.css";
import { CapsulesProvider } from "./components/CapsulesContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcopolo Hotel® — Gouvia, Corfu",
  description:
    "Sunlit accommodation in Gouvia, Corfu — minutes from Gouvia Beach, surrounded by Mediterranean greenery, an outdoor pool courtyard, and authentic island hospitality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CapsulesProvider>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
          <CookieConsent />
          <GoogleAnalytics />
        </CapsulesProvider>
      </body>
    </html>
  );
}