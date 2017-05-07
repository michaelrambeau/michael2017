import React from 'react'

import Proficiencies from './Proficiencies'
import Experience from './Experience'
import Profile from './Profile'
import Languages from './Languages'
import Education from './Education'

const Resume = () => (
  <div>
    <Profile />
    <Languages />
    <Proficiencies />
    <Experience />
    <Education />
  </div>
)

export default Resume
