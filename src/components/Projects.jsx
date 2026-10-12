import { FiExternalLink, FiGithub } from "react-icons/fi";
import projects from "../assets/projects.json"
import coverChat from "../assets/project-chat.jpg"
import coverAiCode from "../assets/project-aicode.jpg"
import coverTask from "../assets/project-task.jpg"
import coverAudit from "../assets/project-audit.jpg"

const covers = [coverChat, coverAiCode, coverTask, coverAudit]

const Projects = () => {
  return (
    <section id="projects" className="px-4 sm:px-8 min-h-svh flex flex-col pt-4 pb-10 md:pt-6 md:pb-12 scroll-item">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-6 scroll-text">
          <p className="text-pink-400 tracking-[0.3em] uppercase text-xs md:text-sm font-semibold">My Work</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white/90 mt-2">
            Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              Projects
            </span>
          </h2>
          <p className="mt-2 text-muted text-sm md:text-base max-w-2xl mx-auto">
            A selection of full-stack products I've designed, built, and shipped.
          </p>
          <div className="mx-auto mt-3 w-16 h-0.5 bg-gradient-to-r from-pink-500 to-white/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group card border border-white/10 rounded-2xl overflow-hidden tilt scroll-card hover:border-[var(--accent)]/40 transition-colors duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={covers[index] || covers[0]}
                  alt={`${project.name} cover`}
                  loading="lazy"
                  width={640}
                  height={400}
                  className="w-full h-52 md:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold group-hover:text-[var(--accent)] transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link || '#'}
                    className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full font-semibold text-[#ffffff] btn-accent btn-glow hover:-translate-y-0.5 transition-transform duration-200 focus-ring"
                  >
                    Preview
                    <FiExternalLink className="shrink-0" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.repo || '#'}
                    className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-white/15 text-white hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200 focus-ring"
                  >
                    Code
                    <FiGithub className="shrink-0" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
