import { Layout, Button, Tooltip, Drawer } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";

const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const [open, setOpen] = useState(false); // ✅ drawer state

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "ROOMS", path: "/rooms" },
    { label: "FACILITIES", path: "/facilities" },
    { label: "GALLERY", path: "/gallery" },
    { label: "ABOUT", path: "/about" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <Header className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        <img
          className="logo-img"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="logo"
        />
        <span className="logo-text">MAJUN</span>
      </div>

      {/* CENTER (Desktop only) */}
      <div className="nav-center">
        {navLinks.map((link) => (
          <span
            key={link.path}
            className={`nav-link ${
              location.pathname === link.path ? "nav-link-active" : ""
            }`}
            onClick={() => navigate(link.path)}
          >
            {link.label}
          </span>
        ))}
      </div>

      {/* RIGHT */}
      <div className="nav-right">

        {/* 🌙 DARK MODE */}
        <Tooltip title={darkMode ? "Light mode" : "Dark mode"}>
          <button
            className="nav-icon-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </Tooltip>

        {/* 💻 DESKTOP BUTTON */}
        <Button
          type="primary"
          className="book-btn"
          onClick={() => navigate("/booking")}
        >
          Book Now
        </Button>

        {/* 📱 MOBILE MENU ICON */}
        <button
          className="menu-btn"
          onClick={() => setOpen(true)}
        >
          <FiMenu size={22} />
        </button>

      </div>

      {/* 📱 DRAWER MENU */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <p
              key={link.path}
              onClick={() => {
                navigate(link.path);
                setOpen(false);
              }}
            >
              {link.label}
            </p>
          ))}
        </div>
      </Drawer>

    </Header>
  );
};

export default Navbar;