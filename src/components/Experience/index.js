import React from 'react'
import { Link } from 'react-router'
import data from './data'

const Experience = () => (
  <div>
    <h2>Experience</h2>
    <div className="card">
      <ul>
        {data.map((exp, i) => (
          <li key={i}>{exp}</li>)
        )}
      </ul>
      <div style={{ textAlign: 'center' }}>
        <Link to="/resume/">Check Michael Rambeau's resume</Link>
      </div>
    </div>
  </div>
)

export default Experience
