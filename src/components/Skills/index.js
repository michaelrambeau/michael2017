import React from 'react'
import data from './data'
import Card from './SkillCard'

const Skills = () => (
  <div>
    <h2>Skills</h2>
    <Card
      title="Front-end"
      skills={data.frontend}
    />
    <Card
      title="Back-end"
      skills={data.backend}
    />
  </div>
)

export default Skills
