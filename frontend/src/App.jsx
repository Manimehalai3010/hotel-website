import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Facilities from "./pages/Facilities";
import Rooms from "./pages/Rooms";
import Gallery from "./pages/Gallery";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
       
        {/* PROTECTED */}
        <Route
          element={
           
              <AppLayout />
           
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;