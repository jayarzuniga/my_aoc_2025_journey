import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Days', path: '/all-days' },
    { name: 'About', path: '/about' },
  ];

  const resources = [
    { name: 'TryHackMe', path: 'https://tryhackme.com/christmas', external: true },
    { name: 'Day 1', path: '/day/1' },
    { name: 'Walkthroughs', path: '/all-days' },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/jonhzuniga', label: 'LinkedIn' },
    { icon: <FaGithub />, href: 'https://github.com/jayarzuniga', label: 'GitHub' },
  ];

  return (
    <footer className="bg-background-darker pt-16 pb-8 border-t border-ui-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎄</span>
              <span className="text-xl font-black text-primary">AOC 2025</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Comprehensive walkthroughs and educational resources for TryHackMe's Advent of Cyber 2025. 
              Learn cybersecurity concepts through detailed explanations.
            </p>
            <a 
              href="mailto:jonhronelzuniga@gmail.com" 
              className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
            >
              <FaEnvelope />
              <span className="text-sm font-medium">jonhronelzuniga@gmail.com</span>
            </a>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base font-bold text-text-primary mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  {resource.external ? (
                    <a
                      href={resource.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                      {resource.name}
                    </a>
                  ) : (
                    <Link
                      to={resource.path}
                      className="text-sm text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                      {resource.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* About & Disclaimer */}
          <div>
            <h3 className="text-base font-bold text-text-primary mb-4">Disclaimer</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              These walkthroughs are for educational purposes only. Always attempt challenges yourself first.
            </p>
            <div className="bg-background-card border border-ui-border rounded-lg p-3">
              <p className="text-xs text-text-muted">
                <span className="text-primary font-semibold">⚠️ Note:</span> Not affiliated with TryHackMe. All challenge content belongs to TryHackMe.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-ui-border pt-8">
          {/* Copyright & Additional Info */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted text-center md:text-left">
              © {new Date().getFullYear()} Advent of Cyber Walkthrough Guide. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <Link 
                to="/privacy" 
                className="text-sm text-text-muted hover:text-text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-text-muted">•</span>
              <Link 
                to="/terms" 
                className="text-sm text-text-muted hover:text-text-secondary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Made with love */}
          <div className="text-center mt-6">
            <p className="text-xs text-text-muted">
              Made with <span className="text-primary">💛</span> for the cybersecurity community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;