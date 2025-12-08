import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllDays from './pages/AllDays';
import About from './pages/About';

{/* Days */}
import Day1 from './pages/days/Day1';
import Day5 from './pages/days/Day5';


function App() {
  return (
    <Router basename="/my_aoc_2025_journey">
      <div className="min-h-screen flex flex-col bg-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Days */}
            <Route path="/day/1" element={<Day1 />} />
            {/* <Route path="/day/2" element={<Day2 />} />
            <Route path="/day/3" element={<Day3 />} />
            <Route path="/day/4" element={<Day4 />} /> */}
            <Route path="/day/5" element={<Day5 />} />
            {/* <Route path="/day/6" element={<Day6 />} /> */}
            {/* <Route path="/day/7" element={<Day7 />} />
            <Route path="/day/8" element={<Day8 />} />
            <Route path="/day/9" element={<Day9 />} />
            <Route path="/day/10" element={<Day10 />} />
            <Route path="/day/11" element={<Day11 />} />
            <Route path="/day/12" element={<Day12 />} />
            <Route path="/day/13" element={<Day13 />} />
            <Route path="/day/14" element={<Day14 />} />
            <Route path="/day/15" element={<Day15 />} />
            <Route path="/day/16" element={<Day16 />} />
            <Route path="/day/17" element={<Day17 />} />
            <Route path="/day/18" element={<Day18 />} />
            <Route path="/day/19" element={<Day19 />} />
            <Route path="/day/20" element={<Day20 />} />
            <Route path="/day/21" element={<Day21 />} />
            <Route path="/day/22" element={<Day22 />} />
            <Route path="/day/23" element={<Day23 />} />
            <Route path="/day/24" element={<Day24 />} /> */}

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
