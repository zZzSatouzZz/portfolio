import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cursor from './components/Cursor.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import './index.css';

export default function App() {
  return (
    <Router>
      <Cursor />
      <div className="min-h-screen flex flex-col bg-[#0A0A0F] text-white">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/"         element={<Home />}     />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about"    element={<About />}    />
            <Route path="/contact"  element={<Contact />}  />
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
                <p className="font-mono text-7xl text-white/10 mb-4">404</p>
                <p className="text-white/30 mb-6">Trang không tồn tại</p>
                <a href="/" className="btn-accent">Về Trang Chủ</a>
              </div>
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
