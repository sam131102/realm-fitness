import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Memberships from "./pages/Memberships";
import Menu from "./pages/Menu";
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Accessibility from './pages/Accessibility';
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/memberships" element={<Memberships/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
