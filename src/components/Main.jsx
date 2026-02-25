import { useEffect, useState } from "react";
import profilePic from "../assets/profilePic.png"

const Main = () => {
  const oneLiners = [
    " Software Development.",
    " Web Development.",
    " Problem Solving.",
  ];

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
    <div id="home" className="px-4 pt-30 min-h-screen">

      <div className="text-center mb-6 scroll-text">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">Crafting modern web experiences</span>
        </h1>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 max-w-4xl mx-auto pt-6">
        {/* Left side */}
        <div className="text-center lg:text-left ">
          <p className="text-2xl md:text-3xl font-semibold">Hi there, I’m</p>
          <p className="text-3xl md:text-4xl font-extrabold">Avneet Singh</p>
          <p className="mt-4 text-lg md:text-xl text-muted">
            I build interfaces and APIs for delightful user experiences —{' '}
            <span className="text-pink-300 font-semibold">{string}</span>
          </p>
          
         
          <button
            onClick={() => window.open("/myresume.pdf", "_blank")}
            className="mt-6 inline-flex items-center gap-3 px-6 py-2 rounded-full text-lg font-semibold text-white btn-accent btn-glow focus-ring"
          >
            View-My Resume
          </button>
         
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end scroll-image">
          <div className="tilt float rounded-full overflow-hidden w-48 h-48 sm:w-64 sm:h-64 shadow-xl">
            <img
              src={profilePic}
              alt="Avneet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto my-10 w-24 h-0.5 bg-white/6 rounded" />
      
    </div>
    
  );
};

export default Main;
