import React from "react";
import Card from "./SkillCard";
import frontend from "./frontend.md";
import backend from "./backend.md";

import reactLogo from "../../../svg/logos/react.svg";
import nodejsLogo from "../../../svg/logos/nodejs.svg";

const Skills = () => (
  <div>
    <h2>Skills</h2>
    <Card title="Front-end" skills={frontend} logo={reactLogo} />
    <Card title="Back-end" skills={backend} logo={nodejsLogo} />
  </div>
);

export default Skills;
