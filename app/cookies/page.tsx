import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | Marcopolo Hotel",
  description:
    "Read the Marcopolo Hotel cookie policy and learn how cookies are used on our website.",
};

export default function CookiesPage() {
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
          Cookie Policy
        </h1>

        <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
          This Cookie Policy explains how Marcopolo Hotel uses cookies and
          similar technologies on this website. Cookies help us provide a better
          browsing experience, understand how visitors use our website, and
          improve our online services.
        </p>

        <h2 style={{ marginTop: "34px" }}>What are cookies?</h2>
        <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
          Cookies are small text files stored on your device when you visit a
          website. They allow the website to remember certain information about
          your visit, such as preferences, language settings, or browsing
          activity.
        </p>

        <h2 style={{ marginTop: "34px" }}>Types of cookies we may use</h2>

        <h3 style={{ marginTop: "22px" }}>Essential cookies</h3>
        <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
          These cookies are necessary for the website to function properly. They
          may support basic features such as navigation, security, and page
          loading.
        </p>

        <h3 style={{ marginTop: "22px" }}>Analytics cookies</h3>
        <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
          These cookies help us understand how visitors interact with our
          website, such as which pages are visited most often. This information
          helps us improve the website experience.
        </p>

        <h3 style={{ marginTop: "22px" }}>Preference cookies</h3>
        <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
          These cookies may remember your preferences, such as language or other
          display settings, to make future visits more convenient.
        </p>

        <h2 style={{ marginTop: "34px" }}>Managing cookies</h2>
        <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
          You can control or delete cookies through your browser settings. Most
          browsers allow you to block cookies, delete existing cookies, or receive
          a warning before cookies are stored.
        </p>

        <h2 style={{ marginTop: "34px" }}>Third-party cookies</h2>
        <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
          If our website uses services such as analytics tools, maps, booking
          tools, or embedded content, those third-party services may place their
          own cookies according to their privacy policies.
        </p>

        <h2 style={{ marginTop: "34px" }}>Contact</h2>
        <p style={{ lineHeight: 1.8, color: "#4b5563" }}>
          For questions about this Cookie Policy, please contact Marcopolo Hotel
          through our contact page.
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