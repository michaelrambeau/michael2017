import React from "react";
import projects from "./projects";
import ProjectItem from "./ProjectItem";

const Projects = ({ md }) => {
  return (
    <div>
      {projects.map(project => (
        <ProjectItem
          project={{ ...project, description: md[project.id] }}
          key={project.id}
        />
      ))}
    </div>
  );
};

export default Projects;
