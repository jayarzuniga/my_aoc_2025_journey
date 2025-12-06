import { Link } from 'react-router-dom';

function Day1() {
  return (
    <div className="min-h-screen bg-background-darker py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Day Navigation */}
        <div className="flex justify-between items-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-4">
          <button 
            disabled 
            className="text-text-dark px-6 py-3 border border-ui-border rounded-xl cursor-not-allowed"
          >
            ← Previous Day
          </button>
          
          <Link 
            to="/all-days"
            className="text-primary hover:text-primary-dark px-6 py-3 border-2 border-primary rounded-xl hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300 font-medium"
          >
            All Days
          </Link>
          
          <button 
            disabled 
            className="text-text-dark px-6 py-3 border border-ui-border rounded-xl cursor-not-allowed"
          >
            Next Day →
          </button>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-br from-background-card to-background-dark border-2 border-primary rounded-3xl p-12 mb-12 shadow-glow relative overflow-hidden">
          {/* Background Glow Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl"></div>
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-black text-primary text-center mb-4 matrix-text">
              🎄 Day 1: Linux CLI - Shells & Bells 🎄
            </h1>
            <p className="text-text-secondary text-center mb-6 text-xl">Side Quest 1 - Complete Walkthrough</p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="bg-primary/20 border border-primary/30 text-primary px-5 py-2 rounded-full text-sm font-medium">
                Difficulty: Intermediate
              </span>
              <span className="bg-primary/20 border border-primary/30 text-primary px-5 py-2 rounded-full text-sm font-medium">
                Category: Linux
              </span>
              <span className="bg-primary/20 border border-primary/30 text-primary px-5 py-2 rounded-full text-sm font-medium">
                Topics: Git, GPG, Steganography
              </span>
            </div>
          </div>
        </div>

        {/* Challenge Description */}
        <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border-l-4 border-primary rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-black text-primary mb-6">📜 The Challenge</h2>
          <p className="text-text-secondary mb-4 leading-relaxed text-lg">
            For those who consider themselves intermediate and want another challenge, check McSkidy's hidden note in{' '}
            <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono text-sm">
              /home/mcskidy/Documents/
            </code>
            {' '}to get access to the key for Side Quest 1!
          </p>
          <p className="text-text-secondary text-lg">
            You are logged in as the user <strong className="text-text-primary">mcskidy</strong> on the provided VM.
          </p>
        </div>

        {/* Initial Screenshot */}
        <div className="text-center mb-12 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
          <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Initial login screen</p>
          <img 
            src="/my_aoc_2025_journey/images/day1/day1_img1.png" 
            alt="Initial login screen"
            className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
          />
        </div>

        {/* Table of Contents */}
        <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-primary/30 rounded-3xl p-8 mb-12">
          <h3 className="text-3xl font-black text-primary mb-6 flex items-center gap-3">
            <span>📋</span> Table of Contents
          </h3>
          <ul className="space-y-3">
            {[
              { id: 'step1', text: 'Step 1: Finding McSkidy\'s Hidden Note' },
              { id: 'step2', text: 'Step 2: Accessing eddi_knapp\'s Account' },
              { id: 'egg1', text: 'Easter Egg #1: Environment Variables' },
              { id: 'egg2', text: 'Easter Egg #2: Git History' },
              { id: 'egg3', text: 'Easter Egg #3: Image Steganography' },
              { id: 'decrypt', text: 'Step 3: Decrypting McSkidy\'s Vault' },
              { id: 'wishlist', text: 'Step 4: The Wishlist Challenge' },
              { id: 'final', text: 'Step 5: Decoding the Final Message' },
              { id: 'bonus', text: 'Bonus: The Spicier Challenge' },
              { id: 'takeaways', text: 'Key Takeaways & Command Reference' }
            ].map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className="text-text-secondary hover:text-primary transition-all duration-300 flex items-center gap-2 hover:translate-x-2 group"
                >
                  <span className="text-primary group-hover:text-primary-dark">→</span>
                  <span className="group-hover:underline">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Step 1 */}
        <div id="step1" className="mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            🔍 Step 1: Finding McSkidy's Hidden Note
          </h2>
          
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Navigate to the specified directory and read the hidden message using the following commands:
          </p>
          
          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 overflow-x-auto shadow-lg">
            <pre className="text-primary font-mono"><code>{`cd /home/mcskidy/Documents/
ls
cat <filename>`}</code></pre>
          </div>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Initial directory listing</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img2.png" 
              alt="Initial directory listing in Documents folder"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <div className="bg-gradient-to-br from-background-card to-background-dark backdrop-blur-xl border-l-4 border-primary rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              📨 McSkidy's Message
            </h3>
            <p className="text-text-secondary mb-4">
              <strong className="text-text-primary">From:</strong> mcskidy<br/>
              <strong className="text-text-primary">To:</strong> whoever finds this
            </p>
            
            <p className="text-text-secondary my-6 leading-relaxed">
              I had a brief moment when no one was watching. I used it.
            </p>
            
            <p className="text-text-secondary my-6 leading-relaxed">
              I've managed to plant a few clues around the account. If you can access the user below and look carefully, 
              those three little "easter eggs" will combine into a passcode that unlocks a further message I encrypted 
              in the <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono text-sm">/home/eddi_knapp/Documents/</code> directory. 
              I didn't want the wrong eyes to see it.
            </p>
            
            <p className="text-text-secondary my-6 leading-relaxed">
              <strong className="text-text-primary text-lg">Access the user account:</strong><br/>
              Username: <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">eddi_knapp</code><br/>
              Password: <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">S0mething1Sc0ming</code>
            </p>
            
            <p className="text-text-secondary my-6 leading-relaxed">
              <strong className="text-text-primary text-lg">There are three hidden easter eggs.</strong><br/>
              They combine to form the passcode to open my encrypted vault.
            </p>
            
            <div className="bg-background-darker border-l-4 border-primary-dark p-6 my-6 italic rounded-xl">
              <p className="text-text-primary mb-4 text-lg"><strong>Clues (one for each egg):</strong></p>
              
              <p className="text-text-secondary mb-4 leading-relaxed">
                <strong className="text-primary">1)</strong> I ride with your session, not with your chest of files. 
                Open the little bag your shell carries when you arrive.
              </p>
              
              <p className="text-text-secondary mb-4 leading-relaxed">
                <strong className="text-primary">2)</strong> The tree shows today; the rings remember yesterday. 
                Read the ledger's older pages.
              </p>
              
              <p className="text-text-secondary leading-relaxed">
                <strong className="text-primary">3)</strong> When pixels sleep, their tails sometimes whisper plain words. 
                Listen to the tail.
              </p>
            </div>
            
            <p className="text-text-secondary my-6 leading-relaxed">
              Find the fragments, join them in order, and use the resulting passcode to decrypt the message I left. 
              Be careful – I had to be quick, and I left only enough to get help.
            </p>
            
            <p className="text-text-secondary italic">
              ~ McSkidy
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div id="step2" className="mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            🔑 Step 2: Accessing eddi_knapp's Account
          </h2>
          
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Use the <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">su</code> command to switch users 
            with the provided credentials:
          </p>
          
          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>{`su eddi_knapp
Password: S0mething1Sc0ming`}</code></pre>
          </div>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Logged in as eddi_knapp</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img3.png" 
              alt="Successfully logged in as eddi_knapp user"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary text-lg">
            You are now logged in as user <strong className="text-text-primary">eddi_knapp</strong>. Time to hunt for the three hidden easter eggs!
          </p>
        </div>

        {/* Easter Egg 1 */}
        <div id="egg1" className="mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            🥚 Easter Egg #1: Environment Variables
          </h2>
          
          <div className="bg-background-darker border-l-4 border-primary-dark p-6 mb-8 italic rounded-xl shadow-lg">
            <p className="text-text-primary text-lg leading-relaxed">
              <strong className="text-primary">Riddle:</strong> "I ride with your session, not with your chest of files. 
              Open the little bag your shell carries when you arrive."
            </p>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">💡 Interpretation:</h3>
          <ul className="space-y-3 text-text-secondary mb-8 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-text-primary">"I ride with your session"</strong> = Shell environment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-text-primary">"Not with your chest of files"</strong> = Not persistent regular files</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-text-primary">"Little bag your shell carries"</strong> = Environment variables</span>
            </li>
          </ul>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Use the <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">env</code> command to display 
            all environment variables stored in the current session:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>env</code></pre>
          </div>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Environment variables output</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img4.png" 
              alt="Output of env command showing PASSFRAG1"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Look for any suspicious variables. You'll find a variable named <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">PASSFRAG1</code>:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: First password fragment</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img5.png" 
              alt="PASSFRAG1 revealed"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <div className="bg-gradient-to-br from-background-card to-background-dark border-2 border-primary rounded-2xl p-8 text-center shadow-glow pulse-glow mb-8">
            <p className="text-3xl font-black text-primary">
              🎉 PASSFRAG1: 3ast3r
            </p>
          </div>
        </div>

        {/* Easter Egg 2 */}
        <div id="egg2" className="mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            🥚 Easter Egg #2: Git History
          </h2>

          <div className="bg-background-darker border-l-4 border-primary-dark p-6 mb-8 italic rounded-xl shadow-lg">
            <p className="text-text-primary text-lg leading-relaxed">
              <strong className="text-primary">Riddle:</strong> "The tree shows today; the rings remember yesterday. 
              Read the ledger's older pages."
            </p>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">💡 Interpretation:</h3>
          <ul className="space-y-3 text-text-secondary mb-8 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-text-primary">"The tree shows today"</strong> = The working tree / current filesystem contents</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-text-primary">"The rings remember yesterday"</strong> = Commit history (like rings of a tree)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-text-primary">"Read the ledger's older pages"</strong> = Git log or history-reading commands</span>
            </li>
          </ul>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Navigate to eddi_knapp's home directory and list all files, including hidden ones:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>{`cd ~
