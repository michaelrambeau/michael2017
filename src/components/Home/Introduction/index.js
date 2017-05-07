import React from 'react'
import { Link } from 'react-router'

import introduction from './introduction.md'

const Intro = () => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: introduction.body }} />
      <p>Check <Link to="/projects">my projects</Link> to see what I can do and how enthusiast I am!</p>
    </div>
  )
}

export default Intro
