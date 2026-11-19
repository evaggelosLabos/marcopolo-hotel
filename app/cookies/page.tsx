import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | Marcopolo Hotel®",
  description:
    "Read the Marcopolo Hotel cookie policy and learn how cookies are used on our website.",
};

export default function CookiesPage() {
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
          Cookie Policy
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
            This Cookie Policy explains how Marcopolo Hotel uses cookies and
            similar technologies on this website. Cookies help us provide a
            better browsing experience, understand how visitors use our website,
            and improve our online services.
          </p>

          <h2 style={{ color: "var(--ivory)", margin: "14px 0 0", fontSize: "20px" }}>
            What are cookies?
          </h2>
          <p style={{ margin: 0 }}>
            Cookies are small text files stored on your device when you visit a
            website. They allow the website to remember certain information
            about your visit, such as preferences, language settings, or
            browsing activity.
          </p>

          <h2 style={{ color: "var(--ivory)", margin: "14px 0 0", fontSize: "20px" }}>
            Types of cookies we may use
          </h2>

          <h3 style={{ color: "var(--ivory)", margin: "6px 0 0", fontSize: "16px" }}>
            Essential cookies
          </h3>
          <p style={{ margin: 0 }}>
            These cookies are necessary for the website to function properly.
            They may support basic features such as navigation, security, and
            page loading.
          </p>

          <h3 style={{ color: "var(--ivory)", margin: "6px 0 0", fontSize: "16px" }}>
            Analytics cookies
          </h3>
          <p style={{ margin: 0 }}>
            These cookies help us understand how visitors interact with our
            website, such as which pages are visited most often. This
            information helps us improve the website experience.
          </p>

          <h3 style={{ color: "var(--ivory)", margin: "6px 0 0", fontSize: "16px" }}>
            Preference cookies
          </h3>
          <p style={{ margin: 0 }}>
            These cookies may remember your preferences, such as language or
            other display settings, to make future visits more convenient.
          </p>

          <h2 style={{ color: "var(--ivory)", margin: "14px 0 0", fontSize: "20px" }}>
            Managing cookies
          </h2>
          <p style={{ margin: 0 }}>
            You can control or delete cookies through your browser settings.
            Most browsers allow you to block cookies, delete existing cookies,
            or receive a warning before cookies are stored.
          </p>

          <h2 style={{ color: "var(--ivory)", margin: "14px 0 0", fontSize: "20px" }}>
            Third-party cookies
          </h2>
          <p style={{ margin: 0 }}>
            If our website uses services such as analytics tools, maps, booking
            tools, or embedded content, those third-party services may place
            their own cookies according to their privacy policies.
          </p>

          <h2 style={{ color: "var(--ivory)", margin: "14px 0 0", fontSize: "20px" }}>
            Contact
          </h2>
          <p style={{ margin: 0 }}>
            For questions about this Cookie Policy, please contact Marcopolo
            Hotel through our contact page.
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