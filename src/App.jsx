import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home/Home";
import Events from "./pages/Eventss/Events";
import Register from "./pages/Register/Register";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/SDU-events/" element={<Home />} />
            <Route path="/SDU-events/events" element={<Events />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
