import { Link } from 'react-router-dom';

function Day1() {
  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Day Navigation */}
        <div className="flex justify-between items-center mb-8 bg-gray-900 border border-green-500 rounded-lg p-4">
          <button 
            disabled 
            className="text-gray-600 px-4 py-2 border border-gray-700 rounded cursor-not-allowed"
          >
            ← Previous Day
          </button>
          
          <Link 
            to="/all-days"
            className="text-green-500 hover:text-green-300 px-4 py-2 border border-green-500 rounded hover:bg-green-500 hover:bg-opacity-10 transition"
          >
            All Days
          </Link>
          
          <button 
            disabled 
            className="text-gray-600 px-4 py-2 border border-gray-700 rounded cursor-not-allowed"
          >
            Next Day →
          </button>
        </div>

        {/* Header */}
        <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-8 mb-8 glow-green-strong">
          <h1 className="text-4xl font-bold text-green-500 text-center mb-4 matrix-text">
            🎄 Day 1: Linux CLI - Shells & Bells 🎄
          </h1>
          <p className="text-gray-400 text-center mb-6">Side Quest 1 - Complete Walkthrough</p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="bg-black border border-green-500 text-green-500 px-4 py-2 rounded">
              Difficulty: Intermediate
            </span>
            <span className="bg-black border border-green-500 text-green-500 px-4 py-2 rounded">
              Category: Linux
            </span>
            <span className="bg-black border border-green-500 text-green-500 px-4 py-2 rounded">
              Topics: Git, GPG, Steganography
            </span>
          </div>
        </div>

        {/* Challenge Description */}
        <div className="bg-gray-900 border-l-4 border-green-500 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-500 mb-4">📜 The Challenge</h2>
          <p className="text-gray-300 mb-4">
            For those who consider themselves intermediate and want another challenge, check McSkidy's hidden note in{' '}
            <code className="bg-black text-green-500 px-2 py-1 rounded border border-gray-700">
              /home/mcskidy/Documents/
            </code>
            {' '}to get access to the key for Side Quest 1!
          </p>
          <p className="text-gray-300">
            You are logged in as the user <strong className="text-white">mcskidy</strong> on the provided VM.
          </p>
        </div>

        {/* Initial Screenshot */}
        <div className="text-center mb-8 bg-gray-900 p-4 rounded-lg border border-gray-700">
          <p className="text-gray-400 text-sm mb-2">Screenshot: Initial login screen</p>
          <img 
            src="//my_aoc_2025_journey/images/day1/day1_img1.png" 
            alt="Initial login screen"
            className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
          />
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-900 border border-green-500 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-green-500 mb-4">📋 Table of Contents</h3>
          <ul className="space-y-2">
            <li>
              <a href="#step1" className="text-green-400 hover:text-green-300 transition">
                → Step 1: Finding McSkidy's Hidden Note
              </a>
            </li>
            <li>
              <a href="#step2" className="text-green-400 hover:text-green-300 transition">
                → Step 2: Accessing eddi_knapp's Account
              </a>
            </li>
            <li>
              <a href="#egg1" className="text-green-400 hover:text-green-300 transition">
                → Easter Egg #1: Environment Variables
              </a>
            </li>
            <li>
              <a href="#egg2" className="text-green-400 hover:text-green-300 transition">
                → Easter Egg #2: Git History
              </a>
            </li>
            <li>
              <a href="#egg3" className="text-green-400 hover:text-green-300 transition">
                → Easter Egg #3: Image Steganography
              </a>
            </li>
            <li>
              <a href="#decrypt" className="text-green-400 hover:text-green-300 transition">
                → Step 3: Decrypting McSkidy's Vault
              </a>
            </li>
            <li>
              <a href="#wishlist" className="text-green-400 hover:text-green-300 transition">
                → Step 4: The Wishlist Challenge
              </a>
            </li>
            <li>
              <a href="#final" className="text-green-400 hover:text-green-300 transition">
                → Step 5: Decoding the Final Message
              </a>
            </li>
            <li>
              <a href="#bonus" className="text-green-400 hover:text-green-300 transition">
                → Bonus: The Spicier Challenge
              </a>
            </li>
            <li>
              <a href="#takeaways" className="text-green-400 hover:text-green-300 transition">
                → Key Takeaways & Command Reference
              </a>
            </li>
          </ul>
        </div>

        {/* Step 1 */}
        <div id="step1" className="mb-12">
          <h2 className="text-3xl font-bold text-green-500 border-b-2 border-green-500 pb-4 mb-6">
            🔍 Step 1: Finding McSkidy's Hidden Note
          </h2>
          
          <p className="text-gray-300 mb-4">
            Navigate to the specified directory and read the hidden message using the following commands:
          </p>
          
          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-green-500"><code>{`cd /home/mcskidy/Documents/
