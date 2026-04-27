import { useNavigate } from "react-router-dom";

const facilities = [
  {
    icon: "📶",
    title: "Free High-Speed WiFi",
    desc: "Stay connected with complimentary high-speed internet available in every room and common area.",
    img: "https://images.unsplash.com/photo-1645725677294-ed0843b97d5c?w=600&auto=format&fit=crop&q=60",
  },
  {
    icon: "🍽️",
    title: "Restaurant & Dining",
    desc: "Enjoy delicious multi-cuisine dishes prepared by our expert chefs in a luxurious setting.",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
  },
  {
    icon: "🛏️",
    title: "Luxury Rooms",
    desc: "Experience comfort with fully furnished rooms, modern interiors, and 24/7 room service.",
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800",
  },
  {
    icon: "🚗",
    title: "Free Parking",
    desc: "Secure and spacious parking facility available for all guests at no extra cost.",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
  },
  {
    icon: "🏊",
    title: "Swimming Pool",
    desc: "Relax and unwind in our temperature-controlled infinity pool with stunning views.",
    img: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&auto=format&fit=crop&q=60",
  },
  {
    icon: "💆",
    title: "Spa & Wellness",
    desc: "Rejuvenate your body and mind with our premium spa treatments and therapists.",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800",
  },
];

const stats = [
  { value: "6+", label: "Amenities" },
  { value: "24/7", label: "Service" },
  { value: "5★", label: "Rated" },
  { value: "100%", label: "Guest Satisfaction" },
];

const Facilities = () => {
  const navigate = useNavigate();

  return (
    <div className="fac-page">

      {/* ── HERO BANNER ── */}
      <div className="fac-hero">
        <div className="fac-hero-overlay" />
        <div className="fac-hero-content">
          <span className="section-tag">What We Offer</span>
          <h1 className="fac-hero-title">World-Class Facilities</h1>
          <p className="fac-hero-sub">
            Every detail crafted for your comfort, relaxation, and enjoyment.
          </p>
        </div>

        {/* Stats row */}
        <div className="fac-stats-bar">
          {stats.map((s, i) => (
            <div className="fac-stat" key={i}>
              <span className="fac-stat-value">{s.value}</span>
              <span className="fac-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── INTRO ── */}
      <div className="fac-intro">
        <span className="section-tag">Our Amenities</span>
        <h2>Everything You Need Under One Roof</h2>
        <p>From high-speed connectivity to fine dining and wellness — MaJun Hotel delivers an unmatched experience at every turn.</p>
      </div>

      {/* ── FACILITIES CARDS GRID ── */}
      <div className="fac-grid-wrapper">
        <div className="fac-cards-grid">
          {facilities.map((item, i) => (
            <div className="fac-card" key={i}>
              <div className="fac-card-img-wrap">
                <img src={item.img} alt={item.title} className="fac-card-img" />
                <div className="fac-card-img-overlay" />
                <div className="fac-card-icon">{item.icon}</div>
              </div>
              <div className="fac-card-body">
                <h3 className="fac-card-title">{item.title}</h3>
                <p className="fac-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SHOWCASE STRIP ── */}
      <div className="fac-showcase">
        <div className="fac-showcase-text">
          <span className="section-tag">Luxury Experience</span>
          <h2>Designed for Your Comfort</h2>
          <p>
            Our facilities are maintained to the highest standards — clean,
            modern, and always ready for you. Whether it's a business trip or
            a family vacation, we've got every need covered.
          </p>
          <ul className="fac-check-list">
            <li><span className="check">✓</span> In-room premium amenities</li>
            <li><span className="check">✓</span> Multilingual concierge service</li>
            <li><span className="check">✓</span> Daily housekeeping</li>
            <li><span className="check">✓</span> Complimentary breakfast</li>
          </ul>
        </div>
        <div className="fac-showcase-imgs">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
            alt="Spa"
            className="fac-showcase-img fac-img-top"
          />
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
            alt="Pool"
            className="fac-showcase-img fac-img-bottom"
          />
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="fac-cta">
        <div className="fac-cta-inner">
          <span className="section-tag">Ready to Visit?</span>
          <h2>Experience Luxury Like Never Before</h2>
          <p>Book your stay and enjoy all our premium facilities.</p>
          <div className="fac-cta-btns">
            <button className="btn-hero-primary" onClick={() => navigate("/contact")}>
              Book Now
            </button>
            <button className="btn-hero-ghost fac-ghost" onClick={() => navigate("/rooms")}>
              View Rooms
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Facilities;