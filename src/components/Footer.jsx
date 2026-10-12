import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/6 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-semibold text-white mb-2">Avneet Singh</h3>
            <p className="text-muted text-sm">Full Stack Developer specializing in MERN.</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-white mb-3 text-sm">Quick Links</p>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Skills", "Projects", "Contact", "Experience"].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase() === "home" ? "/" : item.toLowerCase() === "experience" ? "/experience" : `/#${item.toLowerCase()}`}
                    className="text-muted hover:text-white transition-colors focus-ring px-2 py-1 rounded"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-semibold text-white mb-3 text-sm">Connect</p>
            <div className="flex gap-4">
              <a href="https://github.com/avneetsingh91" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors focus-ring p-2" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.instagram.com/avneetsingh.05/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors focus-ring p-2" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 15.892c-1.051 1.051-2.496 1.629-4.008 1.629s-2.957-.578-4.008-1.629c-.937-.937-1.506-2.184-1.627-3.792h2.201c.098 1.289.809 2.399 1.834 3.035.582.372 1.268.574 1.996.574s1.414-.202 1.996-.574c1.025-.636 1.736-1.746 1.834-3.035h2.201c-.121 1.608-.69 2.855-1.627 3.792zm0-8.768c-1.051 1.051-2.496 1.629-4.008 1.629s-2.957-.578-4.008-1.629c-.937-.937-1.506-2.184-1.627-3.792h2.201c.098 1.289.809 2.399 1.834 3.035.582.372 1.268.574 1.996.574s1.414-.202 1.996-.574c1.025-.636 1.736-1.746 1.834-3.035h2.201c-.121 1.608-.69 2.855-1.627 3.792z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/avneet-singh-50a9a9282/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors focus-ring p-2" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.493-1.1-1.109 0-.616.493-1.109 1.1-1.109s1.1.493 1.1 1.109c0 .616-.493 1.109-1.1 1.109zm7.957-4.623c-2.679 0-4.169 1.476-4.844 2.509v-2.062h-2.007c.026.566 0 6.373 0 6.373h2.007v-3.578c0-.191.014-.382.072-.519.159-.385.52-784 1.04-.784 1.458 0 2.045.823 2.045 2.031v2.85h2.008v-3.055c0-2.08-1.111-3.065-2.591-3.065z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/6 pt-6">
          <p className="text-muted text-sm text-center">
            © {currentYear} Avneet Singh. Built with React, Tailwind CSS, and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
