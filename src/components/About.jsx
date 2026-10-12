import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Stats from './Stats';

const About = () => {
  return (
    <section id="about" className="px-4 sm:px-8 min-h-svh flex flex-col pt-4 pb-10 md:pt-6 md:pb-12 scroll-item">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-4 scroll-text">
          <p className="text-pink-400 tracking-[0.3em] uppercase text-xs md:text-sm font-semibold">Who I Am</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white/90 mt-2">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">Me</span>
          </h2>
          <div className="mx-auto mt-3 w-16 h-0.5 bg-gradient-to-r from-pink-500 to-white/30" />
        </div>

        <div className="card glass p-6 md:p-8 rounded-2xl scroll-lift">
          <div className="md:flex md:items-start md:justify-between gap-8">
            <div className="flex-1">
              <div className="text-3xl md:text-4xl font-extrabold">Avneet Singh</div>
              <p className="mt-1 text-base md:text-xl text-[var(--accent)] font-semibold">Full Stack Developer</p>

              <p className="text-sm md:text-base text-muted mt-4 leading-relaxed">
                I'm a Full Stack Developer specializing in the MERN stack — MongoDB,
                Express.js, React, and Node.js. I build fast, scalable web apps with
                clean, maintainable code. From crafting sleek, pixel-perfect frontends
                to architecting robust, production-grade backends, I turn raw ideas
                into functional, user-friendly products.
              </p>

              <p className="text-sm md:text-base text-muted mt-3 leading-relaxed">
                Passionate about problem-solving, I never stop learning. I constantly
                adapt and evolve to deliver high-performance solutions that meet
                modern web needs — and I love every line of it.
              </p>
            </div>

            <div className="flex md:flex-col gap-3 mt-6 md:mt-0 shrink-0">
              {[
                { href: "https://github.com/avneetsingh91", label: "GitHub", icon: <FaGithub size={22} /> },
                { href: "https://www.instagram.com/avneetsingh.05/", label: "Instagram", icon: <FaInstagram size={22} /> },
                { href: "https://www.linkedin.com/in/avneet-singh-50a9a9282/", label: "LinkedIn", icon: <FaLinkedin size={22} /> },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/80 border border-white/10 hover:text-[var(--accent)] hover:border-[var(--accent)]/50 hover:scale-110 transition-all duration-300 focus-ring"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <Stats />
        </div>
      </div>
    </section>
  );
};

export default About;