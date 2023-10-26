import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Hakkımızda from "./pages/Hakkımızda.jsx";
import Projeler from "./pages/Projeler.jsx";
import Referanslar from "./pages/Referanslar.jsx";
import İletişim from "./pages/İletişim.jsx";
import Hizmetler from './pages/Hizmetler.jsx'

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkımızda" element={<Hakkımızda />} />
        <Route path="/projeler" element={<Projeler />} />
        <Route path="/hizmetler" element={<Hizmetler />} />
        <Route path="/referanslar" element={<Referanslar />} />
        <Route path="/iletişim" element={<İletişim />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
