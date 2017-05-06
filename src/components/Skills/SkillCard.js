import React from 'react'
import Logo from '../../svg/Logo'

const SkillCard = ({ title, skills, icon }) => (
  <div className="SkillCard card">
    <p className="header">
      <span className="tag">{title}</span>
    </p>
    <div style={{ display: 'flex' }}>
      <div style={{ flexGrow: 1 }}>
        <ul>
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <Logo id={icon} className="svg-logo" />
      </div>
    </div>
  </div>
)

export default SkillCard
