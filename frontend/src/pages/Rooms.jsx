import { Typography, Row, Col, Card } from "antd";

const { Title, Paragraph } = Typography;

const rooms = [
  {
    title: "Deluxe Room",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
    desc: "Spacious room with king-size bed, city view, and modern amenities.",
  },
  {
    title: "Executive Suite",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    desc: "Luxury suite with living area, premium interiors, and balcony view.",
  },
  {
    title: "Family Room",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    desc: "Perfect for families with extra space and multiple beds.",
  },
  {
    title: "Ocean View Room",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    desc: "Relax with stunning sea views and peaceful ambiance.",
  },
  {
    title: "Premium Suite",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    desc: "Top-tier luxury with private lounge and premium services.",
  },
  {
    title: "Budget Room",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    desc: "Affordable comfort with all essential facilities included.",
  },
];

const Rooms = () => {
  return (
    <div className="rooms-page">

      {/* HEADER */}
      <div className="rooms-header">
        <Title level={2}>Our Rooms</Title>
        <p>
          Choose from our range of comfortable and luxury rooms designed for your stay.
        </p>
      </div>

      {/* ROOMS GRID */}
      <Row gutter={[24, 24]}>
        {rooms.map((room, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
           <Card
  className="room-card"
  hoverable
  cover={
    <div className="room-img-wrapper">
      <img src={room.img} alt={room.title} className="room-img" />

      {/* HOVER OVERLAY */}
      <div className="room-overlay">
        <h4>{room.title}</h4>
        <p>{room.desc}</p>
      </div>
    </div>
  }
/>
          </Col>
        ))}
      </Row>



    </div>
  );
};

export default Rooms;