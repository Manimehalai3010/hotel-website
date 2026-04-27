import { Typography, Row, Col } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div className="about-page">

      {/* HERO HEADER */}
      <div className="about-hero">
        <div className="about-overlay">
          <Title level={2} className="about-title">
            Experience Luxury Like Never Before
          </Title>
          <Paragraph className="about-subtitle">
            Where elegance meets comfort in the heart of your journey.
          </Paragraph>
        </div>
      </div>

      {/* CONTENT */}
      <div className="about-content">
        <Row gutter={[50, 50]} align="middle">

          {/* IMAGE */}
          <Col xs={24} md={12}>
            <div className="about-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"
                alt="hotel"
                className="about-img"
              />
            </div>
          </Col>

          {/* TEXT */}
          <Col xs={24} md={12}>
            <h3 className="about-section-title">Luxury Redefined</h3>

            <p className="about-text">
              Our hotel blends timeless elegance with modern comfort.
              Whether you're traveling for business or relaxation,
              we create an unforgettable experience tailored just for you.
            </p>

            <ul className="about-list">
              <li><CheckCircleOutlined /> 24/7 Room Service</li>
              <li><CheckCircleOutlined /> Free High-Speed WiFi</li>
              <li><CheckCircleOutlined /> Swimming Pool & Spa</li>
              <li><CheckCircleOutlined /> Multi-cuisine Restaurant</li>
              <li><CheckCircleOutlined /> Airport Pickup & Drop</li>
            </ul>
          </Col>

        </Row>
      </div>

      {/* STATS SECTION */}
      <div className="about-stats">
        <div>
          <h2>500+</h2>
          <p>Happy Guests</p>
        </div>
        <div>
          <h2>120+</h2>
          <p>Luxury Rooms</p>
        </div>
        <div>
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>
      </div>

    </div>
  );
};

export default About;