import skills from '../assets/skills.json';

const Skills = () => {
  return (
    <section id="skills" className="px-4 py-1 min-h-screen scroll-item">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-white/90 scroll-text">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4">
          {skills.map((skill, index) => (
            <div key={index} className="tilt card p-4 flex flex-col items-center justify-center gap-2 text-center scroll-card">
              <div className="w-12 h-12 mb-2">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <p className="text-sm font-medium">{skill.name}</p>
              {/* optional badge */}
              {skill.level && (
                <div className="mt-2 text-xs text-muted">{skill.level}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
