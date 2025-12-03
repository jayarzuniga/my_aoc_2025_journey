import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Day1 from './pages/Day1';
import AllDays from './pages/AllDays';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/day/1" element={<Day1 />} />
            <Route path="/all-days" element={<AllDays />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;