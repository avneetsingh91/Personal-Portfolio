import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    let x = -100, y = -100;
    let dotX = -110, dotY = -110;
    let raf;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const onLeave = () => {
      x = -100; y = -100; dotX = -110; dotY = -110;
    };

    const loop = () => {
      dotX += (x + 11 - dotX) * 0.8;
      dotY += (y - dotY) * 0.8;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      }

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />;
};

export default Cursor;