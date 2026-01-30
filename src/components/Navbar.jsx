// src/components/Navbar.js

import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass backdrop-blur-md border-b " role="navigation" aria-label="Main navigation">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-3 text-2xl font-semibold">
          <img src="./src/assets/mylogo.png" width={44} height={44} alt="Avneet logo" className="rounded-full shadow-sm"/>
          <span className="text-white">Avneet Singh</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-semibold items-center">
          {["Home", "About", "Skills", "Projects",  "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted hover:text-white/90 transition-colors duration-200 focus-ring px-2 py-1 rounded"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-2xl p-2 rounded focus-ring bg-transparent text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span aria-hidden>{isMobileMenuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 glass p-4 rounded-b-lg shadow-inner">
          <ul className="flex flex-col items-stretch gap-3 py-2 font-medium">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 rounded hover:bg-white/5 focus-ring"
                  onClick={() => setIsMobileMenuOpen(false)} // close menu on click
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
