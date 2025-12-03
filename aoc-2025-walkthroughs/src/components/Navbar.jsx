import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 border-b-2 border-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-green-500 matrix-text hover:text-green-300 transition">
            🎄 Advent of Cyber 2025
          </Link>
          
          <div className="flex gap-6">
            <Link 
              to="/" 
              className="text-green-500 hover:text-green-300 transition font-medium"
            >
              Home
            </Link>
            <Link 
              to="/all-days" 
              className="text-green-500 hover:text-green-300 transition font-medium"
            >
              All Days
            </Link>
            <Link 
              to="/about" 
              className="text-green-500 hover:text-green-300 transition font-medium"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;