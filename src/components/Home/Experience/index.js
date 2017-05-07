import React from 'react'
import { Link } from 'react-router'
import experience from './experience.md'

const Experience = () => (
  <div>
    <h2>Experience</h2>
    <div className="card">
      <div dangerouslySetInnerHTML={{ __html: experience.body }} />
      <div style={{ textAlign: 'center' }}>
        <Link to="/resume/">Check Michael Rambeau's resume</Link>
      </div>
    </div>
  </div>
)

export default Experience