ls -la`}</code></pre>
          </div>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Home directory listing</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img6.png" 
              alt="Home directory showing .secret_git folder"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Notice the hidden folder <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">.secret_git</code>. Let's investigate:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>{`cd .secret_git
ls -la`}</code></pre>
          </div>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Inside secret_git folder</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img7.png" 
              alt="Contents of .secret_git directory"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            There's a <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">.git</code> directory inside, 
            indicating this is a Git repository. First, check if there are any uncommitted changes:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>git status</code></pre>
          </div>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Git status output</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img8.png" 
              alt="Git status showing clean working tree"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            The repository is clean (nothing to commit). Now let's examine the Git history:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>git log --oneline --graph --decorate --all</code></pre>
          </div>

          <p className="text-text-secondary mb-4 text-lg">
            <strong className="text-text-primary">Command explanation:</strong>
          </p>
          <ul className="space-y-3 text-text-secondary mb-8 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">--oneline</code>: Displays each commit on a single line</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">--graph</code>: Shows a text-based graphical representation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">--decorate</code>: Shows branch and tag names</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">--all</code>: Shows all branches</span>
            </li>
          </ul>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Git log output</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img9.png" 
              alt="Git log showing commit history"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary mb-4 text-lg">
            We can see two commits:
          </p>
          <ol className="space-y-2 text-text-secondary mb-8 text-lg pl-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">1.</span>
              <span>"add private note"</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">2.</span>
              <span>"remove sensitive note"</span>
            </li>
          </ol>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            The second fragment was likely added in the first commit and then removed. Let's view the "add private note" commit:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>{`git show <commit_id>`}</code></pre>
          </div>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Git show output revealing PASSFRAG2</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img10.png" 
              alt="Git show command revealing PASSFRAG2 in commit history"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <div className="bg-gradient-to-br from-background-card to-background-dark border-2 border-primary rounded-2xl p-8 text-center shadow-glow pulse-glow mb-8">
            <p className="text-3xl font-black text-primary">
              🎉 PASSFRAG2: -1s-
            </p>
          </div>
        </div>

        {/* Easter Egg 3 */}
        <div id="egg3" className="mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            🥚 Easter Egg #3: Image Steganography
          </h2>

          <div className="bg-background-darker border-l-4 border-primary-dark p-6 mb-8 italic rounded-xl shadow-lg">
            <p className="text-text-primary text-lg leading-relaxed">
              <strong className="text-primary">Riddle:</strong> "When pixels sleep, their tails sometimes whisper plain words. Listen to the tail."
            </p>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">💡 Interpretation:</h3>
          <ul className="space-y-3 text-text-secondary mb-8 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-text-primary">"Pixels sleep"</strong> = Image files</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-text-primary">"Their tails"</strong> = Least significant bits (pixel tails) or file tails/metadata</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-text-primary">"Whisper plain words"</strong> = Hidden plaintext embedded inside the image</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-text-primary">"Listen to the tail"</strong> = Extract the hidden data</span>
            </li>
          </ul>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Images are typically stored in the Pictures directory. Let's investigate:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>{`cd ~