ls
cat <filename>`}</code></pre>
          </div>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: Initial directory listing</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img2.png" 
              alt="Initial directory listing in Documents folder"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <div className="bg-gray-900 border-l-4 border-green-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-400 mb-4">📨 McSkidy's Message</h3>
            <p className="text-gray-300 mb-2">
              <strong className="text-white">From:</strong> mcskidy<br/>
              <strong className="text-white">To:</strong> whoever finds this
            </p>
            
            <p className="text-gray-300 my-4">
              I had a brief moment when no one was watching. I used it.
            </p>
            
            <p className="text-gray-300 my-4">
              I've managed to plant a few clues around the account. If you can access the user below and look carefully, 
              those three little "easter eggs" will combine into a passcode that unlocks a further message I encrypted 
              in the <code className="bg-black text-green-500 px-2 py-1 rounded">/home/eddi_knapp/Documents/</code> directory. 
              I didn't want the wrong eyes to see it.
            </p>
            
            <p className="text-gray-300 my-4">
              <strong className="text-white">Access the user account:</strong><br/>
              Username: <code className="bg-black text-green-500 px-2 py-1 rounded">eddi_knapp</code><br/>
              Password: <code className="bg-black text-green-500 px-2 py-1 rounded">S0mething1Sc0ming</code>
            </p>
            
            <p className="text-gray-300 my-4">
              <strong className="text-white">There are three hidden easter eggs.</strong><br/>
              They combine to form the passcode to open my encrypted vault.
            </p>
            
            <div className="bg-black border-l-4 border-yellow-500 p-4 my-4 italic">
              <p className="text-white mb-3"><strong>Clues (one for each egg):</strong></p>
              
              <p className="text-gray-300 mb-3">
                <strong className="text-white">1)</strong> I ride with your session, not with your chest of files. 
                Open the little bag your shell carries when you arrive.
              </p>
              
              <p className="text-gray-300 mb-3">
                <strong className="text-white">2)</strong> The tree shows today; the rings remember yesterday. 
                Read the ledger's older pages.
              </p>
              
              <p className="text-gray-300">
                <strong className="text-white">3)</strong> When pixels sleep, their tails sometimes whisper plain words. 
                Listen to the tail.
              </p>
            </div>
            
            <p className="text-gray-300 my-4">
              Find the fragments, join them in order, and use the resulting passcode to decrypt the message I left. 
              Be careful – I had to be quick, and I left only enough to get help.
            </p>
            
            <p className="text-gray-300">
              ~ McSkidy
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div id="step2" className="mb-12">
          <h2 className="text-3xl font-bold text-green-500 border-b-2 border-green-500 pb-4 mb-6">
            🔑 Step 2: Accessing eddi_knapp's Account
          </h2>
          
          <p className="text-gray-300 mb-4">
            Use the <code className="bg-black text-green-500 px-2 py-1 rounded">su</code> command to switch users 
            with the provided credentials:
          </p>
          
          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>{`su eddi_knapp
