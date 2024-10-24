// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  // JavaScript for the custom cursor movement
  useEffect(() => {
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('custom-cursor');

    const cursorCircle = document.createElement('div');
    cursorCircle.classList.add('custom-cursor-circle');

    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorCircle);

    // Move the cursor elements to follow the real cursor
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      // Set dot position
      cursorDot.style.transform = `translate3d(${x - 5}px, ${y - 5}px, 0)`;

      // Set circle position
      cursorCircle.style.transform = `translate3d(${x - 20}px, ${y - 20}px, 0)`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cursorDot.remove();
      cursorCircle.remove();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
