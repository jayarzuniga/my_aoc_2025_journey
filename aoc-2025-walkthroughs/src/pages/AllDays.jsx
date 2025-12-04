import { Link } from 'react-router-dom';
import { FaLock, FaCheckCircle, FaClock, FaFire } from 'react-icons/fa';

function AllDays() {
  const days = [
    {
      day: 1,
      title: "Linux CLI - Shells & Bells",
      difficulty: "Intermediate",
      topics: ["Linux", "Git", "GPG", "Steganography"],
      completed: true,
      duration: "45-60 min",
      type: "Side Quest"
    },
    // Add more days as they're completed
  ];

  // Placeholder days (2-25)
  const placeholderDays = Array.from({ length: 24 }, (_, i) => ({
    day: i + 2,
    title: "Coming Soon...",
    difficulty: "TBD",
    topics: [],
    completed: false,
    duration: "TBD",
    type: "Challenge"
  }));

  const allDays = [...days, ...placeholderDays];

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'Intermediate': return 'text-primary bg-primary/20 border-primary/30';
      case 'Hard': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-text-muted bg-background-dark border-ui-border';
    }
  };

  return (
    <div className="min-h-screen bg-background-darker py-12 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-3xl p-8 mb-12 shadow-2xl text-center relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-4">
              All Days <span className="text-primary">Overview</span>
            </h1>
            <p className="text-text-secondary text-lg">
              Browse all available walkthroughs and side quests
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-4 text-center">
            <div className="text-3xl font-black text-primary mb-1">{days.length}</div>
            <div className="text-xs text-text-secondary">Completed</div>
          </div>
          <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-4 text-center">
            <div className="text-3xl font-black text-primary mb-1">25</div>
            <div className="text-xs text-text-secondary">Total Days</div>
          </div>
          <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-4 text-center">
            <div className="text-3xl font-black text-primary mb-1">{Math.round((days.length / 25) * 100)}%</div>
            <div className="text-xs text-text-secondary">Progress</div>
          </div>
          <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-4 text-center">
            <div className="text-3xl font-black text-primary mb-1">{25 - days.length}</div>
            <div className="text-xs text-text-secondary">Locked</div>
          </div>
        </div>

        {/* Days List */}
        <div className="space-y-4">
          {allDays.map((day) => {
            const isCompleted = day.completed;
            
            return (
              <Link
                key={day.day}
                to={isCompleted ? `/day/${day.day}` : '#'}
                onClick={(e) => !isCompleted && e.preventDefault()}
                className={`
                  block bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl 
                  border rounded-2xl p-6 transition-all duration-500 group relative overflow-hidden
                  ${isCompleted 
                    ? 'border-primary/30 hover:border-primary/50 hover:-translate-y-1 hover:shadow-glow cursor-pointer' 
                    : 'border-ui-border/20 opacity-60 cursor-not-allowed'
                  }
                `}
              >
                {/* Background Glow Effect */}
                {isCompleted && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                )}
                
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 relative z-10">
                  {/* Left Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      {/* Day Number Badge */}
                      <div className={`
                        w-16 h-16 rounded-xl flex items-center justify-center font-black text-2xl
                        ${isCompleted 
                          ? 'bg-primary/20 text-primary border-2 border-primary/30 group-hover:scale-110' 
                          : 'bg-background-dark text-text-dark border-2 border-ui-border'
                        }
                        transition-transform duration-300
                      `}>
                        {day.day}
                      </div>
                      
                      {/* Title and Type */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                            isCompleted ? 'bg-primary/20 text-primary' : 'bg-background-dark text-text-muted'
                          }`}>
                            {day.type}
                          </span>
                          {isCompleted && <FaFire className="text-primary animate-pulse" />}
                        </div>
                        <h3 className={`text-xl md:text-2xl font-bold ${
                          isCompleted 
                            ? 'text-text-primary group-hover:text-primary' 
                            : 'text-text-dark'
                        } transition-colors`}>
                          {day.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Topics */}
                    {day.topics.length > 0 && (
                      <div className="flex gap-2 flex-wrap mb-3">
                        {day.topics.map((topic, index) => (
                          <span 
                            key={index}
                            className={`text-xs font-medium px-3 py-1 rounded-full ${
                              isCompleted 
                                ? 'bg-primary/20 border border-primary/30 text-primary' 
                                : 'bg-background-dark border border-ui-border text-text-muted'
                            }`}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Info Row */}
                    <div className="flex items-center gap-4 text-sm">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-medium ${
                        getDifficultyColor(day.difficulty)
                      }`}>
                        {day.difficulty}
                      </span>
                      {isCompleted && (
                        <span className="inline-flex items-center gap-1 text-text-secondary">
                          <FaClock className="text-primary" />
                          {day.duration}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Right Icon */}
                  <div className={`
                    flex flex-col items-center justify-center min-w-[80px]
                    ${isCompleted ? 'group-hover:scale-110' : ''}
                    transition-transform duration-300
                  `}>
                    {isCompleted ? (
                      <>
                        <div className="text-5xl mb-2">🎁</div>
                        <div className="flex items-center gap-1 text-primary font-bold text-sm">
                          <FaCheckCircle />
                          <span>Available</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-5xl mb-2 opacity-30">🔒</div>
                        <div className="flex items-center gap-1 text-text-muted font-bold text-sm">
                          <FaLock />
                          <span>Locked</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Hover Arrow */}
                {isCompleted && (
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    <span className="text-2xl">→</span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-br from-background-card to-background-dark border-2 border-primary rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary-dark rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-text-primary mb-4">
              More Challenges <span className="text-primary">Coming Soon!</span>
            </h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              New walkthroughs are added regularly. Check back often for the latest Advent of Cyber 2025 solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://tryhackme.com/christmas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-primary text-background-darker font-bold rounded-2xl hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-glow transition-all duration-300"
              >
                Visit TryHackMe 🚀
              </a>
              <Link 
                to="/"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-2xl hover:bg-primary hover:text-background-darker hover:-translate-y-0.5 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AllDays;