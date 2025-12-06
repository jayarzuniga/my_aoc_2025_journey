import { Link } from 'react-router-dom';

function Day6() {
  return (
    <div className="min-h-screen bg-background-darker py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Day Navigation */}
        <div className="flex justify-between items-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-4">
          <Link 
            to="/day/5"
            className="text-text-secondary hover:text-primary px-6 py-3 border border-ui-border rounded-xl hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300 font-medium"
          >
            ← Day 5
          </Link>
          
          <Link 
            to="/all-days"
            className="text-primary hover:text-primary-dark px-6 py-3 border-2 border-primary rounded-xl hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300 font-medium"
          >
            All Days
          </Link>
          
          <Link 
            to="/day/7"
            className="text-text-secondary hover:text-primary px-6 py-3 border border-ui-border rounded-xl hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300 font-medium"
          >
            Day 7 →
          </Link>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-br from-background-card to-background-dark border-2 border-primary rounded-3xl p-12 mb-12 shadow-glow relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl"></div>
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-black text-primary text-center mb-4 matrix-text">
              🎄 Day 6: Santa's Little IDOR 🎄
            </h1>
            <p className="text-text-secondary text-center mb-6 text-xl">Insecure Direct Object References - Complete Walkthrough</p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="bg-primary/20 border border-primary/30 text-primary px-5 py-2 rounded-full text-sm font-medium">
                Difficulty: Medium
              </span>
              <span className="bg-primary/20 border border-primary/30 text-primary px-5 py-2 rounded-full text-sm font-medium">
                Category: Web Security
              </span>
              <span className="bg-primary/20 border border-primary/30 text-primary px-5 py-2 rounded-full text-sm font-medium">
                Topics: IDOR, Access Control, Burp Suite
              </span>
            </div>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border-l-4 border-primary rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-black text-primary mb-6">🎯 Learning Objectives</h2>
          <ul className="space-y-3 text-text-secondary text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Understand the concept of authentication and authorization</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Learn how to spot potential opportunities for Insecure Direct Object References (IDORs)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Exploit IDOR to perform horizontal privilege escalation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Learn how to turn IDOR into SDOR (Secure Direct Object Reference)</span>
            </li>
          </ul>
        </div>

        {/* What is IDOR */}
        <div className="bg-gradient-to-br from-background-card to-background-dark backdrop-blur-xl border-l-4 border-primary-dark rounded-2xl p-8 mb-12 shadow-xl">
          <h2 className="text-3xl font-black text-primary mb-6">📖 What is IDOR?</h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            <strong className="text-text-primary">IDOR</strong> stands for <strong className="text-text-primary">Insecure Direct Object Reference</strong> and is a type of access control vulnerability. 
            Web applications often use references to determine what data to return when you make a request. When these references aren't properly 
            validated, attackers can manipulate them to access unauthorized data belonging to other users.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-primary/30 rounded-3xl p-8 mb-12">
          <h3 className="text-3xl font-black text-primary mb-6 flex items-center gap-3">
            <span>📋</span> Table of Contents
          </h3>
          <ul className="space-y-3">
            {[
              { id: 'setup', text: 'Step 1: Setting Up the Environment' },
              { id: 'access', text: 'Step 2: Accessing the Application' },
              { id: 'inspection', text: 'Step 3: Inspecting with Developer Tools' },
              { id: 'exploit', text: 'Step 4: Exploiting IDOR Vulnerability' },
              { id: 'encoding', text: 'Step 5: Understanding Encoding Schemes' },
              { id: 'burp', text: 'Step 6: Setting Up Burp Suite' },
              { id: 'bonus1', text: 'Bonus Task 1: Finding Child by Birthdate' },
              { id: 'bonus2', text: 'Bonus Task 2: Finding Valid Voucher' },
              { id: 'takeaways', text: 'Key Takeaways & Security Insights' }
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

        {/* Step 1: Setup */}
        <div id="setup" className="mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            🖥️ Step 1: Setting Up the Environment
          </h2>
          
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            TryHackMe provides two virtual machines for this challenge:
          </p>

          <ul className="space-y-3 text-text-secondary mb-8 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-text-primary">Server Machine:</strong> Hosts the vulnerable web application</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-text-primary">AttackBox:</strong> Your penetration testing machine</span>
            </li>
          </ul>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Starting both virtual machines</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img1.png" 
              alt="TryHackMe virtual machines setup"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            After several minutes, the system will provide you with credentials and the server's IP address:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Credentials and server IP</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img2.png" 
              alt="Login credentials and server IP address"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <div className="bg-gradient-to-br from-background-card to-background-dark border-l-4 border-primary-dark rounded-xl p-6">
            <p className="text-text-secondary text-lg">
              <strong className="text-primary">⚠️ Note:</strong> The IP address may vary depending on what TryHackMe assigns to your session.
            </p>
          </div>
        </div>

        {/* Step 2: Access */}
        <div id="access" className="mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            🌐 Step 2: Accessing the Application
          </h2>
          
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Open Firefox in the AttackBox and navigate to the provided IP address. You'll be greeted with a login page:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Login page</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img3.png" 
              alt="Web application login page"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Enter the credentials provided earlier to access the application.
          </p>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Once logged in, you'll see user information displayed on the dashboard:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="text-center bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
              <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: User dashboard view 1</p>
              <img 
                src="/my_aoc_2025_journey/images/day6/day6_img4.png" 
                alt="User dashboard showing profile information"
                className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
              />
            </div>
            <div className="text-center bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
              <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: User dashboard view 2</p>
              <img 
                src="/my_aoc_2025_journey/images/day6/day6_img5.png" 
                alt="Additional user information"
                className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-background-card to-background-dark border-l-4 border-primary rounded-xl p-6">
            <p className="text-text-secondary text-lg leading-relaxed">
              <strong className="text-primary">💡 Note:</strong> All detailed explanations about IDOR are available in the TryHackMe room at{' '}
              <a 
                href="https://tryhackme.com/room/idor-aoc2025-zl6MywQid9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark underline"
              >
                https://tryhackme.com/room/idor-aoc2025-zl6MywQid9
              </a>
              . This walkthrough focuses on the practical exploitation steps.
            </p>
          </div>
        </div>

        {/* Step 3: Inspection */}
        <div id="inspection" className="mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            🔍 Step 3: Inspecting with Developer Tools
          </h2>
          
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Right-click anywhere on the page and select <strong className="text-text-primary">"Inspect"</strong> to open the Firefox Developer Tools:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Opening Developer Tools</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img6.png" 
              alt="Right-click context menu showing Inspect option"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Reload the page to capture all network requests. Navigate to the <strong className="text-text-primary">Network</strong> tab 
            to see all queries made to the server:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Network tab showing API requests</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img7.png" 
              alt="Network tab with HTTP requests and responses"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary text-lg leading-relaxed">
            Click on specific requests to view detailed information including headers, parameters, and response data.
          </p>
        </div>

        {/* Step 4: Exploit */}
        <div id="exploit" className="mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            🎯 Step 4: Exploiting IDOR Vulnerability
          </h2>
          
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Navigate to the <strong className="text-text-primary">Storage</strong> tab in Developer Tools, then expand{' '}
            <strong className="text-text-primary">Local Storage</strong> in the left panel:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Local Storage inspection</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img8.png" 
              alt="Local Storage showing user ID in storage"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Notice the <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">userid</code> value. 
            In this example, it shows userid <code className="bg-background-darker text-primary px-3 py-1 rounded-lg border border-ui-border font-mono">10</code> for user "Neil".
          </p>

          <h3 className="text-2xl font-bold text-primary mb-6">💡 The Attack:</h3>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Let's test if we can access other users' data by manipulating this value:
          </p>

          <ol className="space-y-3 text-text-secondary text-lg pl-2 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold min-w-[24px]">1.</span>
              <span>Double-click the <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">userid</code> value</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold min-w-[24px]">2.</span>
              <span>Change it from <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">10</code> to <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">15</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold min-w-[24px]">3.</span>
              <span>Refresh the page</span>
            </li>
          </ol>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: After modifying userid</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img9.png" 
              alt="Page showing different user's information after IDOR manipulation"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <div className="bg-gradient-to-br from-background-card to-background-dark border-2 border-primary rounded-2xl p-8 text-center shadow-glow mb-8">
            <p className="text-3xl font-black text-primary mb-4">
              ⚠️ Vulnerability Confirmed!
            </p>
            <p className="text-text-secondary text-lg">
              The user details have changed, proving the application is vulnerable to IDOR attacks. 
              We successfully accessed another user's private information without proper authorization.
            </p>
          </div>
        </div>

        {/* Step 5: Encoding */}
        <div id="encoding" className="mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            🔐 Step 5: Understanding Encoding Schemes
          </h2>
          
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Sometimes, values may appear encoded using various methods such as Base64, MD5, or SHA1. Let's explore some examples:
          </p>

          <h3 className="text-2xl font-bold text-primary mb-6">Base64 Encoding Example:</h3>
          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Base64 encoded values</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img10.png" 
              alt="Interface showing Base64 encoded user IDs"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">MD5 Hashing Example:</h3>
          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: MD5 hashed values</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img11.png" 
              alt="Interface showing MD5 hashed identifiers"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">🛠️ Using CyberChef for Analysis:</h3>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            You can use <a href="https://cyberchef.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">CyberChef</a> to 
            identify and decode various encoding schemes:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: CyberChef analysis</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img12.png" 
              alt="CyberChef interface showing encoding detection"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">🎟️ Voucher Analysis:</h3>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Examine the vouchers section to identify the algorithm being used:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Voucher structure analysis</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img13.png" 
              alt="Vouchers showing UUID format"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">🔍 UUID Decoding:</h3>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Using the <a href="https://www.uuidtools.com/decode" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">UUID Tools Decoder</a>, 
            we can extract timestamp information from UUIDs:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: UUID decoder showing timestamp</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img14.png" 
              alt="UUID decoder revealing time-based information"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>
        </div>

        {/* Step 6: Burp Suite */}
        <div id="burp" className="mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            🔧 Step 6: Setting Up Burp Suite
          </h2>
          
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Now we'll use Burp Suite to automate our attacks. Launch Burp Suite from the AttackBox:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Burp Suite startup</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img15.png" 
              alt="Burp Suite welcome screen"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Click <strong className="text-text-primary">"Next"</strong> and select the default configuration.
          </p>

          <h3 className="text-2xl font-bold text-primary mb-6">🦊 Configure FoxyProxy:</h3>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            TryHackMe has FoxyProxy pre-installed. Enable it to route browser traffic through Burp Suite:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: FoxyProxy configuration</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img16.png" 
              alt="FoxyProxy extension showing Burp Suite proxy enabled"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">🚫 Disable Intercept:</h3>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Turn off intercept mode to allow the browser to load normally. When intercept is on, all requests are paused:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Intercept toggle</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img17.png" 
              alt="Burp Suite proxy tab showing intercept off"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">🎯 Set Target Scope:</h3>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            In the <strong className="text-text-primary">Target</strong> tab, right-click the target IP and select{' '}
            <strong className="text-text-primary">"Add to scope"</strong> to filter out unrelated traffic:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Adding target to scope</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img18.png" 
              alt="Burp Suite target tab with scope configuration"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>
        </div>

        {/* Bonus Task 1 */}
        <div id="bonus1" className="mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            🎁 Bonus Task 1: Finding Child by Birthdate
          </h2>
          
          <div className="bg-gradient-to-br from-background-card to-background-dark border-l-4 border-primary-dark rounded-2xl p-8 mb-8 shadow-xl">
            <h3 className="text-2xl font-bold text-primary mb-4">🎯 Challenge:</h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              Use either the base64 or md5 child endpoint to find the <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">id_number</code> of 
              the child born on <strong className="text-text-primary">2019-04-17</strong>. To speed up iteration, we'll use Burp Suite's Intruder feature.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">📝 Preparing the Attack:</h3>
          
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Navigate to the <strong className="text-text-primary">Proxy</strong> tab and select{' '}
            <strong className="text-text-primary">HTTP history</strong>. Find the request targeting the child endpoint, 
            right-click it, and select <strong className="text-text-primary">"Send to Intruder"</strong>:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Sending request to Intruder</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img19.png" 
              alt="HTTP history showing context menu with Send to Intruder option"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">🎯 Configuring Intruder:</h3>
          
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            In the <strong className="text-text-primary">Intruder</strong> tab, you'll see the complete request. 
            We need to target the ID parameter for brute-forcing. Highlight the value (e.g., <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">Mg==</code>) 
            and click <strong className="text-text-primary">"Add §"</strong> to mark it as a payload position:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Setting payload position</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img20.png" 
              alt="Intruder tab showing payload marker configuration"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">📄 Creating the Payload List:</h3>
          
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Create a text file containing Base64-encoded IDs using the terminal:
          </p>

          <div className="bg-background-darker border border-ui-border rounded-2xl p-6 mb-6 shadow-lg">
            <pre className="text-primary font-mono"><code>nano payload_ids.txt</code></pre>
          </div>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Creating payload file</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img21.png" 
              alt="Terminal showing nano editor with payload list"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Our instructor provided a pre-defined Base64 payload list (IDs 10-20) available at:{' '}
            <a href="http://pastebin.com/v98rvjRX" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">
              http://pastebin.com/v98rvjRX
            </a>
          </p>

          <h3 className="text-2xl font-bold text-primary mb-6">📤 Loading the Payload:</h3>
          
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            In the Intruder's <strong className="text-text-primary">Payloads</strong> tab, click the{' '}
            <strong className="text-text-primary">"Load"</strong> button and select your payload file:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Loading payload file</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img22.png" 
              alt="Intruder payload configuration with loaded payloads"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">🚀 Starting the Attack:</h3>
          
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Click <strong className="text-text-primary">"Start Attack"</strong> and Burp will iterate through all payload values:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Attack results</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img23.png" 
              alt="Intruder results showing all requests and responses"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">🔍 Finding the Answer:</h3>
          
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Review each response to find the child with the matching birthdate. Click through the results and check the response data:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Found the matching child</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img24.png" 
              alt="Response showing child born on 2019-04-17"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <div className="bg-gradient-to-br from-background-card to-background-dark border-2 border-primary rounded-3xl p-10 text-center shadow-glow pulse-glow mb-8">
            <p className="text-4xl font-black text-primary mb-4">
              🎉 Answer Found!
            </p>
            <p className="text-2xl font-mono text-primary-dark">
              id_number/child_id: 19
            </p>
          </div>
        </div>

        {/* Bonus Task 2 */}
        <div id="bonus2" className="mb-16">
          <div className="bg-gradient-to-r from-primary/20 to-transparent h-1 mb-6 rounded-full"></div>
          <h2 className="text-4xl font-black text-primary mb-8 flex items-center gap-3">
            🎟️ Bonus Task 2: Finding Valid Voucher
          </h2>
          
          <div className="bg-gradient-to-br from-background-card to-background-dark border-l-4 border-primary-dark rounded-2xl p-8 mb-8 shadow-xl">
            <h3 className="text-2xl font-bold text-primary mb-4">🎯 Challenge:</h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Using the <code className="bg-background-darker text-primary px-2 py-1 rounded border border-ui-border font-mono text-sm">/parents/vouchers/claim</code> endpoint, 
              find the voucher that is valid on <strong className="text-text-primary">20 November 2025</strong>.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              <strong className="text-primary">Insider Information:</strong> The voucher was generated exactly on the minute 
              somewhere between <strong className="text-text-primary">20:00 - 24:00 UTC</strong> that day.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">📝 Preparing the UUID Payload:</h3>
          
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Similar to the previous task, create a payload list. Our instructor provided a pre-generated UUID list for this specific time range:{' '}
            <a href="https://pastebin.com/4dBCpfYk" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">
              https://pastebin.com/4dBCpfYk
            </a>
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: UUID payload list</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img25.png" 
              alt="Text file containing generated UUIDs for the time range"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <div className="bg-gradient-to-br from-background-card to-background-dark border-l-4 border-primary rounded-xl p-6 mb-8">
            <p className="text-text-secondary text-lg leading-relaxed">
              <strong className="text-primary">💡 Pro Tip:</strong> The instructor used AI to generate all possible UUIDs for the given time range, 
              saving significant time compared to manual generation.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">🎯 Setting Up the Attack:</h3>
          
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Follow the same process as before: find the voucher claim request in HTTP history and send it to Intruder:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Configuring voucher attack</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img26.png" 
              alt="Intruder configuration for voucher endpoint"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Payload position marked</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img27.png" 
              alt="Request showing UUID payload marker"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6">🔍 Looking for Success:</h3>
          
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            We're looking for a server response with status code <strong className="text-text-primary">200 OK</strong>, 
            which indicates a valid voucher was found:
          </p>

          <div className="text-center mb-8 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
            <p className="text-text-muted text-sm mb-4 font-medium">Screenshot: Valid voucher found</p>
            <img 
              src="/my_aoc_2025_journey/images/day6/day6_img28.png" 
              alt="Intruder results highlighting 200 OK response"
              className="max-w-full h-auto rounded-xl border-2 border-primary/30 mx-auto shadow-lg"
            />
          </div>

          <div className="bg-gradient-to-br from-background-card to-background-dark border-2 border-primary rounded-3xl p-10 text-center shadow-glow pulse-glow mb-8">
            <p className="text-4xl font-black text-primary mb-4">
              🎊 Valid Voucher Found!
            </p>
            <p className="text-xl font-mono text-primary-dark break-all">
              22643e00-c655-11f0-ac99-026ccdf7d769
            </p>
          </div>

          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Note: Try to enter it to the website and see if it works.
          </p>

          
        </div>

        {/* Key Takeaways */}
        <div id="takeaways" className="mb-16">
          <div className="bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border-l-4 border-primary rounded-3xl p-10 shadow-2xl">
            <h2 className="text-4xl font-black text-primary mb-10 flex items-center gap-3">
              📚 Key Takeaways & Security Insights
            </h2>
            
            {/* Understanding IDOR */}
            <div className="mb-10 bg-background-dark/50 rounded-2xl p-8 border border-ui-border/20">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                🎯 Understanding IDOR
              </h3>
              <p className="text-text-secondary mb-4 text-lg leading-relaxed">
                <strong className="text-text-primary">Lesson:</strong> IDOR vulnerabilities occur when applications expose direct references 
                to internal objects without proper authorization checks. Attackers can manipulate these references to access unauthorized data.
              </p>
              <ul className="space-y-3 text-text-secondary text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Always implement server-side authorization checks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Never rely solely on hiding or obfuscating object references</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Validate that the requesting user has permission to access the requested resource</span>
                </li>
              </ul>
            </div>

            {/* Burp Suite Mastery */}
            <div className="mb-10 bg-background-dark/50 rounded-2xl p-8 border border-ui-border/20">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                🔧 Burp Suite Intruder
              </h3>
              <p className="text-text-secondary mb-4 text-lg leading-relaxed">
                <strong className="text-text-primary">Lesson:</strong> Burp Suite's Intruder is a powerful tool for automating attacks 
                and testing large numbers of payloads efficiently.
              </p>
              <div className="bg-background-darker border border-ui-border rounded-xl p-5 mb-5">
                <pre className="text-primary font-mono text-sm"><code>{`# Key Burp Suite Workflow:
1. Capture request in Proxy → HTTP History
2. Send to Intruder
3. Mark payload positions with § symbols
4. Load or create payload list
5. Start attack and analyze results
6. Look for status codes, response lengths, or content differences`}</code></pre>
              </div>
            </div>

            {/* Encoding & Obfuscation */}
            <div className="mb-10 bg-background-dark/50 rounded-2xl p-8 border border-ui-border/20">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                🔐 Encoding & Obfuscation
              </h3>
              <p className="text-text-secondary mb-4 text-lg leading-relaxed">
                <strong className="text-text-primary">Lesson:</strong> Encoding or hashing identifiers doesn't prevent IDOR attacks. 
                It only adds an extra step for attackers to decode or predict values.
              </p>
              <p className="text-text-muted mb-3"><strong className="text-text-primary">Common encoding schemes:</strong></p>
              <ul className="space-y-3 text-text-secondary text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-text-primary">Base64:</strong> Easily reversible encoding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-text-primary">MD5/SHA:</strong> Hashing, but predictable for sequential IDs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-text-primary">UUID:</strong> Time-based UUIDs can reveal generation timestamps</span>
                </li>
              </ul>
            </div>

            {/* Testing Methodology */}
            <div className="mb-10 bg-background-dark/50 rounded-2xl p-8 border border-ui-border/20">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                🔍 IDOR Testing Methodology
              </h3>
              <ol className="space-y-3 text-text-secondary text-lg pl-2">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold min-w-[24px]">1.</span>
                  <span><strong className="text-text-primary">Map the application:</strong> Identify all endpoints that use object references</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold min-w-[24px]">2.</span>
                  <span><strong className="text-text-primary">Analyze reference patterns:</strong> Determine if IDs are sequential, encoded, or hashed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold min-w-[24px]">3.</span>
                  <span><strong className="text-text-primary">Test manipulation:</strong> Try changing references to other users' objects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold min-w-[24px]">4.</span>
                  <span><strong className="text-text-primary">Check authorization:</strong> Verify if access controls are enforced</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold min-w-[24px]">5.</span>
                  <span><strong className="text-text-primary">Automate testing:</strong> Use tools like Burp Intruder for efficiency</span>
                </li>
              </ol>
            </div>

            {/* Prevention */}
            <div className="bg-background-dark/50 rounded-2xl p-8 border border-ui-border/20">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                🛡️ IDOR Prevention Best Practices
              </h3>
              <ul className="space-y-3 text-text-secondary text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-text-primary">Use indirect references:</strong> Map internal IDs to random session-specific tokens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-text-primary">Implement access control:</strong> Always verify user permissions server-side</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-text-primary">Use UUIDs properly:</strong> Version 4 (random) UUIDs, not time-based</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-text-primary">Log access attempts:</strong> Monitor for suspicious access patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-text-primary">Rate limiting:</strong> Prevent brute-force enumeration attempts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center mt-12 bg-gradient-to-br from-background-card to-background-overlay backdrop-blur-xl border border-ui-border/20 rounded-2xl p-6">
          <Link 
            to="/day/5"
            className="text-text-secondary hover:text-primary px-6 py-3 border border-ui-border rounded-xl hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300 font-medium"
          >
            ← Day 5
          </Link>
          
          <Link 
            to="/"
            className="text-primary hover:text-primary-dark px-8 py-4 border-2 border-primary rounded-xl hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300 font-bold"
          >
            Back to Home
          </Link>
          
          <Link 
            to="/day/7"
            className="text-text-secondary hover:text-primary px-6 py-3 border border-ui-border rounded-xl hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300 font-medium"
          >
            Day 7 →
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Day6;
