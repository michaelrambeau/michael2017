import React from 'react'

const ProjectItem = ({ project }) => (
  <div className="card">
    <h2><a href={project.url}>{project.title}</a></h2>
    <div
      dangerouslySetInnerHTML={{ __html: project.description.body }}
    />
  </div>
)

export default ProjectItem
