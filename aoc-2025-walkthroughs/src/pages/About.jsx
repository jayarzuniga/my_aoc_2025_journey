function About() {
    return (
      <div className="min-h-screen bg-black py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-8 mb-8 glow-green-strong">
            <h1 className="text-4xl font-bold text-green-500 mb-4 matrix-text">
              About This Project
            </h1>
            <p className="text-gray-400 text-lg">
              A comprehensive guide to TryHackMe's Advent of Cyber 2025
            </p>
          </div>
  
          {/* Mission Statement */}
          <div className="bg-gray-900 border-l-4 border-green-500 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-green-500 mb-4">🎯 Mission</h2>
            <p className="text-gray-300 mb-4">
              This website is dedicated to providing detailed, educational walkthroughs for every challenge 
              in the Advent of Cyber 2025 event. My goal is to help learners understand not just the 
              "what" but the "why" behind each step.
            </p>
            <p className="text-gray-300">
              Whether you're stuck on a challenge, want to verify your approach, or simply want to learn 
              from detailed explanations, these walkthroughs are designed to support your cybersecurity journey.
            </p>
          </div>
  
          {/* What You'll Find */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-500 border-b-2 border-green-500 pb-4 mb-6">
              📚 What You'll Find Here
            </h2>
            
            <div className="space-y-4">
              <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
                <h3 className="text-xl font-bold text-green-400 mb-2">Step-by-Step Walkthroughs</h3>
                <p className="text-gray-400 text-sm">
                  Detailed guides with screenshots, commands, and explanations for each challenge
                </p>
              </div>
  
              <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
                <h3 className="text-xl font-bold text-green-400 mb-2">Command References</h3>
                <p className="text-gray-400 text-sm">
                  Complete command lists with syntax and use cases for tools like Git, GPG, Linux CLI, and more
                </p>
              </div>
  
              <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
                <h3 className="text-xl font-bold text-green-400 mb-2">Learning Outcomes</h3>
                <p className="text-gray-400 text-sm">
                  Key takeaways and security best practices for real-world application
                </p>
              </div>
  
              <div className="bg-gray-900 border border-green-500 rounded-lg p-4">
                <h3 className="text-xl font-bold text-green-400 mb-2">Educational Focus</h3>
                <p className="text-gray-400 text-sm">
                  Emphasis on understanding concepts rather than just completing challenges
                </p>
              </div>
            </div>
          </div>
  
          {/* About Me */}
          <div className="bg-gray-900 border-l-4 border-green-500 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-green-500 mb-4">👤 About Me</h2>
            <p className="text-gray-300 mb-4">
              I'm a cybersecurity enthusiast passionate about sharing knowledge and helping others learn. 
              Through these walkthroughs, I aim to document my own learning journey while providing 
              valuable resources for the community.
            </p>
            <p className="text-gray-300">
              Feel free to reach out with questions, suggestions, or if you spot any errors. 
              Learning is a collaborative process!
            </p>
            
            <div className="mt-6 flex gap-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:bg-opacity-10 transition"
              >
                GitHub
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:bg-opacity-10 transition"
              >
                Twitter
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:bg-opacity-10 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
  
          {/* Disclaimer */}
          <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">⚠️ Disclaimer</h2>
            <p className="text-gray-300 mb-4">
              These walkthroughs are intended for educational purposes only. I encourage you to attempt 
              each challenge on your own first before consulting these guides.
            </p>
            <p className="text-gray-300 mb-4">
              This website is not affiliated with TryHackMe. All challenge content and rights belong 
              to TryHackMe and their respective creators.
            </p>
            <p className="text-gray-300">
              Please use these resources responsibly and ethically. The techniques demonstrated here 
              should only be applied in authorized environments.
            </p>
          </div>
  
          {/* Contributing */}
          <div className="bg-gray-900 border-l-4 border-green-500 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-green-500 mb-4">🤝 Contributing</h2>
            <p className="text-gray-300 mb-4">
              Found an error or have a suggestion? Contributions are welcome! You can:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Open an issue on GitHub</li>
              <li>Submit a pull request with corrections</li>
              <li>Reach out directly via social media</li>
              <li>Share your own insights and alternative solutions</li>
            </ul>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default About;