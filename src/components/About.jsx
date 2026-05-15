import React from 'react';
import logo from '../assets/mylogo.png';

const About = () => {
  return (
    <section id="about" className="px-4 py-5 min-h-screen scroll-item">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-white/90 scroll-text">About Me</h2>

        <div className="card glass p-6 md:p-10 scroll-lift">
          <div className="md:flex md:gap-8 items-start">
            <div className="flex-shrink-0 mb-6 md:mb-0">
              <div className="w-28 h-28 rounded-xl overflow-hidden tilt shadow-lg">
                <img src={logo} alt="logo" className="w-full h-full object-cover" />
              </div>
            </div>

            <div>
              <div className="text-2xl md:text-3xl font-semibold mb-3">Avneet Singh</div>

              <p className="text-base md:text-lg text-muted mb-6">
                I’m a Full Stack Developer specializing in the MERN stack—MongoDB,
                Express.js, React, and Node.js. I build fast, scalable web apps with
                clean, maintainable code. From crafting sleek frontends to
                architecting robust backends, I turn ideas into functional,
                user-friendly products. Passionate about problem-solving, I
                constantly learn and adapt to deliver high-performance solutions for
                modern web needs.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/avneetsingh91" target="_blank" rel="noopener noreferrer" className="focus-ring">
                  <img src="http://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"  className="w-10 hover:scale-110 transition-transform"/>
                </a>
                <a href="https://www.instagram.com/avneetsingh.05/" target="_blank" rel="noopener noreferrer" className="focus-ring">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_14_oeXWPsimafqjhUvvFkFQn6JO1v0csA&s" alt="Instagram" className="w-10 hover:scale-110 transition-transform rounded" />
                </a>
                <a href="https://www.linkedin.com/in/avneet-singh-50a9a9282/" target="_blank" rel="noopener noreferrer" className="focus-ring">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Jr3IvJraO1wfsdEFoHuQwHYuHrmRdNP0AA&s" alt="LinkedIn" className="w-10 hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
