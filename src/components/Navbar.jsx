// src/components/Navbar.js

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";

const sectionIds = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const { pathname } = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const sectionLinks = sectionIds.map((id) => ({
    id,
    label: id.charAt(0).toUpperCase() + id.slice(1),
    to: id === "home" ? "/" : `/#${id}`,
  }));

  const links = [...sectionLinks, { id: "experience", label: "Experiences", to: "/experience" }];

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (item) =>
    item.id === "experience" ? pathname === "/experience" : pathname === "/" && activeSection === item.id;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50" role="navigation" aria-label="Main navigation">
      <div className="relative flex items-center gap-2 sm:gap-3 glass backdrop-blur-md border border-white/10 shadow-xl rounded-full px-3 sm:px-4 py-1.5">
        {/* Avatar placeholder with blinking lavender live dot */}
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full shrink-0 bg-gradient-to-br from-[#2c2c3d] to-[#14141d] ring-2 ring-[var(--accent)]/40">
          <span className="absolute inset-0 flex items-center justify-center text-[#f8fafc] font-semibold" aria-hidden="true">
            A
          </span>
          <span className="absolute right-0 bottom-0 w-2.5 h-2.5 rounded-full bg-[var(--accent)] ring-2 ring-[#0c0c0e] live-dot" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-0.5 font-semibold items-center">
          {links.map((item) => (
            <li key={item.id}>
              <Link
                to={item.to}
                className={`text-sm transition-colors duration-200 focus-ring px-2 py-1 rounded ${
                  isActive(item) ? "text-[var(--accent)] font-bold" : "text-muted hover:text-white/90"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle + Mobile Hamburger Icon */}
        <div className="flex items-center gap-0.5">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="text-xl p-2 rounded-full focus-ring bg-transparent text-white hover:text-pink-300 transition-colors"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="md:hidden text-xl p-2 rounded-full focus-ring bg-transparent text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span aria-hidden>{isMobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 glass backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-3 w-max min-w-[13rem]">
          <ul className="flex flex-col items-stretch gap-1 font-medium">
            {links.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)} // close menu on click
                  className={`block px-3 py-2 rounded focus-ring ${
                    isActive(item) ? "text-[var(--accent)] font-bold bg-white/5" : "hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;