Password: S0mething1Sc0ming`}</code></pre>
          </div>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: Logged in as eddi_knapp</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img3.png" 
              alt="Successfully logged in as eddi_knapp user"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <p className="text-gray-300">
            You are now logged in as user <strong className="text-white">eddi_knapp</strong>. Time to hunt for the three hidden easter eggs!
          </p>
        </div>

        {/* Easter Egg 1 */}
        <div id="egg1" className="mb-12">
          <h2 className="text-3xl font-bold text-green-500 border-b-2 border-green-500 pb-4 mb-6">
            🥚 Easter Egg #1: Environment Variables
          </h2>
          
          <div className="bg-black border-l-4 border-yellow-500 p-4 mb-6 italic">
            <p className="text-white">
              <strong>Riddle:</strong> "I ride with your session, not with your chest of files. 
              Open the little bag your shell carries when you arrive."
            </p>
          </div>

          <h3 className="text-xl font-bold text-green-400 mb-4">💡 Interpretation:</h3>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><strong className="text-white">"I ride with your session"</strong> = Shell environment</li>
            <li><strong className="text-white">"Not with your chest of files"</strong> = Not persistent regular files</li>
            <li><strong className="text-white">"Little bag your shell carries"</strong> = Environment variables</li>
          </ul>

          <p className="text-gray-300 mb-4">
            Use the <code className="bg-black text-green-500 px-2 py-1 rounded">env</code> command to display 
            all environment variables stored in the current session:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>env</code></pre>
          </div>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: Environment variables output</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img4.png" 
              alt="Output of env command showing PASSFRAG1"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <p className="text-gray-300 mb-4">
            Look for any suspicious variables. You'll find a variable named <code className="bg-black text-green-500 px-2 py-1 rounded">PASSFRAG1</code>:
          </p>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: First password fragment</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img5.png" 
              alt="PASSFRAG1 revealed"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-6 text-center pulse-glow mb-6">
            <p className="text-2xl font-bold text-green-500">
              🎉 PASSFRAG1: 3ast3r
            </p>
          </div>
        </div>

        {/* PART 2 STARTS HERE */}

        {/* Easter Egg 2 */}
        <div id="egg2" className="mb-12">
          <h2 className="text-3xl font-bold text-green-500 border-b-2 border-green-500 pb-4 mb-6">
            🥚 Easter Egg #2: Git History
          </h2>

          <div className="bg-black border-l-4 border-yellow-500 p-4 mb-6 italic">
            <p className="text-white">
              <strong>Riddle:</strong> "The tree shows today; the rings remember yesterday. 
              Read the ledger's older pages."
            </p>
          </div>

          <h3 className="text-xl font-bold text-green-400 mb-4">💡 Interpretation:</h3>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><strong className="text-white">"The tree shows today"</strong> = The working tree / current filesystem contents</li>
            <li><strong className="text-white">"The rings remember yesterday"</strong> = Commit history (like rings of a tree)</li>
            <li><strong className="text-white">"Read the ledger's older pages"</strong> = Git log or history-reading commands</li>
          </ul>

          <p className="text-gray-300 mb-4">
            Navigate to eddi_knapp's home directory and list all files, including hidden ones:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>{`cd ~
ls -la`}</code></pre>
          </div>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: Home directory listing</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img6.png" 
              alt="Home directory showing .secret_git folder"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <p className="text-gray-300 mb-4">
            Notice the hidden folder <code className="bg-black text-green-500 px-2 py-1 rounded">.secret_git</code>. Let's investigate:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>{`cd .secret_git
