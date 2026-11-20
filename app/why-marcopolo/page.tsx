import Link from "next/link";

export const metadata = {
  title: "Why Stay With Us | Marcopolo Hotel Corfu",
  description: "Discover comfortable rooms, a friendly atmosphere, a convenient location and great value at Marcopolo Hotel in Gouvia, Corfu.",
};

const reasons = [
  {
    title: "Comfortable rooms",
    paragraphs: [
      "A good day in Corfu begins with a comfortable place to rest. Our bright, practical rooms offer a welcoming setting where you can settle in, unpack and enjoy a little time to yourself. Whether you are travelling as a couple, with friends or as a family, you can choose a room to suit your stay.",
      "Rooms feature air conditioning, a private bathroom and a balcony, along with Wi-Fi and the essentials for a relaxed holiday. Start the morning with fresh air outside, return after a day of exploring, and enjoy a quiet space to recharge.",
    ],
  },
  {
    title: "Friendly atmosphere",
    paragraphs: [
      "At Marcopolo, we want your stay to feel easy and welcoming from the moment you arrive. Our relaxed atmosphere makes it simple to slow down, enjoy the island at your own pace and spend time with the people you came to see.",
      "Enjoy a peaceful moment by the pool, spend time in the courtyard or share a leisurely start to the day. If you have questions about your stay, our team is here to help you make the most of your time in Gouvia.",
    ],
  },
  {
    title: "Convenient location",
    paragraphs: [
      "Gouvia is a useful base for discovering Corfu, with the beach, marina, restaurants and local shops within reach. You can spend an easy day close to the hotel or set out to discover more of the island.",
      "Explore the streets and Venetian architecture of Corfu Town, visit the coastline around Paleokastritsa or simply enjoy the water and a meal nearby. After a day out, return to the comfort of a familiar place in Gouvia.",
    ],
  },
  {
    title: "Great value for money",
    paragraphs: [
      "We believe a memorable holiday starts with the things that matter: a comfortable room, a welcoming atmosphere and a convenient place to explore from. Marcopolo brings those essentials together for a straightforward and enjoyable stay.",
      "Whether you are planning a short break or a longer Corfu holiday, our rooms and shared spaces provide a practical base for your time on the island. Contact us for availability and the details of your stay.",
    ],
  },
];

export default function WhyMarcopoloPage() {
  return (
    <div className="cap-subpage why-page">
      <div className="why-page-inner">
        <header className="why-page-header">
          <p className="eyebrow">Marcopolo Hotel · Gouvia, Corfu</p>
          <h1>Why stay with us<span>?</span></h1>
          <p>A comfortable place to unwind, a welcoming atmosphere and a convenient starting point for discovering Corfu.</p>
        </header>
        <div className="why-page-reasons">
          {reasons.map((reason, index) => (
            <section className="why-page-reason" key={reason.title}>
              <div className="why-page-reason-title">
                <span className="eyebrow">{String(index + 1).padStart(2, "0")} / 04</span>
                <h2>{reason.title}</h2>
              </div>
              <div className="why-page-copy">
                {reason.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
        <div className="why-page-cta">
          <div><p className="eyebrow">Plan your stay</p><h2>Make yourself at home in Corfu.</h2></div>
          <div className="why-page-actions">
            <Link href="/rooms" className="cap-pill-ghost">Explore our rooms</Link>
            <Link href="/contact" className="cap-pill"><span>Contact us</span><span className="cap-circle">↗</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
