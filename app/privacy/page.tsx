import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Marcopolo Hotel®",
  description:
    "Read the Marcopolo Hotel privacy policy and learn how we collect and use your data.",
};

export default function PrivacyPage() {
  return (
    <div className="cap-subpage">
      <section
        className="cap-card"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <div className="eyebrow" style={{ marginBottom: "10px" }}>
          Marcopolo Hotel®
        </div>

        <h1 className="display-lg" style={{ margin: "0 0 22px 0" }}>
          Privacy Policy
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            lineHeight: 1.8,
            color: "var(--sand)",
            fontSize: "15px",
          }}
        >
          <p style={{ margin: 0 }}>
            This Privacy Policy explains how Marcopolo Hotel collects, uses, and
            protects your personal data when you visit our website or use our
            services.
          </p>

          <h2 style={{ color: "var(--ivory)", margin: "14px 0 0", fontSize: "20px" }}>
            Information we collect
          </h2>
          <p style={{ margin: 0 }}>
            We may collect personal information such as your name, email
            address, phone number, and any details you provide through contact
            forms or booking inquiries.
          </p>

          <h2 style={{ color: "var(--ivory)", margin: "14px 0 0", fontSize: "20px" }}>
            How we use your information
          </h2>
          <p style={{ margin: 0 }}>
            Your information is used to respond to inquiries, manage bookings,
            improve our services, and ensure a better user experience on our
            website.
          </p>

          <h2 style={{ color: "var(--ivory)", margin: "14px 0 0", fontSize: "20px" }}>
            Data protection
          </h2>
          <p style={{ margin: 0 }}>
            We take appropriate technical and organizational measures to protect
            your personal data against unauthorized access, loss, or misuse.
          </p>

          <h2 style={{ color: "var(--ivory)", margin: "14px 0 0", fontSize: "20px" }}>
            Third-party services
          </h2>
          <p style={{ margin: 0 }}>
            Our website may use third-party services such as analytics tools,
            booking platforms, or map integrations. These services may process
            your data according to their own privacy policies.
          </p>

          <h2 style={{ color: "var(--ivory)", margin: "14px 0 0", fontSize: "20px" }}>
            Your rights
          </h2>
          <p style={{ margin: 0 }}>
            You have the right to access, correct, or request deletion of your
            personal data. You may also object to certain types of processing in
            accordance with applicable data protection laws.
          </p>

          <h2 style={{ color: "var(--ivory)", margin: "14px 0 0", fontSize: "20px" }}>
            Contact
          </h2>
          <p style={{ margin: 0 }}>
            If you have any questions about this Privacy Policy or your data,
            please contact Marcopolo Hotel through our contact page.
          </p>
        </div>

        <div style={{ marginTop: "28px" }}>
          <Link href="/contact" className="cap-pill">
            <span>Contact Us</span>
            <span className="cap-circle">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}