ls -la`}</code></pre>
          </div>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: Inside secret_git folder</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img7.png" 
              alt="Contents of .secret_git directory"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <p className="text-gray-300 mb-4">
            There's a <code className="bg-black text-green-500 px-2 py-1 rounded">.git</code> directory inside, 
            indicating this is a Git repository. First, check if there are any uncommitted changes:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>git status</code></pre>
          </div>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: Git status output</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img8.png" 
              alt="Git status showing clean working tree"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <p className="text-gray-300 mb-4">
            The repository is clean (nothing to commit). Now let's examine the Git history:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>git log --oneline --graph --decorate --all</code></pre>
          </div>

          <p className="text-gray-300 mb-4">
            <strong className="text-white">Command explanation:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><code className="bg-black text-green-500 px-2 py-1 rounded">--oneline</code>: Displays each commit on a single line</li>
            <li><code className="bg-black text-green-500 px-2 py-1 rounded">--graph</code>: Shows a text-based graphical representation</li>
            <li><code className="bg-black text-green-500 px-2 py-1 rounded">--decorate</code>: Shows branch and tag names</li>
            <li><code className="bg-black text-green-500 px-2 py-1 rounded">--all</code>: Shows all branches</li>
          </ul>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: Git log output</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img9.png" 
              alt="Git log showing commit history"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <p className="text-gray-300 mb-4">
            We can see two commits:
          </p>
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
            <li>"add private note"</li>
            <li>"remove sensitive note"</li>
          </ol>

          <p className="text-gray-300 mb-4">
            The second fragment was likely added in the first commit and then removed. Let's view the "add private note" commit:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>{`git show <commit_id>`}</code></pre>
          </div>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: Git show output revealing PASSFRAG2</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img10.png" 
              alt="Git show command revealing PASSFRAG2 in commit history"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-6 text-center pulse-glow mb-6">
            <p className="text-2xl font-bold text-green-500">
              🎉 PASSFRAG2: -1s-
            </p>
          </div>
        </div>

        {/* Easter Egg 3 */}
        <div id="egg3" className="mb-12">
          <h2 className="text-3xl font-bold text-green-500 border-b-2 border-green-500 pb-4 mb-6">
            🥚 Easter Egg #3: Image Steganography
          </h2>

          <div className="bg-black border-l-4 border-yellow-500 p-4 mb-6 italic">
            <p className="text-white">
              <strong>Riddle:</strong> "When pixels sleep, their tails sometimes whisper plain words. Listen to the tail."
            </p>
          </div>

          <h3 className="text-xl font-bold text-green-400 mb-4">💡 Interpretation:</h3>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><strong className="text-white">"Pixels sleep"</strong> = Image files</li>
            <li><strong className="text-white">"Their tails"</strong> = Least significant bits (pixel tails) or file tails/metadata</li>
            <li><strong className="text-white">"Whisper plain words"</strong> = Hidden plaintext embedded inside the image</li>
            <li><strong className="text-white">"Listen to the tail"</strong> = Extract the hidden data</li>
          </ul>

          <p className="text-gray-300 mb-4">
            /my_aoc_2025_journey/images are typically stored in the Pictures directory. Let's investigate:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>{`cd ~
ls -la
cd Pictures
ls -la`}</code></pre>
          </div>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: Pictures directory contents</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img11.png" 
              alt="Listing of Pictures directory showing hidden files"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <p className="text-gray-300 mb-4">
            Several interesting items:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><code className="bg-black text-green-500 px-2 py-1 rounded">photo_meta_1.txt</code>, <code className="bg-black text-green-500 px-2 py-1 rounded">photo_meta_2.txt</code>, <code className="bg-black text-green-500 px-2 py-1 rounded">photo_meta_3.txt</code> - Text files in an image directory (suspicious!)</li>
            <li><code className="bg-black text-green-500 px-2 py-1 rounded">hidden_pic_1.png</code> through <code className="bg-black text-green-500 px-2 py-1 rounded">hidden_pic_5.png</code> - Hidden image files</li>
            <li><code className="bg-black text-green-500 px-2 py-1 rounded">.easter_egg</code> - A hidden file (bingo!)</li>
          </ul>

          <p className="text-gray-300 mb-4">
            Let's check the contents of the hidden <code className="bg-black text-green-500 px-2 py-1 rounded">.easter_egg</code> file:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>cat .easter_egg</code></pre>
          </div>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: Third password fragment</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img12.png" 
              alt="Cat command showing PASSFRAG3 content"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-6 text-center pulse-glow mb-6">
            <p className="text-2xl font-bold text-green-500">
              🎉 PASSFRAG3: c0M1nG
            </p>
          </div>
        </div>

        {/* Step 3: Decrypting */}
        <div id="decrypt" className="mb-12">
          <h2 className="text-3xl font-bold text-green-500 border-b-2 border-green-500 pb-4 mb-6">
            🔓 Step 3: Decrypting McSkidy's Vault
          </h2>

          <p className="text-gray-300 mb-4">
            Now we have all three fragments. Combining them in order gives us the complete passkey:
          </p>

          <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-6 text-center pulse-glow mb-6">
            <p className="text-2xl font-bold text-green-500">
              🔑 Complete Passkey: 3ast3r-1s-c0M1nG
            </p>
          </div>

          <p className="text-gray-300 mb-4">
            According to the initial message, there's an encrypted file in <code className="bg-black text-green-500 px-2 py-1 rounded">/home/eddi_knapp/Documents/</code>. Let's navigate there:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>{`cd ~
