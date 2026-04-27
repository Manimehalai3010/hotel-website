import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const { Content, Footer } = Layout;

const stats = [
  { value: "120+", label: "Luxury Rooms" },
  { value: "5★", label: "Star Rating" },
  { value: "24/7", label: "Service" },
  { value: "5000+", label: "Happy Guests" },
];

const features = [
  {
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    title: "Luxury Rooms",
    desc: "Spacious rooms with modern interiors, king-size beds and city views.",
    icon: "🛏️",
  },
  {
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    title: "Infinity Pool",
    desc: "Relax in our rooftop infinity pool with breathtaking skyline views.",
    icon: "🏊",
  },
  {
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    title: "Fine Dining",
    desc: "Enjoy world-class cuisine prepared by top chefs.",
    icon: "🍽️",
  },
  {
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    title: "Spa & Wellness",
    desc: "Rejuvenate your body with our premium spa treatments.",
    icon: "💆",
  },
  {
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    title: "Free WiFi",
    desc: "High-speed internet available in all rooms and common areas.",
    icon: "📶",
  },
  {
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    title: "Airport Pickup",
    desc: "Convenient airport transfers for a smooth arrival.",
    icon: "🚗",
  },
];

const testimonials = [
  {
    name: "Arun Kumar",
    role: "Guest",
    initials: "AK",
    text: "Amazing stay! The rooms were clean and the service was top-notch.",
  },
  {
    name: "Meena R",
    role: "Traveler",
    initials: "MR",
    text: "Beautiful hotel with great food and a relaxing atmosphere.",
  },
  {
    name: "John David",
    role: "Tourist",
    initials: "JD",
    text: "Loved the pool and spa. Definitely visiting again!",
  },
];

const GlassCard = ({ img, title, desc, icon, delay }) => (
  <div className="glass-feature-card" style={{ animationDelay: `${delay}ms` }}>
    <div className="glass-card-img-wrap">
      <img src={img} alt={title} className="glass-card-img" />
      <div className="glass-card-icon">{icon}</div>
    </div>
    <div className="glass-card-body">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </div>
);

const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <Layout style={{ background: "var(--bg-main)" }}>
        <Content>

          {/* ── HERO WITH VIDEO ── */}
          <section className="hero-video-section">
            <video
              ref={videoRef}
              className="hero-video"
              src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="hero-video-overlay" />
            <div className="hero-content">
              <div className="hero-badge reveal">Luxury Hotel</div>

              <h1 className="hero-title reveal">
                Experience Comfort<br />
                <span className="hero-title-accent">Like Never Before</span>
              </h1>

              <p className="hero-subtitle reveal">
                Book your stay with us and enjoy world-class hospitality,
                luxury rooms, and premium facilities.
              </p>

              <div className="hero-actions reveal">
                <button className="btn-hero-primary" onClick={() => navigate("/contact")}>
                  Get Started Free
                </button>
                <button className="btn-hero-ghost" onClick={() => navigate("/facilities")}>
                  See How It Works
                </button>
              </div>
            </div>

            {/* Floating stats */}
            <div className="hero-stats-bar reveal">
              {stats.map((s, i) => (
                <div className="hero-stat-item" key={i}>
                  <span className="hero-stat-value">{s.value}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── FEATURES GRID ── */}
          <section className="features-section">
            <div className="section-header reveal">
              <span className="section-tag">What We Offer</span>
              <h2>Everything you need for a perfect stay</h2>
              <p>One hotel. All the comforts. Zero compromises.</p>
            </div>
            <div className="features-grid">
              {features.map((item, i) => (
                <GlassCard key={i} {...item} delay={i * 80} />
              ))}
            </div>
          </section>

          {/* ── SHOWCASE ── */}
          <section className="showcase-section reveal">
            {/* LEFT CONTENT */}
            <div className="showcase-text">
              <span className="section-tag">Luxury Experience</span>
              <h2>Enjoy a Comfortable & Memorable Stay</h2>
              <p>
                Experience world-class hospitality with elegant rooms, modern amenities,
                and personalized services designed for your comfort.
              </p>
              <ul className="showcase-list">
                <li><span className="check">✓</span> Spacious luxury rooms</li>
                <li><span className="check">✓</span> 24/7 room service</li>
                <li><span className="check">✓</span> Premium dining experience</li>
                <li><span className="check">✓</span> Relaxing spa & wellness</li>
              </ul>
              <button
                className="btn-hero-primary"
                onClick={() => navigate("/contact")}
              >
                Book Your Stay
              </button>
            </div>

            {/* RIGHT VIDEO */}
            <div className="showcase-video-wrap">
              <video
                className="showcase-video"
                src="https://www.pexels.com/download/video/33625582/"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="showcase-video-overlay"></div>
            </div>
          </section>

          {/* ── TESTIMONIALS ── */}
          <section className="testimonials-section">
            <div className="section-header reveal">
              <span className="section-tag">Client Reviews</span>
              <h2>What our guests say</h2>
              <p>Trusted by thousands of happy travellers.</p>
            </div>
            <div className="testimonials-track-wrapper">
              <div className="testimonials-track">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div className="testimonial-card" key={i}>
                    <div className="testimonial-stars">{"★".repeat(5)}</div>
                    <p className="testimonial-text">"{t.text}"</p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar">{t.initials}</div>
                      <div>
                        <p className="testimonial-name">{t.name}</p>
                        <p className="testimonial-role">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA BANNER ── */}
          <section className="cta-section reveal">
            <div className="cta-glass">
              <h2>Ready for an unforgettable stay?</h2>
              <p>Join thousands of guests who have experienced our hospitality.</p>
              <div className="hero-actions">
                <button className="btn-hero-primary" onClick={() => navigate("/contact")}>
                  Book Now
                </button>
                <button className="btn-hero-ghost" onClick={() => navigate("/contact")}>
                  Talk to Us
                </button>
              </div>
            </div>
          </section>

        </Content>
      </Layout>
    </div>
  );
};

export default Home;