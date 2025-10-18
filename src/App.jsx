import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import HomePage from './pages/Home';
import About from './pages/About';
import ScrollToTop from './pages/ScrollToTop';
import Gallery from './pages/Gallery';


function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 Automatically scrolls to top on route change */}
      <Header />

      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