ls
cd Documents
ls`}</code></pre>
          </div>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: Documents directory with encrypted file</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img13.png" 
              alt="Documents directory showing mcskidy_note.txt.gpg file"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <p className="text-gray-300 mb-4">
            We find the file <code className="bg-black text-green-500 px-2 py-1 rounded">mcskidy_note.txt.gpg</code>. 
            GPG is an encryption tool. We can decrypt it using:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-green-500"><code>{`gpg --pinentry-mode loopback --output <output_filename> --decrypt <filename>.gpg`}</code></pre>
          </div>

          <p className="text-gray-300 mb-4">
            When prompted, enter the passkey we discovered: <code className="bg-black text-green-500 px-2 py-1 rounded">3ast3r-1s-c0M1nG</code>
          </p>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: Decrypting the vault</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img14.png" 
              alt="Successfully decrypted GPG file"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <p className="text-gray-300 mb-4">
            Decryption successful! Let's read the contents.
          </p>
        </div>

        {/* Step 4: Wishlist */}
        <div id="wishlist" className="mb-12">
          <h2 className="text-3xl font-bold text-green-500 border-b-2 border-green-500 pb-4 mb-6">
            📝 Step 4: The Wishlist Challenge
          </h2>

          <p className="text-gray-300 mb-4">
            The decrypted message reveals another task. We need to access <code className="bg-black text-green-500 px-2 py-1 rounded">/home/socmas/2025/wishlist.txt</code> and update it with a specific list of items.
          </p>

          <p className="text-gray-300 mb-4">
            However, this directory is not accessible from the eddi_knapp account. We need to return to the mcskidy user. 
            Open a new terminal session as mcskidy.
          </p>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: New terminal as mcskidy</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img15.png" 
              alt="Opening new terminal as mcskidy"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <p className="text-gray-300 mb-4">
            Navigate to the directory and edit the wishlist:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>cd /home/socmas/2025</code></pre>
          </div>

          <p className="text-gray-300 mb-4">
            First, verify the current state by accessing the web interface at <code className="bg-black text-green-500 px-2 py-1 rounded">http://10.49.162.159:8080</code> in Firefox.
          </p>

          <p className="text-gray-300 mb-4">
            Then edit the wishlist file:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>sudo nano wishlist.txt</code></pre>
          </div>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: Editing wishlist.txt in nano</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img16.png" 
              alt="Nano editor showing wishlist items being added"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <p className="text-gray-300 mb-4">
            Add all the items from the decrypted message, then save the file:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Press <code className="bg-black text-green-500 px-2 py-1 rounded">Ctrl+O</code> to save</li>
            <li>Press <code className="bg-black text-green-500 px-2 py-1 rounded">Enter</code> to confirm the filename</li>
            <li>Press <code className="bg-black text-green-500 px-2 py-1 rounded">Ctrl+X</code> to exit</li>
          </ul>

          <p className="text-gray-300 mb-4">
            After saving, refresh the webpage. You should see a new page with an UNLOCK_KEY.
          </p>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: Unlock key revealed</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img17.png" 
              alt="Web interface showing UNLOCK_KEY after successful wishlist update"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>
        </div>

      {/* PART 3 STARTS HERE */}

        {/* Step 5: Final Message */}
        <div id="final" className="mb-12">
          <h2 className="text-3xl font-bold text-green-500 border-b-2 border-green-500 pb-4 mb-6">
            🏁 Step 5: Decoding the Final Message
          </h2>

          <p className="text-gray-300 mb-4">
            Save the UNLOCK_KEY to a file as instructed:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>cat &gt; /tmp/website_output.txt</code></pre>
          </div>

          <p className="text-gray-300 mb-4">
            Paste the UNLOCK_KEY and press <code className="bg-black text-green-500 px-2 py-1 rounded">Ctrl+D</code> to save and exit.
          </p>

          <p className="text-gray-300 mb-4">
            Now use OpenSSL to decrypt the message:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre className="text-green-500 text-sm"><code>{`openssl enc -d -aes-256-cbc -pbkdf2 -iter 200000 -salt -base64 -in /tmp/website_output.txt -out /tmp/decoded_message.txt -pass pass:'91J6X7R4FQ9TQPM9JX2Q9X2Z'`}</code></pre>
          </div>

          <p className="text-gray-300 mb-4">
            Read the decoded message:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>cat /tmp/decoded_message.txt</code></pre>
          </div>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: Decoded message</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img18.png" 
              alt="Final decoded message showing the flag"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-8 text-center pulse-glow mb-6">
            <p className="text-3xl font-bold text-green-500 mb-4">
              🎊 FLAG OBTAINED 🎊
            </p>
            <p className="text-2xl font-mono text-green-400">
              THM{'{'}w3lcome_2_A0c_2025{'}'}
            </p>
          </div>
        </div>

        {/* Bonus Step */}
        <div id="bonus" className="mb-12">
          <h2 className="text-3xl font-bold text-green-500 border-b-2 border-green-500 pb-4 mb-6">
            🎁 Bonus: The Spicier Challenge
          </h2>

          <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6 mb-6">
            <p className="text-gray-300 mb-3">
              <strong className="text-white">NEXT STEP:</strong>
            </p>
            <p className="text-gray-300 mb-3">
              If you fancy something a little...spicier...use the FLAG you just obtained as the passphrase to unlock:
            </p>
            <p className="text-gray-300">
              <code className="bg-black text-green-500 px-2 py-1 rounded">/home/eddi_knapp/.secret/dir</code>
            </p>
            <p className="text-gray-300 mt-3">
              That hidden directory has been archived and encrypted with the FLAG.
            </p>
          </div>

          <p className="text-gray-300 mb-4">
            Switch back to the eddi_knapp user and navigate to the secret directory:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>{`cd ~
