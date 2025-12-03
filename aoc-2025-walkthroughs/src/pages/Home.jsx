import { Link } from 'react-router-dom';

function Home() {
  const completedDays = [1];

  const allDays = [
    { day: 1, title: "Linux CLI - Shells & Bells", difficulty: "Intermediate", topics: ["Linux", "Git", "GPG"], completed: true },
    // Days 2-25 are locked for now
    ...Array.from({ length: 24 }, (_, i) => ({
      day: i + 2,
      title: "Coming Soon...",
      difficulty: "TBD",
      topics: [],
      completed: false
    }))
  ];

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-12 mb-12 glow-green-strong text-center relative overflow-hidden">
          {/* Animated Background Effect */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 text-green-500 text-9xl">🎄</div>
            <div className="absolute bottom-0 right-0 text-green-500 text-9xl">🎁</div>
          </div>
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-green-500 mb-4 matrix-text">
              🎄 Advent of Cyber 2025 🎄
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-6">
              Complete Walkthroughs & Side Quest Solutions
            </p>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Welcome to your comprehensive guide for TryHackMe's Advent of Cyber 2025! 
              Dive deep into cybersecurity with detailed walkthroughs, command references, 
              and real-world security insights for every challenge.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/all-days"
                className="bg-green-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-green-400 transition glow-green-strong"
              >
                Browse All Days →
              </Link>
              <Link 
                to="/about"
                className="bg-black border-2 border-green-500 text-green-500 px-6 py-3 rounded-lg font-bold hover:bg-green-500 hover:bg-opacity-10 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-900 border border-green-500 rounded-lg p-6 text-center glow-green transform hover:scale-105 transition-transform">
            <div className="text-5xl font-bold text-green-500 mb-2">{completedDays.length}</div>
            <div className="text-gray-400">Days Completed</div>
          </div>
          <div className="bg-gray-900 border border-green-500 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-5xl font-bold text-green-500 mb-2">25</div>
            <div className="text-gray-400">Total Days</div>
          </div>
          <div className="bg-gray-900 border border-green-500 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-5xl font-bold text-green-500 mb-2">{Math.round((completedDays.length / 25) * 100)}%</div>
            <div className="text-gray-400">Progress</div>
          </div>
          <div className="bg-gray-900 border border-green-500 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-5xl font-bold text-green-500 mb-2">{25 - completedDays.length}</div>
            <div className="text-gray-400">Days Remaining</div>
          </div>
        </div>

        {/* Featured Walkthrough */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-green-500 border-b-2 border-green-500 pb-2">
              ⭐ Featured Walkthrough
            </h2>
          </div>
          
          <Link 
            to="/day/1" 
            className="block bg-gray-900 border-2 border-green-500 rounded-lg p-8 hover:bg-green-500 hover:bg-opacity-10 transition glow-green-strong group"
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">🎄</span>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Day 1</div>
                    <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition">
                      Linux CLI - Shells & Bells
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Embark on an exciting side quest that challenges your Linux skills! Master environment variables, 
                  Git history forensics, and image steganography as you hunt for hidden easter eggs and decrypt 
                  McSkidy's secret messages. Perfect for intermediate learners looking to level up their command-line expertise.
                </p>
                
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="bg-black border border-green-500 text-green-500 px-3 py-1 rounded text-sm">
                    Intermediate
                  </span>
                  <span className="bg-black border border-green-500 text-green-500 px-3 py-1 rounded text-sm">
                    Linux
                  </span>
                  <span className="bg-black border border-green-500 text-green-500 px-3 py-1 rounded text-sm">
                    Git Forensics
                  </span>
                  <span className="bg-black border border-green-500 text-green-500 px-3 py-1 rounded text-sm">
                    GPG Encryption
                  </span>
                  <span className="bg-black border border-green-500 text-green-500 px-3 py-1 rounded text-sm">
                    Steganography
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>📖 10+ Steps</span>
                  <span>⏱️ 45-60 min</span>
                  <span>🏆 Side Quest</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center bg-black border border-green-500 rounded-lg p-6 min-w-[120px]">
                <div className="text-6xl mb-2">🎁</div>
                <div className="text-green-500 font-bold">Available Now</div>
              </div>
            </div>
          </Link>
        </div>

        {/* Calendar Grid */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold text-green-500 border-b-2 border-green-500 pb-2">
              🗓️ Challenge Calendar
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allDays.map((day) => {
              const isCompleted = day.completed;
              
              return (
                <Link
                  key={day.day}
                  to={isCompleted ? `/day/${day.day}` : '#'}
                  className={`
                    relative aspect-square rounded-lg border-2 flex flex-col items-center justify-center
                    transition-all duration-300
                    ${isCompleted 
                      ? 'border-green-500 bg-gray-800 hover:bg-green-500 hover:bg-opacity-20 glow-green cursor-pointer transform hover:scale-105' 
                      : 'border-gray-700 bg-gray-800 cursor-not-allowed opacity-50 hover:opacity-60'
                    }
                  `}
                  onClick={(e) => !isCompleted && e.preventDefault()}
                >
                  <div className={`text-4xl font-bold mb-2 ${isCompleted ? 'text-green-500' : 'text-gray-600'}`}>
                    {day.day}
                  </div>
                  <div className={`text-xs ${isCompleted ? 'text-gray-400' : 'text-gray-600'}`}>
                    {isCompleted ? '✓ Complete' : '🔒 Locked'}
                  </div>
                  {isCompleted && (
                    <div className="absolute top-2 right-2 text-2xl">
                      🎁
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* What You'll Learn Section */}
        <div className="mt-12 bg-gray-900 border border-green-500 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-green-500 mb-6 border-b-2 border-green-500 pb-4">
            📚 What You'll Learn
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-green-500 transition">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Command Line Mastery</h3>
              <p className="text-gray-400 text-sm">
                Master essential Linux commands, shell scripting, and terminal navigation techniques used by professionals.
              </p>
            </div>

            <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-green-500 transition">
              <div className="text-4xl mb-3">🔐</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Encryption & Security</h3>
              <p className="text-gray-400 text-sm">
                Learn GPG encryption, password cracking, and secure data handling practices for real-world scenarios.
              </p>
            </div>

            <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-green-500 transition">
              <div className="text-4xl mb-3">🕵️</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Digital Forensics</h3>
              <p className="text-gray-400 text-sm">
                Discover hidden data through Git history analysis, steganography, and forensic investigation techniques.
              </p>
            </div>

            <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-green-500 transition">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Web Security</h3>
              <p className="text-gray-400 text-sm">
                Explore web vulnerabilities, penetration testing, and secure coding practices to protect applications.
              </p>
            </div>

            <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-green-500 transition">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Reconnaissance</h3>
              <p className="text-gray-400 text-sm">
                Master enumeration techniques, information gathering, and systematic approach to security assessments.
              </p>
            </div>

            <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-green-500 transition">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Best Practices</h3>
              <p className="text-gray-400 text-sm">
                Learn industry-standard security practices, ethical hacking guidelines, and responsible disclosure.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gray-900 border-2 border-green-500 rounded-lg p-8 text-center glow-green-strong">
          <h2 className="text-3xl font-bold text-green-500 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Each walkthrough includes detailed explanations, command references, and security insights. 
            Challenge yourself, learn new skills, and become a better security professional!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/day/1"
              className="bg-green-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-green-400 transition inline-flex items-center gap-2"
            >
              Start with Day 1 🎯
            </Link>
            <a 
              href="https://tryhackme.com/christmas"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black border-2 border-green-500 text-green-500 px-8 py-3 rounded-lg font-bold hover:bg-green-500 hover:bg-opacity-10 transition inline-flex items-center gap-2"
            >
              Visit TryHackMe 🚀
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;