ls -la
cd Pictures
ls -la`}</code></pre>
          </div>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Pictures directory contents</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img11.png" 
              alt="Listing of Pictures directory showing hidden files"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary mb-4 text-lg">
            Several interesting items:
          </p>
          <ul className="space-y-3 text-text-secondary mb-8 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">photo_meta_1.txt</code>, <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">photo_meta_2.txt</code>, <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">photo_meta_3.txt</code> - Text files in an image directory (suspicious!)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">hidden_pic_1.png</code> through <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">hidden_pic_5.png</code> - Hidden image files</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">.easter_egg</code> - A hidden file (bingo!)</span>
            </li>
          </ul>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Let's check the contents of the hidden <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">.easter_egg</code> file:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>cat .easter_egg</code></pre>
          </div>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Third password fragment</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img12.png" 
              alt="Cat command showing PASSFRAG3 content"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <div className="bg-gradient-to-br from-background-card to-background-dark border-2 border-primary rounded-2xl p-8 text-center shadow-glow pulse-glow mb-8">
            <p className="text-3xl font-black text-primary">
              🎉 PASSFRAG3: c0M1nG
            </p>
          </div>
        </div>

        {/* Step 3: Decrypting */}
        <div id="decrypt" className="mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            🔓 Step 3: Decrypting McSkidy's Vault
          </h2>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Now we have all three fragments. Combining them in order gives us the complete passkey:
          </p>

          <div className="bg-gradient-to-br from-background-card to-background-dark border-2 border-primary rounded-2xl p-8 text-center shadow-glow pulse-glow mb-8">
            <p className="text-3xl font-black text-primary">
              🔑 Complete Passkey: 3ast3r-1s-c0M1nG
            </p>
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            According to the initial message, there's an encrypted file in <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">/home/eddi_knapp/Documents/</code>. Let's navigate there:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>{`cd ~
ls
cd Documents
ls`}</code></pre>
          </div>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Documents directory with encrypted file</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img13.png" 
              alt="Documents directory showing mcskidy_note.txt.gpg file"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            We find the file <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">mcskidy_note.txt.gpg</code>. 
            GPG is an encryption tool. We can decrypt it using:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 overflow-x-auto shadow-lg">
            <pre className="text-primary font-mono"><code>{`gpg --pinentry-mode loopback --output <output_filename> --decrypt <filename>.gpg`}</code></pre>
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            When prompted, enter the passkey we discovered: <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">3ast3r-1s-c0M1nG</code>
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Decrypting the vault</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img14.png" 
              alt="Successfully decrypted GPG file"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary text-lg">
            Decryption successful! Let's read the contents.
          </p>
        </div>

        {/* Step 4: Wishlist */}
        <div id="wishlist" className="mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            📝 Step 4: The Wishlist Challenge
          </h2>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            The decrypted message reveals another task. We need to access <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">/home/socmas/2025/wishlist.txt</code> and update it with a specific list of items.
          </p>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            However, this directory is not accessible from the eddi_knapp account. We need to return to the mcskidy user. 
            Open a new terminal session as mcskidy.
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: New terminal as mcskidy</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img15.png" 
              alt="Opening new terminal as mcskidy"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Navigate to the directory and edit the wishlist:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>cd /home/socmas/2025</code></pre>
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            First, verify the current state by accessing the web interface at <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">http:/10.49.162.159:8080</code> in Firefox.
          </p>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Then edit the wishlist file:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>sudo nano wishlist.txt</code></pre>
          </div>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Editing wishlist.txt in nano</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img16.png" 
              alt="Nano editor showing wishlist items being added"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary mb-4 text-lg">
            Add all the items from the decrypted message, then save the file:
          </p>
          <ul className="space-y-3 text-text-secondary mb-8 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Press <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">Ctrl+O</code> to save</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Press <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">Enter</code> to confirm the filename</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Press <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">Ctrl+X</code> to exit</span>
            </li>
          </ul>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            After saving, refresh the webpage. You should see a new page with an UNLOCK_KEY.
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Unlock key revealed</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img17.png" 
              alt="Web interface showing UNLOCK_KEY after successful wishlist update"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>
        </div>

        {/* Step 5: Final Message */}
        <div id="final" className="mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            🏁 Step 5: Decoding the Final Message
          </h2>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Save the UNLOCK_KEY to a file as instructed:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>cat &gt; /tmp/website_output.txt</code></pre>
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Paste the UNLOCK_KEY and press <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">Ctrl+D</code> to save and exit.
          </p>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Now use OpenSSL to decrypt the message:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 overflow-x-auto shadow-lg">
            <pre className="text-primary font-mono text-sm"><code>{`openssl enc -d -aes-256-cbc -pbkdf2 -iter 200000 -salt -base64 -in /tmp/website_output.txt -out /tmp/decoded_message.txt -pass pass:'91J6X7R4FQ9TQPM9JX2Q9X2Z'`}</code></pre>
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Read the decoded message:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>cat /tmp/decoded_message.txt</code></pre>
          </div>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Decoded message</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img18.png" 
              alt="Final decoded message showing the flag"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <div className="bg-gradient-to-br from-background-card to-background-dark border-2 border-primary rounded-3xl p-10 text-center shadow-glow pulse-glow mb-8">
            <p className="text-4xl font-black text-primary mb-4">
              🎊 FLAG OBTAINED 🎊
            </p>
            <p className="text-2xl font-mono text-primary-dark">
              THM{'{'}w3lcome_2_A0c_2025{'}'}
            </p>
          </div>
        </div>

        {/* Bonus Step */}
        <div id="bonus" className="mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            🎁 Bonus: The Spicier Challenge
          </h2>

          <div className="bg-gradient-to-br from-background-card to-background-dark border-l-4 border-primary-dark rounded-2xl p-8 mb-8 shadow-xl">
            <p className="text-text-secondary mb-4 text-lg">
              <strong className="text-text-primary text-xl">NEXT STEP:</strong>
            </p>
            <p className="text-text-secondary mb-4 text-lg leading-relaxed">
              If you fancy something a little...spicier...use the FLAG you just obtained as the passphrase to unlock:
            </p>
            <p className="text-text-secondary mb-4">
              <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">/home/eddi_knapp/.secret/dir</code>
            </p>
            <p className="text-text-secondary text-lg">
              That hidden directory has been archived and encrypted with the FLAG.
            </p>
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Switch back to the eddi_knapp user and navigate to the secret directory:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>{`cd ~
cd .secret
ls -la`}</code></pre>
          </div>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: .secret directory contents</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img19.png" 
              alt="Secret directory showing encrypted tar.gz.gpg file"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            You'll find an encrypted file: <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">dir.tar.gz.gpg</code>
          </p>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Decrypt it using the FLAG as the passphrase:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>gpg --pinentry-mode loopback --output dir.tar.gz --decrypt dir.tar.gz.gpg</code></pre>
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Extract the tar archive:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>tar -xzf dir.tar.gz</code></pre>
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            This creates a <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">dir</code> folder containing a PNG image - hopefully our final key!
          </p>

          <h3 className="text-2xl font-bold text-primary mb-6 mt-10">🖼️ Viewing the Final Image</h3>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Opening the file directly posed some challenges due to VM authorization restrictions. Several approaches were attempted:
          </p>
          <ul className="space-y-3 text-text-secondary mb-8 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Creating a base64 output to copy externally - failed due to clipboard length limitations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Creating an HTML file to view in Firefox - blocked by access restrictions</span>
            </li>
          </ul>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            The successful solution was to expose it via a simple HTTP server using Python:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-8 shadow-lg">
            <pre className="text-primary font-mono"><code>{`cd ~/.secret/dir