cd .secret
ls -la`}</code></pre>
          </div>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: .secret directory contents</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img19.png" 
              alt="Secret directory showing encrypted tar.gz.gpg file"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <p className="text-gray-300 mb-4">
            You'll find an encrypted file: <code className="bg-black text-green-500 px-2 py-1 rounded">dir.tar.gz.gpg</code>
          </p>

          <p className="text-gray-300 mb-4">
            Decrypt it using the FLAG as the passphrase:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>gpg --pinentry-mode loopback --output dir.tar.gz --decrypt dir.tar.gz.gpg</code></pre>
          </div>

          <p className="text-gray-300 mb-4">
            Extract the tar archive:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>tar -xzf dir.tar.gz</code></pre>
          </div>

          <p className="text-gray-300 mb-4">
            This creates a <code className="bg-black text-green-500 px-2 py-1 rounded">dir</code> folder containing a PNG image - hopefully our final key!
          </p>

          <h3 className="text-xl font-bold text-green-400 mb-4 mt-8">🖼️ Viewing the Final Image</h3>

          <p className="text-gray-300 mb-4">
            Opening the file directly posed some challenges due to VM authorization restrictions. Several approaches were attempted:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Creating a base64 output to copy externally - failed due to clipboard length limitations</li>
            <li>Creating an HTML file to view in Firefox - blocked by access restrictions</li>
          </ul>

          <p className="text-gray-300 mb-4">
            The successful solution was to expose it via a simple HTTP server using Python:
          </p>

          <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6">
            <pre className="text-green-500"><code>{`cd ~/.secret/dir
python3 -m http.server`}</code></pre>
          </div>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: Starting Python HTTP server</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img20.png" 
              alt="Python HTTP server running in terminal"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <p className="text-gray-300 mb-4">
            Then access it in Firefox using the given IP and port (e.g., <code className="bg-black text-green-500 px-2 py-1 rounded">http://localhost:8000</code>):
          </p>

          <p className="text-gray-300 mb-4">
            Click on <code className="bg-black text-green-500 px-2 py-1 rounded">sq1.png</code> to view the final flag!
          </p>

          <div className="text-center mb-6 bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Screenshot: The final bonus flag!</p>
            <img 
              src="//my_aoc_2025_journey/images/day1/day1_img21.png" 
              alt="Final bonus flag displayed in browser"
              className="max-w-full h-auto rounded-lg border border-green-500 mx-auto"
            />
          </div>

          <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-8 text-center pulse-glow">
            <p className="text-3xl font-bold text-green-500">
              🎉 CONGRATULATIONS! 🎉<br/>
              You've completed Side Quest 1!
            </p>
          </div>
        </div>

        {/* Key Takeaways */}
        <div id="takeaways" className="mb-12">
          <div className="bg-gray-900 border-l-4 border-green-500 rounded-lg p-6">
            <h2 className="text-3xl font-bold text-green-500 mb-6">
              📚 Key Takeaways & Command Reference
            </h2>
            
            {/* Environment Variables */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-green-400 mb-3">🔐 Environment Variables Security</h3>
              <p className="text-gray-300 mb-3">
                <strong className="text-white">Lesson:</strong> Environment variables are often overlooked hiding spots for sensitive data. 
                Developers sometimes store API keys, passwords, or config data in environment variables, thinking they're temporary and safe.
              </p>
              <p className="text-gray-400 mb-2"><strong className="text-white">Commands to investigate:</strong></p>
              <div className="bg-black border border-gray-700 rounded-lg p-4 mb-4">
                <pre className="text-green-500"><code>{`env                    # Display all environment variables
