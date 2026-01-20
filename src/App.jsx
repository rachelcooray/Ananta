import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import PhilosophyPage from './pages/PhilosophyPage';
import ServicesPage from './pages/ServicesPage';
import Focus from './pages/Focus';
import WorkWithUs from './pages/WorkWithUs';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <div className="antialiased min-h-screen bg-ananta-bg text-white selection:bg-ananta-gold selection:text-black">
        <div className="bg-noise"></div>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/focus" element={<Focus />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
