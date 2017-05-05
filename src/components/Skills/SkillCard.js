import React from 'react'

const SkillCard = ({ title, skills }) => (
  <div className="SkillCard card">
    <p className="header">
      <span className="tag">{title}</span>
    </p>
    <ul>
      {skills.map((skill, i) => (
        <li key={i}>{skill}</li>
      ))}
    </ul>
  </div>
)

export default SkillCard
