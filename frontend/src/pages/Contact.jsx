import {
  Layout,
  Input,
  Button,
  Form,
  message,
  ConfigProvider,
  DatePicker,
  Select,
  theme
} from "antd";

import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  UserOutlined
} from "@ant-design/icons";

import { useEffect, useState } from "react";

const { Content } = Layout;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const roomPrices = {
  standard: "₹2000 / night",
  deluxe: "₹3500 / night",
  suite: "₹5000 / night"
};

const Contact = () => {
  const [form] = Form.useForm();
  const [isDark, setIsDark] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");

    check();

    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const onFinish = (values) => {
    console.log(values);

    message.success({
      content: "🎉 Booking request sent successfully!",
      duration: 3
    });

    form.resetFields();
    setSelectedRoom(null);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
      }}
    >
      <Layout>
        <Content className="contact-page">

          <div className="contact-wrapper">

            {/* LEFT PANEL */}
            <div className="contact-left-panel">
              <h2>Book Your Stay</h2>
              <p>Luxury, comfort & unforgettable experience.</p>

              <div className="contact-info-list">

                <div className="contact-info-item">
                  <EnvironmentOutlined />
                  <div>
                    <span>Location</span>
                    <p>Madurai, Tamil Nadu</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <PhoneOutlined />
                  <div>
                    <span>Reservations</span>
                    <p>+91 98765 43210</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <MailOutlined />
                  <div>
                    <span>Email</span>
                    <p>booking@hotel.com</p>
                  </div>
                </div>

              </div>

              <div className="hotel-features">
                <p>✔ Free WiFi</p>
                <p>✔ Swimming Pool</p>
                <p>✔ 24/7 Room Service</p>
                <p>✔ Luxury Rooms</p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="contact-right-panel">
              <h3>Reserve Your Room</h3>
              <p>Select your dates & preferences</p>

              <Form form={form} layout="vertical" onFinish={onFinish}>

                <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
                  <Input prefix={<UserOutlined />} placeholder="Enter your name" />
                </Form.Item>

                <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
                  <Input prefix={<MailOutlined />} placeholder="Enter your email" />
                </Form.Item>

                <Form.Item name="phone" label="Phone">
                  <Input prefix={<PhoneOutlined />} placeholder="+91 XXXXX XXXXX" />
                </Form.Item>

                <Form.Item name="dates" label="Check-in / Check-out" rules={[{ required: true }]}>
                  <RangePicker style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item name="roomType" label="Room Type" rules={[{ required: true }]}>
                  <Select
                    placeholder="Select room"
                    onChange={(val) => setSelectedRoom(val)}
                  >
                    <Select.Option value="standard">Standard Room</Select.Option>
                    <Select.Option value="deluxe">Deluxe Room</Select.Option>
                    <Select.Option value="suite">Luxury Suite</Select.Option>
                  </Select>
                </Form.Item>

                {/* 💡 PRICE PREVIEW */}
                {selectedRoom && (
                  <div className="price-preview">
                    Price: {roomPrices[selectedRoom]}
                  </div>
                )}

                <Form.Item name="guests" label="Guests" rules={[{ required: true }]}>
                  <Select placeholder="Guests">
                    <Select.Option value="1">1 Guest</Select.Option>
                    <Select.Option value="2">2 Guests</Select.Option>
                    <Select.Option value="3">3 Guests</Select.Option>
                    <Select.Option value="4">4 Guests</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item name="message" label="Special Requests">
                  <TextArea rows={3} placeholder="Any special requests..." />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block size="large">
                    Book Now
                  </Button>
                </Form.Item>

              </Form>
            </div>

          </div>

          {/* LOCATION */}
          <div className="location-section">
            <h2>Our Location</h2>
            <p>Find us in the heart of Madurai</p>

            <div className="map-container">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Madurai,TamilNadu&output=embed"
                loading="lazy"
              />
            </div>
          </div>

        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Contact;