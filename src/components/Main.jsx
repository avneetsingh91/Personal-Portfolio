import { useEffect, useState } from "react";
import profilePic from "../assets/profilePic.jpg"

const oneLiners = [
  " Software Development.",
  " Web Development.",
  " Problem Solving.",
];

const Main = () => {
  const [string, setString] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let typingTimeout;

    if (isTyping) {
      if (string.length < oneLiners[currentIndex].length) {
        typingTimeout = setTimeout(() => {
          setString((prev) => prev + oneLiners[currentIndex][string.length]);
        }, 50);
      } else {
        typingTimeout = setTimeout(() => {
          setIsTyping(false);
        }, 300);
      }
    } else {
      if (string.length > 0) {
        typingTimeout = setTimeout(() => {
          setString((prev) => prev.slice(0, prev.length - 1));
        }, 10);
      } else {
        setIsTyping(true);
        setCurrentIndex((prev) => (prev + 1) % oneLiners.length);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [string, currentIndex, isTyping]);

  return (
    <div id="home" className="px-4 sm:px-8 min-h-svh flex items-center scroll-item">
      <div className="max-w-7xl mx-auto w-full pt-8 lg:pt-6">
        {/* Header */}
        <div className="text-center mb-6 scroll-text">
          <p className="text-pink-400 tracking-[0.3em] uppercase text-xs md:text-sm font-semibold">
            Full Stack Developer
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-4">
            Crafting{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              Modern Web
            </span>{" "}
            Experiences
          </h1>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left — content */}
          <div className="max-w-xl text-center lg:text-left">
            <p className="text-2xl md:text-4xl font-semibold">
              Hi there, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                Avneet Singh
              </span>
            </p>

            <p className="mt-4 text-xl md:text-2xl font-bold">
              <span className="text-[var(--accent)]">I am into</span>
              <span className="text-white">{string}</span>
            </p>

            <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">
              I build interfaces and APIs for delightful user experiences — turning ideas into fast,
              scalable, and beautiful products.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="/myresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full text-lg font-semibold text-[#ffffff] btn-accent btn-glow focus-ring"
              >
                View My Resume
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center px-6 py-2.5 rounded-full text-lg font-semibold border border-white/15 text-white hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus-ring"
              >
                Let's Talk
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-sm text-muted">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] live-dot" />
              Open to new opportunities
            </div>

            <div className="mt-5 flex flex-wrap gap-2 justify-center lg:justify-start">
              {["React.js", "Express.js", "Node.js", "MongoDB", "PostgreSQL","Typescript" ].map((chip) => (
                <span
                  key={chip}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-muted"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right — large profile image */}
          <div className="relative flex justify-center lg:justify-end scroll-image">
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full bg-[var(--accent)]/20 blur-3xl" />
            <div className="relative tilt float rounded-full overflow-hidden w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 ring-4 ring-[var(--accent)]/30 shadow-[0_0_80px_rgba(40,169,158,0.35)]">
              <img
                src={profilePic}
                alt="Avneet"
                width={384}
                height={384}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;