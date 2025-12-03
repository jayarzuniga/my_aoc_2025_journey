import { Link } from 'react-router-dom';

function Day2() {
  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Day Navigation */}
        <div className="flex justify-between items-center mb-8 bg-gray-900 border border-green-500 rounded-lg p-4">
          <Link 
            to="/day/[X-1]"
            className="text-green-500 px-4 py-2 border border-green-500 rounded hover:bg-green-500 hover:bg-opacity-10 transition"
          >
            ← Day [X-1]
          </Link>
          
          <Link 
            to="/all-days"
            className="text-green-500 hover:text-green-300 px-4 py-2 border border-green-500 rounded hover:bg-green-500 hover:bg-opacity-10 transition"
          >
            All Days
          </Link>
          
          <Link 
            to="/day/[X+1]"
            className="text-green-500 px-4 py-2 border border-green-500 rounded hover:bg-green-500 hover:bg-opacity-10 transition"
          >
            Day [X+1] →
          </Link>
        </div>

        {/* Add your content here */}
        
      </div>
    </div>
  );
}

export default Day2;