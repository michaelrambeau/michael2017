import React from 'react'
import data from './data'
import Card from './SkillCard'
import frontend from './frontend.md'
import backend from './backend.md'

const Skills = () => (
  <div>
    <h2>Skills</h2>
    <Card
      title="Front-end"
      skills={frontend}
      icon="react"
    />
    <Card
      title="Back-end"
      skills={backend}
      icon="nodejs"
    />
  </div>
)

export default Skills
