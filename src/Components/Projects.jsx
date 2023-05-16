import ProjectItem from './ProjectItem.jsx'
import projects from '../data/proj.js'

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-container">
        <h2 className="projects-heading">Noteworthy Projects</h2>
        <div className="folder-container">
          {projects.map((project, index) => (
            <ProjectItem project={project} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