python3 -m http.server`}</code></pre>
          </div>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Starting Python HTTP server</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img20.png" 
              alt="Python HTTP server running in terminal"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Then access it in Firefox using the given IP and port (e.g., <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">http://localhost:8000</code>):
          </p>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Click on <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">sq1.png</code> to view the final flag!
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: The final bonus flag!</p>
            <img 
              src="/my_aoc_2025_journey/images/day1/day1_img21.png" 
              alt="Final bonus flag displayed in browser"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <div className="bg-gradient-to-br from-background-card to-background-dark border-2 border-primary rounded-3xl p-10 text-center shadow-glow pulse-glow">
            <p className="text-4xl font-black text-primary">
              🎉 CONGRATULATIONS! 🎉<br/>
              You've completed Side Quest 1!
            </p>
          </div>
        </div>

        {/* Key Takeaways */}
        <div id="takeaways" className="mb-16">
          <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border-l-4 border-primary rounded-3xl p-10 shadow-2xl">
            <h2 className="text-4xl font-black text-primary mb-10 flex items-center gap-3">
              📚 Key Takeaways & Command Reference
            </h2>
            
            {/* Environment Variables */}
            <div className="mb-10 bg-background-dark/50 rounded-2xl p-8 border border-ui-border/20">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                🔐 Environment Variables Security
              </h3>
              <p className="text-text-secondary mb-4 text-lg leading-relaxed">
                <strong className="text-text-primary">Lesson:</strong> Environment variables are often overlooked hiding spots for sensitive data. 
                Developers sometimes store API keys, passwords, or config data in environment variables, thinking they're temporary and safe.
              </p>
              <p className="text-text-muted mb-3"><strong className="text-text-primary">Commands to investigate:</strong></p>
              <div className="bg-background-darker border border-ui-border rounded-xl p-5 mb-5">
                <pre className="text-primary font-mono text-sm"><code>{`env                    # Display all environment variables
