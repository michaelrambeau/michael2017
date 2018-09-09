import React, { Fragment } from "react";
import skills from "./data/skills";

const Skills = () => (
  <div>
    <h2>Technical skills</h2>
    <ul>
      {skills.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Skills;
