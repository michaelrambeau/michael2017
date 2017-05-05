import React from 'react'

// https://css-tricks.com/svg-sprites-use-better-icon-fonts/

const spritesheet = () => (
  <svg style={{ display: 'none' }}>
    <defs>
      <g id="facebook" dangerouslySetInnerHTML={{ __html: require('!raw!./facebook.svg') }} />
      <g id="github" dangerouslySetInnerHTML={{ __html: require('!raw!./github.svg') }} />
      <g id="linkedin" dangerouslySetInnerHTML={{ __html: require('!raw!./linkedin.svg') }} />
      <g id="person" dangerouslySetInnerHTML={{ __html: require('!raw!./person.svg') }} />
      <Octicon id="home" />
      <Octicon id="mail" />
      <Octicon id="calendar" />
      <Octicon id="globe" />
    </defs>
  </svg>
)

const Octicon = ({ id }) => (
  <g id={id} dangerouslySetInnerHTML={{ __html: require(`!raw!octicons/build/svg/${id}.svg`) }} />
)

export default spritesheet
