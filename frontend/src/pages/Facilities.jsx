import { Typography, Collapse } from "antd";
import {
  WifiOutlined,
  CoffeeOutlined,
  CarOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const Facilities = () => {
  const facilities = [
    {
      icon: <WifiOutlined />,
      title: "Free High-Speed WiFi",
      desc: "Stay connected with complimentary high-speed internet available throughout the hotel.",
    },
    {
      icon: <CoffeeOutlined />,
      title: "Restaurant & Dining",
      desc: "Enjoy delicious multi-cuisine dishes prepared by our expert chefs in a luxurious setting.",
    },
    {
      icon: <HomeOutlined />,
      title: "Luxury Rooms",
      desc: "Experience comfort with fully furnished rooms, modern interiors, and 24/7 room service.",
    },
    {
      icon: <CarOutlined />,
      title: "Free Parking",
      desc: "Secure and spacious parking facility available for all guests at no extra cost.",
    },
    {
      icon: <span>🏊</span>,
      title: "Swimming Pool",
      desc: "Relax and unwind in our temperature-controlled swimming pool.",
    },
    {
      icon: <span>💆</span>,
      title: "Spa & Wellness",
      desc: "Rejuvenate your body and mind with our premium spa treatments.",
    },
  ];

  const facilityImages = [
  {
    title: "Free High-Speed WiFi",
    img: "https://images.unsplash.com/photo-1645725677294-ed0843b97d5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMHdpZml8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Restaurant & Dining",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
  },
  {
    title: "Luxury Rooms",
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800",
  },
  {
    title: "Free Parking",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
  },
  {
    title: "Swimming Pool",
    img: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN3aW1taW5nJTIwcG9vbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Spa & Wellness",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800",
  },
];

  return (
    <div className="facilities-page">

      {/* HEADER */}
      <div className="facilities-header">
        <Title level={2}>Our Facilities</Title>
        <p>
          Enjoy world-class amenities designed for your comfort and relaxation.
        </p>
      </div>

      {/* ACCORDION */}
      <Collapse accordion className="facilities-accordion">
        {facilities.map((item, index) => (
          <Panel
            header={
              <div className="facility-title">
                <span className="facility-icon">{item.icon}</span>
                {item.title}
              </div>
            }
            key={index}
          >
            <Paragraph>{item.desc}</Paragraph>
          </Panel>
        ))}
      </Collapse>

     
<div className="facilities-gallery">
  <h3>Explore Our Amenities</h3>

 <div className="facilities-grid">
  {facilityImages.map((item, index) => (
    <div className="facility-card" key={index}>
      <img src={item.img} alt={item.title} />

      <div className="facility-overlay">
        <h4>{item.title}</h4>
      </div>
    </div>
  ))}
</div>
</div>

<div className="facilities-cta">
  <h3>Ready to experience luxury?</h3>
  <p>Book your stay now and enjoy premium comfort.</p>

  <button
    className="btn-hero-primary"
    onClick={() => window.location.href = "/contact"}
  >
    Contact / Book Now
  </button>
</div>

    </div>
  );
};

export default Facilities;