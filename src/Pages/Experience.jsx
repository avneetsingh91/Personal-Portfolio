import { motion as Motion } from "framer-motion";
import hackathonPic from "../assets/hackathone.png";
import coderRootsPic from "../assets/coderroots.png";

const TimelineRow = ({
  image,
  alt,
  flip = false,
  eyebrow,
  title,
  subtitle,
  paragraph,
  points,
  badge,
  note,
}) => {
  return (
    <div className="relative grid md:grid-cols-10 gap-8 md:gap-12 items-center mb-24 md:mb-32">
      {/* Image (~30% width) */}
      <Motion.div
        initial={{ opacity: 0, x: flip ? 80 : -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`relative md:col-span-3 ${flip ? "md:order-2" : "md:order-1"}`}
      >
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            width={640}
            height={800}
            className="w-full h-72 md:h-[420px] object-contain grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
        </div>
      </Motion.div>

      {/* Content + vertical line + starting pointer (~70% width) */}
      <Motion.div
        initial={{ opacity: 0, x: flip ? -80 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className={`relative md:col-span-7 ${flip ? "md:order-1" : "md:order-2"}`}
      >
        {/* vertical line */}
        <div className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-pink-500 via-white/25 to-transparent" />
        {/* starting pointer */}
        <div className="absolute -left-[4px] top-0 w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_16px_3px_rgba(255,107,203,0.55)]" />

        <div className="pl-8 md:pl-10">
          <p className="text-xs md:text-sm font-semibold tracking-[0.28em] uppercase text-pink-400">
            {eyebrow}
          </p>

          <h3 className="text-2xl md:text-4xl font-extrabold mt-3 text-white">{title}</h3>

          {subtitle && <p className="mt-3 text-lg md:text-xl text-white/90 font-medium">{subtitle}</p>}

          <p className="mt-4 text-white/60 leading-relaxed">{paragraph}</p>

          {badge && (
            <span className="inline-block mt-5 px-5 py-2 rounded-full text-sm font-bold text-[#ffffff] bg-gradient-to-r from-pink-500 to-purple-600 shadow-[0_4px_16px_rgba(255,107,203,0.45)]">
              {badge}
            </span>
          )}

          <ul className="mt-6 space-y-3">
            {points.map((point, i) => (
              <Motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                className="flex items-start gap-3 text-white/80"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0" />
                <span>{point}</span>
              </Motion.li>
            ))}
          </ul>

          {note && <p className="mt-6 text-xs text-white/40 italic">{note}</p>}
        </div>
      </Motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="relative overflow-hidden text-white min-h-screen px-4 md:px-8 pt-20 md:pt-24 pb-16">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Page header */}
        <Motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-10 md:mb-12"
        >
          <p className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-pink-400">
            My Journey
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-3 text-white">
            Experience &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              Achievements
            </span>
          </h1>
          <p className="mt-4 text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            From a 36-hour national hackathon sprint to shipping production apps as a
            full-stack developer — here's the story so far.
          </p>
          <div className="mx-auto mt-4 w-16 h-0.5 bg-gradient-to-r from-pink-500 to-white/30" />
        </Motion.header>

        {/* Section 1: Hackathon (image left, content right) */}
        <TimelineRow
          image={hackathonPic}
          alt="At the 36-hour BFCET national-level college hackathon"
          flip={false}
          eyebrow="01 — BFCET Hackathon"
          title="36 Hours. One Problem. Zero Sleep."
          subtitle="My first national-level college hackathon at BFCET was a 36-hour sprint."
          paragraph="Held at my college (BFCET) but open to students from across the country, this national-level hackathon was an intense 36-hour marathon. Competing with hundreds of students, our team took a rough idea and turned it into a working full-stack product in just a day and a half. It was one of the most intense, fast-paced learning experiences of my journey."
          points={[
            "Designed and built a full-stack MERN prototype from scratch in 36 hours",
            "Worked as a team of 4 under extreme time pressure",
            "Presented a live demo and pitch in front of judges and 400+ participants",
            "Competed against 90+ teams from across the country and reached the finals",
          ]}
          badge="BFCET Hackathon — National Level Finalist"
        />

        {/* Section 2: Professional Experience (image right, content left) */}
        <TimelineRow
          image={coderRootsPic}
          alt="Full Stack Developer at CoderRoots"
          flip={true}
          eyebrow="02 — Professional Experience"
          title="Full Stack Developer"
          subtitle="CoderRoots — Currently Working"
          paragraph="I am currently working as a Full Stack Developer at CoderRoots, building and shipping production-grade web applications end-to-end using the MERN stack , Next.js and modern tooling."
          points={[
            "Building scalable full-stack applications with MongoDB, Express, React, and Node.js",
            "Developing RESTful APIs and integrating third-party services",
            "Collaborating with designers and developers to turn requirements into polished features",
            "Optimizing performance and writing clean, maintainable code",
            "Shipping client projects, dashboards, and admin panels end to end",
          ]}
          badge="Fullstack Developer"
        
        />
      </div>
    </div>
  );
};

export default Experience;