printenv               # Alternative command
echo $VARIABLE_NAME    # Check specific variable
export                 # Show exported variables`}</code></pre>
              </div>
              <p className="text-text-secondary text-lg leading-relaxed">
                <strong className="text-text-primary">Where to look:</strong> Check <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">~/.bashrc</code>, 
                <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">~/.bash_profile</code>, 
                <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">~/.profile</code>, and 
                <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">/etc/environment</code> for persistent environment variable definitions.
              </p>
            </div>

            {/* Git History */}
            <div className="mb-10 bg-background-dark/50 rounded-2xl p-8 border border-ui-border/20">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                🗂️ Git History Forensics
              </h3>
              <p className="text-text-secondary mb-4 text-lg leading-relaxed">
                <strong className="text-text-primary">Lesson:</strong> Git never truly forgets. Even if you delete sensitive files or commit messages, 
                they remain in the repository's history. Attackers often mine git history for accidentally committed credentials, API keys, 
                or sensitive configuration files.
              </p>
              <p className="text-text-muted mb-3"><strong className="text-text-primary">Essential Git commands:</strong></p>
              <div className="bg-background-darker border border-ui-border rounded-xl p-5 mb-5 overflow-x-auto">
                <pre className="text-primary font-mono text-sm"><code>{`git log --oneline --graph --decorate --all    # View commit history
git show <commit-id>                          # View specific commit details
git log -p                                     # Show commit history with diffs
git log --all --full-history -- <filename>    # Track file through entire history
git reflog                                     # Show reference logs (even deleted commits)
git diff <commit1> <commit2>                  # Compare two commits
git log --grep="password"                      # Search commit messages`}</code></pre>
              </div>
              <p className="text-text-secondary text-lg leading-relaxed">
                <strong className="text-text-primary">Where to look:</strong> Always check <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">.git</code> directories, 
                <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">.gitignore</code> files (shows what they're trying to hide), 
                and search for hidden <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">.git</code> folders in unexpected locations.
              </p>
            </div>

            {/* Steganography */}
            <div className="mb-10 bg-background-dark/50 rounded-2xl p-8 border border-ui-border/20">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                🖼️ Steganography & Hidden Files
              </h3>
              <p className="text-text-secondary mb-4 text-lg leading-relaxed">
                <strong className="text-text-primary">Lesson:</strong> Data can be hidden in image metadata, file tails, or simply as hidden files 
                in unexpected directories. Steganography exploits the fact that most users only look at surface-level content.
              </p>
              <p className="text-text-muted mb-3"><strong className="text-text-primary">Investigation commands:</strong></p>
              <div className="bg-background-darker border border-ui-border rounded-xl p-5 mb-5">
                <pre className="text-primary font-mono text-sm"><code>{`ls -la                         # List all files including hidden (starts with .)
find . -type f -name ".*"      # Find all hidden files recursively
file <filename>                # Identify file type
strings <filename>             # Extract readable strings from binary files
exiftool <image>               # Extract image metadata
steghide extract -sf <file>    # Extract hidden data from images
tail <filename>                # View file end (where data might be appended)
xxd <filename>                 # Hex dump to see raw file contents`}</code></pre>
              </div>
              <p className="text-text-secondary text-lg leading-relaxed">
                <strong className="text-text-primary">Where to look:</strong> Pictures directory, Documents folder, and any directory that seems 
                to contain mismatched file types (like .txt files in Pictures). Check file sizes - unusually large images may contain hidden data.
              </p>
            </div>

            {/* GPG Encryption */}
            <div className="mb-10 bg-background-dark/50 rounded-2xl p-8 border border-ui-border/20">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                🔒 GPG Encryption & Decryption
              </h3>
              <p className="text-text-secondary mb-4 text-lg leading-relaxed">
                <strong className="text-text-primary">Lesson:</strong> GPG (GNU Privacy Guard) provides military-grade encryption for files. 
                Understanding how to decrypt GPG files is crucial for security investigations and CTF challenges.
              </p>
              <p className="text-text-muted mb-3"><strong className="text-text-primary">GPG commands:</strong></p>
              <div className="bg-background-darker border border-ui-border rounded-xl p-5 mb-5 overflow-x-auto">
                <pre className="text-primary font-mono text-sm"><code>{`# Decrypt a file with passphrase
gpg --pinentry-mode loopback --output <output_file> --decrypt <encrypted_file.gpg>

# Encrypt a file
gpg --symmetric --cipher-algo AES256 <filename>

# List keys
gpg --list-keys

# Import a public key
gpg --import <keyfile>

# Decrypt to stdout (no output file)
gpg --decrypt <encrypted_file.gpg>`}</code></pre>
              </div>
              <p className="text-text-secondary text-lg leading-relaxed">
                <strong className="text-text-primary">Where to look:</strong> Files ending in <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">.gpg</code>, 
                <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">.asc</code>, or 
                <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">.pgp</code>. Check Documents, hidden directories, and backup folders.
              </p>
            </div>

            {/* General Reconnaissance */}
            <div className="mb-10 bg-background-dark/50 rounded-2xl p-8 border border-ui-border/20">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                🔎 General Reconnaissance Tips
              </h3>
              <div className="bg-background-darker border border-ui-border rounded-xl p-5">
                <pre className="text-primary font-mono text-sm"><code>{`pwd                           # Show current directory
whoami                        # Show current user
id                            # Show user ID and group memberships
ls -laR                       # Recursive listing of all files
find / -type f -name "*.gpg" 2>/dev/null  # Find all GPG files
history                       # View command history
cat ~/.bash_history           # View bash history file
sudo -l                       # List sudo permissions
ps aux                        # Show running processes
netstat -tulpn               # Show network connections`}</code></pre>
              </div>
            </div>

            {/* Investigation Methodology */}
            <div className="mb-10 bg-background-dark/50 rounded-2xl p-8 border border-ui-border/20">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                💡 Investigation Methodology
              </h3>
              <ol className="space-y-3 text-text-secondary text-lg pl-2">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold min-w-[24px]">1.</span>
                  <span><strong className="text-text-primary">Enumerate users:</strong> Check <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">/home/</code> directory for all user accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold min-w-[24px]">2.</span>
                  <span><strong className="text-text-primary">Check hidden files:</strong> Use <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">ls -la</code> in every directory - files starting with <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">.</code> are gold mines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold min-w-[24px]">3.</span>
                  <span><strong className="text-text-primary">Review history:</strong> Check <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">.bash_history</code>, git logs, and command history for clues</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold min-w-[24px]">4.</span>
                  <span><strong className="text-text-primary">Inspect permissions:</strong> Use <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">ls -l</code> to see file permissions and ownership</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold min-w-[24px]">5.</span>
                  <span><strong className="text-text-primary">Look for patterns:</strong> Unusual file locations, mismatched file types, or suspicious naming conventions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold min-w-[24px]">6.</span>
                  <span><strong className="text-text-primary">Read documentation:</strong> Check README files, notes, and comments in configuration files</span>
                </li>
              </ol>
            </div>

            {/* Security Best Practices */}
            <div className="bg-background-dark/50 rounded-2xl p-8 border border-ui-border/20">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                ⚠️ Security Best Practices
              </h3>
              <ul className="space-y-3 text-text-secondary text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Never commit secrets to git repositories - use <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">.gitignore</code> and environment variables properly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Use git tools like <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">git-secrets</code> or <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">gitleaks</code> to scan for accidentally committed credentials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Rotate credentials immediately if they've been committed to version control</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Store sensitive data in proper secret management systems (HashiCorp Vault, AWS Secrets Manager, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Use <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">git filter-branch</code> or <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">BFG Repo-Cleaner</code> to remove secrets from git history</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Always assume that deleted files can be recovered - deletion is not destruction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center mt-12 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
          <button 
            disabled 
            className="text-text-dark px-6 py-3 border border-ui-border rounded-xl cursor-not-allowed"
          >
            ← Day 0
          </button>
          
          <Link 
            to="/"
            className="text-primary hover:text-primary-dark px-8 py-4 border-2 border-primary rounded-xl hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300 font-bold"
          >
            Back to Home
          </Link>
          
          <button 
            disabled 
            className="text-text-dark px-6 py-3 border border-ui-border rounded-xl cursor-not-allowed"
          >
            Day 2 →
          </button>
        </div>

      </div>
    </div>
  );
}

export default Day1;