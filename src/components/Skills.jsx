import skills from '../assets/skills.json';

const Skills = () => {
  return (
    <section id="skills" className="px-4 sm:px-8 min-h-svh flex flex-col pt-4 pb-10 md:pt-6 md:pb-12 scroll-item">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-4 scroll-text">
          <p className="text-pink-400 tracking-[0.3em] uppercase text-xs md:text-sm font-semibold">My Toolbox</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white/90 mt-2">
            Skills &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              Technologies
            </span>
          </h2>
          <p className="mt-2 text-muted text-sm md:text-base max-w-2xl mx-auto">
            The technologies I use to design, build, and ship modern web products.
          </p>
          <div className="mx-auto mt-3 w-16 h-0.5 bg-gradient-to-r from-pink-500 to-white/30" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="tilt card scroll-card flex items-center gap-3 rounded-xl p-3 hover:border-[var(--accent)]/50 transition-colors duration-300 min-w-0"
          >
            <div className="w-9 h-9 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-1.5">
              <img src={skill.icon} alt={skill.name} loading="lazy" width={28} height={28} className="w-full h-full object-contain" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold">{skill.name}</p>
              {skill.description && (
                <p className="text-[11px] text-muted leading-snug truncate">{skill.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Skills;