import React from 'react'
import projects from './projects'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div>
      {projects.map(project =>
        <ProjectItem project={project} key={project.id} />
      )}
    </div>
  )
}

export default Projects
