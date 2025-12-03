import { Link } from 'react-router-dom';

function AllDays() {
  const days = [
    {
      day: 1,
      title: "Linux CLI - Shells & Bells",
      difficulty: "Intermediate",
      topics: ["Linux", "Git", "GPG", "Steganography"],
      completed: true
    },
    // Add more days as they're completed
  ];

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-8 mb-8 glow-green-strong">
          <h1 className="text-4xl font-bold text-green-500 text-center mb-4 matrix-text">
            All Days Overview
          </h1>
          <p className="text-gray-400 text-center">
            Browse all available walkthroughs and side quests
          </p>
        </div>

        {/* Days List */}
        <div className="space-y-6">
          {days.map((day) => (
            <Link
              key={day.day}
              to={day.completed ? `/day/${day.day}` : '#'}
              className={`
                block bg-gray-900 border rounded-lg p-6 transition
                ${day.completed 
                  ? 'border-green-500 hover:bg-green-500 hover:bg-opacity-10 glow-green' 
                  : 'border-gray-700 opacity-50 cursor-not-allowed'
                }
              `}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl font-bold text-green-500">
                      Day {day.day}
                    </span>
                    <h3 className="text-xl font-bold text-green-400">
                      {day.title}
                    </h3>
                  </div>
                  
                  <div className="flex gap-2 flex-wrap mb-3">
                    <span className="bg-black border border-green-500 text-green-500 px-3 py-1 rounded text-sm">
                      {day.difficulty}
                    </span>
                    {day.topics.map((topic, index) => (
                      <span 
                        key={index}
                        className="bg-black border border-green-500 text-green-500 px-3 py-1 rounded text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-gray-400">
                    {day.completed ? '✓ Walkthrough Available' : '🔒 Coming Soon'}
                  </div>
                </div>
                
                <div className="text-4xl">
                  {day.completed ? '🎁' : '🔒'}
                </div>
              </div>
            </Link>
          ))}
          
          {/* Placeholder for remaining days */}
          {[...Array(24)].map((_, index) => (
            <div
              key={index + 2}
              className="bg-gray-900 border border-gray-700 rounded-lg p-6 opacity-50"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl font-bold text-gray-600">
                      Day {index + 2}
                    </span>
                    <h3 className="text-xl font-bold text-gray-600">
                      Coming Soon...
                    </h3>
                  </div>
                  
                  <div className="text-gray-600">
                    🔒 Locked
                  </div>
                </div>
                
                <div className="text-4xl">🔒</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default AllDays;