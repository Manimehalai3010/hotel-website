import { Layout } from "antd";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const { Content, Footer } = Layout;

const AppLayout = () => {
  return (
    <Layout>
      <Navbar />

      <Content className="main-content">
        <Outlet />
      </Content>

      <Footer style={{ textAlign: "center" }} className="footer-content">
        © 2026 MyApp
      </Footer>
    </Layout>
  );
};

export default AppLayout;