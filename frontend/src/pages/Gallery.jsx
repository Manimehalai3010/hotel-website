import { Typography, Row, Col, Image } from "antd";

const { Title, Paragraph } = Typography;

const images = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
];

const Gallery = () => {
  return (
    <div className="gallery-page">

      <div className="gallery-header">
        <Title level={2}>Hotel Gallery</Title>
        <p>
          Explore our beautiful rooms, luxury interiors, and premium facilities.
        </p>
      </div>

      <Row gutter={[16, 16]}>
        {images.map((img, i) => (
          <Col xs={24} sm={12} md={8} key={i}>
            <div className="gallery-item">
              <Image src={img} alt="hotel" preview />
            </div>
          </Col>
        ))}
      </Row>

    </div>
  );
};

export default Gallery;