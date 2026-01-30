import projects from "../assets/projects.json"

const Projects = () => {
  return (
    <>
    <div className="mx-auto my-10 w-24 h-0.5 bg-white/6 rounded" />
    <section id="projects" className="min-h-screen py-8 scroll-item">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white/90 mb-8 scroll-text">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article key={index} className="relative group rounded-xl overflow-hidden tilt card scroll-card">
              <div className="absolute inset-0">
                <img src={project.image} alt={project.name} className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="relative z-10 p-4 bg-gradient-to-t from-black/60 to-transparent h-56 sm:h-64 flex flex-col justify-end">
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <p className="text-sm text-white/80 mt-2 line-clamp-3">{project.description}</p>
                <div className="mt-4 flex gap-3">
                  <a href={project.link || '#'} className="text-sm px-3 py-1 rounded bg-white/8 hover:bg-white/12 transition focus-ring text-white">Preview</a>
                  <a href={project.repo || '#'} className="text-sm px-3 py-1 rounded border border-white/8 hover:border-white/20 transition text-white">Repo</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Projects
