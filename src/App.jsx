import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router basename="/FarhanTeaches">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
