import React from 'react'
import proficiencies from './data/proficiencies'

const Proficiencies = () => (
  <div className="break-after">
    <h2>Technical proficiencies</h2>
    <ul>
      {proficiencies.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
)

export default Proficiencies
