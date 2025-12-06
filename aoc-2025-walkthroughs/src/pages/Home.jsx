import { Link } from 'react-router-dom';

function Home() {
  const completedDays = [1];

  const allDays = [
    { day: 1, title: "Linux CLI - Shells & Bells", difficulty: "Intermediate", topics: ["Linux", "Git", "GPG"], completed: true },
    { day: 6, title: "IDOR - Santa’s Little IDOR", difficulty: "Intermediate", topics: ["IDOR", "Access Control", "Burp Suite"], completed: true },
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
    <div className="min-h-screen bg-background-darker py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-background-card to-background-dark border-2 border-primary rounded-3xl p-12 mb-12 shadow-2xl text-center relative overflow-hidden">
          {/* Animated Background Effect */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 text-primary text-9xl">🎄</div>
            <div className="absolute bottom-0 right-0 text-primary text-9xl">🎁</div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl"></div>
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-4">
              🎄 Advent of Cyber 2025 🎄
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-6">
              Complete Walkthroughs & Side Quest Solutions
            </p>
            <p className="text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Welcome to your comprehensive guide for TryHackMe's Advent of Cyber 2025! 
              Dive deep into cybersecurity with detailed walkthroughs, command references, 
              and real-world security insights for every challenge.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/all-days"
                className="inline-flex items-center px-8 py-4 bg-primary text-background-darker font-bold rounded-2xl hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-glow transition-all duration-300"
              >
                Browse All Days →
              </Link>
              <Link 
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-2xl hover:bg-primary hover:text-background-darker hover:-translate-y-0.5 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6 text-center transform hover:scale-105 hover:border-primary/30 transition-all duration-300">
            <div className="text-5xl font-black text-primary mb-2">{completedDays.length}</div>
            <div className="text-text-secondary text-sm">Days Completed</div>
          </div>
          <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6 text-center transform hover:scale-105 hover:border-primary/30 transition-all duration-300">
            <div className="text-5xl font-black text-primary mb-2">25</div>
            <div className="text-text-secondary text-sm">Total Days</div>
          </div>
          <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6 text-center transform hover:scale-105 hover:border-primary/30 transition-all duration-300">
            <div className="text-5xl font-black text-primary mb-2">{Math.round((completedDays.length / 25) * 100)}%</div>
            <div className="text-text-secondary text-sm">Progress</div>
          </div>
          <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6 text-center transform hover:scale-105 hover:border-primary/30 transition-all duration-300">
            <div className="text-5xl font-black text-primary mb-2">{25 - completedDays.length}</div>
            <div className="text-text-secondary text-sm">Days Remaining</div>
          </div>
        </div>

        {/* Featured Walkthrough */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-black text-text-primary">
              ⭐ Featured <span className="text-primary">Walkthrough</span>
            </h2>
          </div>
          
          <Link 
            to="/day/1" 
            className="block bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-3xl p-8 hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 shadow-2xl group"
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">🎄</span>
                  <div>
                    <div className="text-sm text-text-muted mb-1">Day 1</div>
                    <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary transition">
                      Linux CLI - Shells & Bells
                    </h3>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-4 leading-relaxed">
                  Embark on an exciting side quest that challenges your Linux skills! Master environment variables, 
                  Git history forensics, and image steganography as you hunt for hidden easter eggs and decrypt 
                  McSkidy's secret messages. Perfect for intermediate learners looking to level up their command-line expertise.
                </p>
                
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="bg-primary/20 border border-primary/30 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Intermediate
                  </span>
                  <span className="bg-primary/20 border border-primary/30 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Linux
                  </span>
                  <span className="bg-primary/20 border border-primary/30 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Git Forensics
                  </span>
                  <span className="bg-primary/20 border border-primary/30 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    GPG Encryption
                  </span>
                  <span className="bg-primary/20 border border-primary/30 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Steganography
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-text-muted">
                  <span>📖 10+ Steps</span>
                  <span>⏱️ 45-60 min</span>
                  <span>🏆 Side Quest</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center bg-background-dark border border-primary/30 rounded-2xl p-6 min-w-[120px]">
                <div className="text-6xl mb-2">🎁</div>
                <div className="text-primary font-bold">Available Now</div>
              </div>
            </div>
          </Link>
        </div>

        {/* Calendar Grid */}
        <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-3xl p-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-3xl font-black text-text-primary">
              🗓️ Challenge <span className="text-primary">Calendar</span>
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
                    relative aspect-square rounded-2xl border-2 flex flex-col items-center justify-center
                    transition-all duration-300
                    ${isCompleted 
                      ? 'border-primary bg-background-dark hover:bg-primary/10 hover:border-primary/50 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-primary/20' 
                      : 'border-ui-border bg-background-dark cursor-not-allowed opacity-50 hover:opacity-60'
                    }
                  `}
                  onClick={(e) => !isCompleted && e.preventDefault()}
                >
                  <div className={`text-4xl font-black mb-2 ${isCompleted ? 'text-primary' : 'text-text-dark'}`}>
                    {day.day}
                  </div>
                  <div className={`text-xs font-medium ${isCompleted ? 'text-text-secondary' : 'text-text-dark'}`}>
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
        <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-black text-text-primary mb-6">
            📚 What You'll <span className="text-primary">Learn</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background-dark border border-ui-border rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">💻</div>
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition">Command Line Mastery</h3>
              <p className="text-text-secondary text-sm">
                Master essential Linux commands, shell scripting, and terminal navigation techniques used by professionals.
              </p>
            </div>

            <div className="bg-background-dark border border-ui-border rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🔐</div>
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition">Encryption & Security</h3>
              <p className="text-text-secondary text-sm">
                Learn GPG encryption, password cracking, and secure data handling practices for real-world scenarios.
              </p>
            </div>

            <div className="bg-background-dark border border-ui-border rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🕵️</div>
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition">Digital Forensics</h3>
              <p className="text-text-secondary text-sm">
                Discover hidden data through Git history analysis, steganography, and forensic investigation techniques.
              </p>
            </div>

            <div className="bg-background-dark border border-ui-border rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🌐</div>
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition">Web Security</h3>
              <p className="text-text-secondary text-sm">
                Explore web vulnerabilities, penetration testing, and secure coding practices to protect applications.
              </p>
            </div>

            <div className="bg-background-dark border border-ui-border rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🔍</div>
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition">Reconnaissance</h3>
              <p className="text-text-secondary text-sm">
                Master enumeration techniques, information gathering, and systematic approach to security assessments.
              </p>
            </div>

            <div className="bg-background-dark border border-ui-border rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🛡️</div>
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition">Best Practices</h3>
              <p className="text-text-secondary text-sm">
                Learn industry-standard security practices, ethical hacking guidelines, and responsible disclosure.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-background-card to-background-dark border-2 border-primary rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary-dark rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-text-primary mb-4">
              Ready to Start Your <span className="text-primary">Journey</span>?
            </h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Each walkthrough includes detailed explanations, command references, and security insights. 
              Challenge yourself, learn new skills, and become a better security professional!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/day/1"
                className="inline-flex items-center px-8 py-4 bg-primary text-background-darker font-bold rounded-2xl hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-glow transition-all duration-300"
              >
                Start with Day 1 🎯
              </Link>
              <a 
                href="https://tryhackme.com/christmas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-2xl hover:bg-primary hover:text-background-darker hover:-translate-y-0.5 transition-all duration-300"
              >
                Visit TryHackMe 🚀
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;