printenv               # Alternative command
echo $VARIABLE_NAME    # Check specific variable
export                 # Show exported variables`}</code></pre>
              </div>
              <p className="text-gray-300">
                <strong className="text-white">Where to look:</strong> Check <code className="bg-black text-green-500 px-2 py-1 rounded">~/.bashrc</code>, 
                <code className="bg-black text-green-500 px-2 py-1 rounded">~/.bash_profile</code>, 
                <code className="bg-black text-green-500 px-2 py-1 rounded">~/.profile</code>, and 
                <code className="bg-black text-green-500 px-2 py-1 rounded">/etc/environment</code> for persistent environment variable definitions.
              </p>
            </div>

            {/* Git History */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-green-400 mb-3">🗂️ Git History Forensics</h3>
              <p className="text-gray-300 mb-3">
                <strong className="text-white">Lesson:</strong> Git never truly forgets. Even if you delete sensitive files or commit messages, 
                they remain in the repository's history. Attackers often mine git history for accidentally committed credentials, API keys, 
                or sensitive configuration files.
              </p>
              <p className="text-gray-400 mb-2"><strong className="text-white">Essential Git commands:</strong></p>
              <div className="bg-black border border-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                <pre className="text-green-500 text-sm"><code>{`git log --oneline --graph --decorate --all    # View commit history
git show <commit-id>                          # View specific commit details
git log -p                                     # Show commit history with diffs
git log --all --full-history -- <filename>    # Track file through entire history
git reflog                                     # Show reference logs (even deleted commits)
git diff <commit1> <commit2>                  # Compare two commits
git log --grep="password"                      # Search commit messages`}</code></pre>
              </div>
              <p className="text-gray-300">
                <strong className="text-white">Where to look:</strong> Always check <code className="bg-black text-green-500 px-2 py-1 rounded">.git</code> directories, 
                <code className="bg-black text-green-500 px-2 py-1 rounded">.gitignore</code> files (shows what they're trying to hide), 
                and search for hidden <code className="bg-black text-green-500 px-2 py-1 rounded">.git</code> folders in unexpected locations.
              </p>
            </div>

            {/* Steganography */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-green-400 mb-3">🖼️ Steganography & Hidden Files</h3>
              <p className="text-gray-300 mb-3">
                <strong className="text-white">Lesson:</strong> Data can be hidden in image metadata, file tails, or simply as hidden files 
                in unexpected directories. Steganography exploits the fact that most users only look at surface-level content.
              </p>
              <p className="text-gray-400 mb-2"><strong className="text-white">Investigation commands:</strong></p>
              <div className="bg-black border border-gray-700 rounded-lg p-4 mb-4">
                <pre className="text-green-500"><code>{`ls -la                         # List all files including hidden (starts with .)
find . -type f -name ".*"      # Find all hidden files recursively
file <filename>                # Identify file type
strings <filename>             # Extract readable strings from binary files
exiftool <image>               # Extract image metadata
steghide extract -sf <file>    # Extract hidden data from images
tail <filename>                # View file end (where data might be appended)
xxd <filename>                 # Hex dump to see raw file contents`}</code></pre>
              </div>
              <p className="text-gray-300">
                <strong className="text-white">Where to look:</strong> Pictures directory, Documents folder, and any directory that seems 
                to contain mismatched file types (like .txt files in Pictures). Check file sizes - unusually large images may contain hidden data.
              </p>
            </div>

            {/* GPG Encryption */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-green-400 mb-3">🔒 GPG Encryption & Decryption</h3>
              <p className="text-gray-300 mb-3">
                <strong className="text-white">Lesson:</strong> GPG (GNU Privacy Guard) provides military-grade encryption for files. 
                Understanding how to decrypt GPG files is crucial for security investigations and CTF challenges.
              </p>
              <p className="text-gray-400 mb-2"><strong className="text-white">GPG commands:</strong></p>
              <div className="bg-black border border-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                <pre className="text-green-500 text-sm"><code>{`# Decrypt a file with passphrase
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
              <p className="text-gray-300">
                <strong className="text-white">Where to look:</strong> Files ending in <code className="bg-black text-green-500 px-2 py-1 rounded">.gpg</code>, 
                <code className="bg-black text-green-500 px-2 py-1 rounded">.asc</code>, or 
                <code className="bg-black text-green-500 px-2 py-1 rounded">.pgp</code>. Check Documents, hidden directories, and backup folders.
              </p>
            </div>

            {/* General Reconnaissance */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-green-400 mb-3">🔎 General Reconnaissance Tips</h3>
              <div className="bg-black border border-gray-700 rounded-lg p-4 mb-4">
                <pre className="text-green-500 text-sm"><code>{`pwd                           # Show current directory
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
            <div className="mb-8">
              <h3 className="text-xl font-bold text-green-400 mb-3">💡 Investigation Methodology</h3>
              <ol className="list-decimal list-inside text-gray-300 space-y-2">
                <li><strong className="text-white">Enumerate users:</strong> Check <code className="bg-black text-green-500 px-2 py-1 rounded">/home/</code> directory for all user accounts</li>
                <li><strong className="text-white">Check hidden files:</strong> Use <code className="bg-black text-green-500 px-2 py-1 rounded">ls -la</code> in every directory - files starting with <code className="bg-black text-green-500 px-2 py-1 rounded">.</code> are gold mines</li>
                <li><strong className="text-white">Review history:</strong> Check <code className="bg-black text-green-500 px-2 py-1 rounded">.bash_history</code>, git logs, and command history for clues</li>
                <li><strong className="text-white">Inspect permissions:</strong> Use <code className="bg-black text-green-500 px-2 py-1 rounded">ls -l</code> to see file permissions and ownership</li>
                <li><strong className="text-white">Look for patterns:</strong> Unusual file locations, mismatched file types, or suspicious naming conventions</li>
                <li><strong className="text-white">Read documentation:</strong> Check README files, notes, and comments in configuration files</li>
              </ol>
            </div>

            {/* Security Best Practices */}
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-3">⚠️ Security Best Practices</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Never commit secrets to git repositories - use <code className="bg-black text-green-500 px-2 py-1 rounded">.gitignore</code> and environment variables properly</li>
                <li>Use git tools like <code className="bg-black text-green-500 px-2 py-1 rounded">git-secrets</code> or <code className="bg-black text-green-500 px-2 py-1 rounded">gitleaks</code> to scan for accidentally committed credentials</li>
                <li>Rotate credentials immediately if they've been committed to version control</li>
                <li>Store sensitive data in proper secret management systems (HashiCorp Vault, AWS Secrets Manager, etc.)</li>
                <li>Use <code className="bg-black text-green-500 px-2 py-1 rounded">git filter-branch</code> or <code className="bg-black text-green-500 px-2 py-1 rounded">BFG Repo-Cleaner</code> to remove secrets from git history</li>
                <li>Always assume that deleted files can be recovered - deletion is not destruction</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center mt-12 bg-gray-900 border border-green-500 rounded-lg p-4">
          <button 
            disabled 
            className="text-gray-600 px-4 py-2 border border-gray-700 rounded cursor-not-allowed"
          >
            ← Day 0
          </button>
          
          <Link 
            to="/"
            className="text-green-500 hover:text-green-300 px-4 py-2 border border-green-500 rounded hover:bg-green-500 hover:bg-opacity-10 transition"
          >
            Back to Home
          </Link>
          
          <button 
            disabled 
            className="text-gray-600 px-4 py-2 border border-gray-700 rounded cursor-not-allowed"
          >
            Day 2 →
          </button>
        </div>

      </div>
    </div>
  );
}

export default Day1;