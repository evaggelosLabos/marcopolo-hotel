import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Marcopolo Hotel",
  description:
    "Read the Marcopolo Hotel privacy policy and learn how we collect and use your data.",
};

export default function PrivacyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8f5f0",
        padding: "130px 20px 70px",
        fontFamily: "Arial, sans-serif",
        color: "#111827",
      }}
    >
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "24px",
          padding: "36px 28px",
          boxShadow: "0 18px 45px rgba(0,0,0,0.08)",
        }}
      >
        <p
          style={{
            color: "#c9a96e",
            fontWeight: 800,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            fontSize: "13px",
            marginBottom: "12px",
          }}
        >
          Marcopolo Hotel
        </p>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            margin: "0 0 20px",
            lineHeight: 1.1,
          }}
        >
          Privacy Policy
        </h1>

        <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
          This Privacy Policy explains how Marcopolo Hotel collects, uses, and
          protects your personal data when you visit our website or use our
          services.
        </p>

        <h2 style={{ marginTop: "34px" }}>Information we collect</h2>
        <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
          We may collect personal information such as your name, email address,
          phone number, and any details you provide through contact forms or
          booking inquiries.
        </p>

        <h2 style={{ marginTop: "34px" }}>How we use your information</h2>
        <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
          Your information is used to respond to inquiries, manage bookings,
          improve our services, and ensure a better user experience on our
          website.
        </p>

        <h2 style={{ marginTop: "34px" }}>Data protection</h2>
        <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
          We take appropriate technical and organizational measures to protect
          your personal data against unauthorized access, loss, or misuse.
        </p>

        <h2 style={{ marginTop: "34px" }}>Third-party services</h2>
        <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
          Our website may use third-party services such as analytics tools,
          booking platforms, or map integrations. These services may process
          your data according to their own privacy policies.
        </p>

        <h2 style={{ marginTop: "34px" }}>Your rights</h2>
        <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
          You have the right to access, correct, or request deletion of your
          personal data. You may also object to certain types of processing in
          accordance with applicable data protection laws.
        </p>

        <h2 style={{ marginTop: "34px" }}>Contact</h2>
        <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
          If you have any questions about this Privacy Policy or your data,
          please contact Marcopolo Hotel through our contact page.
        </p>

        <Link
          href="/contact"
          style={{
            display: "inline-block",
            marginTop: "28px",
            background: "linear-gradient(135deg, #f8df9a, #d8ad57)",
            color: "#111827",
            textDecoration: "none",
            padding: "14px 24px",
            borderRadius: "999px",
            fontWeight: 800,
            boxShadow: "0 10px 24px rgba(216,173,87,0.28)",
          }}
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}