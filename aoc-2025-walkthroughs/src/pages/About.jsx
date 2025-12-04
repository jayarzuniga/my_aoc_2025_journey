function About() {
  return (
    <div className="min-h-screen bg-background-darker py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Header */}
        <div className="bg-gradient-to-br from-background-card to-background-dark border-2 border-primary rounded-3xl p-12 mb-12 shadow-glow relative overflow-hidden">
          {/* Background Glow Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl"></div>
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-black text-primary mb-4 matrix-text">
              About This Project
            </h1>
            <p className="text-text-secondary text-xl">
              A comprehensive guide to TryHackMe's Advent of Cyber 2025
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border-l-4 border-primary rounded-2xl p-8 mb-12 shadow-xl">
          <h2 className="text-3xl font-black text-primary mb-6 flex items-center gap-3">
            🎯 Mission
          </h2>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            This website is dedicated to providing detailed, educational walkthroughs for every challenge 
            in the Advent of Cyber 2025 event. My goal is to help learners understand not just the 
            "what" but the "why" behind each step.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed">
            Whether you're stuck on a challenge, want to verify your approach, or simply want to learn 
            from detailed explanations, these walkthroughs are designed to support your cybersecurity journey.
          </p>
        </div>

        {/* What You'll Find */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            📚 What You'll Find Here
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary-dark transition">
                Step-by-Step Walkthroughs
              </h3>
              <p className="text-text-secondary text-base leading-relaxed">
                Detailed guides with screenshots, commands, and explanations for each challenge
              </p>
            </div>

            <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary-dark transition">
                Command References
              </h3>
              <p className="text-text-secondary text-base leading-relaxed">
                Complete command lists with syntax and use cases for tools like Git, GPG, Linux CLI, and more
              </p>
            </div>

            <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary-dark transition">
                Learning Outcomes
              </h3>
              <p className="text-text-secondary text-base leading-relaxed">
                Key takeaways and security best practices for real-world application
              </p>
            </div>

            <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary-dark transition">
                Educational Focus
              </h3>
              <p className="text-text-secondary text-base leading-relaxed">
                Emphasis on understanding concepts rather than just completing challenges
              </p>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border-l-4 border-primary rounded-2xl p-8 mb-12 shadow-xl">
          <h2 className="text-3xl font-black text-primary mb-6 flex items-center gap-3">
            👤 About Me
          </h2>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            I'm a cybersecurity enthusiast passionate about sharing knowledge and helping others learn. 
            Through these walkthroughs, I aim to document my own learning journey while providing 
            valuable resources for the community.
          </p>
          <p className="text-text-secondary mb-8 text-lg leading-relaxed">
            Feel free to reach out with questions, suggestions, or if you spot any errors. 
            Learning is a collaborative process!
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-background-darker border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-background-darker hover:-translate-y-0.5 transition-all duration-300 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-background-darker border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-background-darker hover:-translate-y-0.5 transition-all duration-300 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-background-darker border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-background-darker hover:-translate-y-0.5 transition-all duration-300 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gradient-to-br from-background-card to-background-dark border-l-4 border-primary-dark rounded-2xl p-8 mb-12 shadow-xl">
          <h2 className="text-3xl font-black text-primary-dark mb-6 flex items-center gap-3">
            ⚠️ Disclaimer
          </h2>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            These walkthroughs are intended for educational purposes only. I encourage you to attempt 
            each challenge on your own first before consulting these guides.
          </p>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            This website is not affiliated with TryHackMe. All challenge content and rights belong 
            to TryHackMe and their respective creators.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed">
            Please use these resources responsibly and ethically. The techniques demonstrated here 
            should only be applied in authorized environments.
          </p>
        </div>

        {/* Contributing */}
        <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border-l-4 border-primary rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-black text-primary mb-6 flex items-center gap-3">
            🤝 Contributing
          </h2>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Found an error or have a suggestion? Contributions are welcome! You can:
          </p>
          <ul className="space-y-3 text-text-secondary text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Open an issue on GitHub</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Submit a pull request with corrections</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Reach out directly via social media</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Share your own insights and alternative solutions</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default About;