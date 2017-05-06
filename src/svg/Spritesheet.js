import React from 'react'

// https://css-tricks.com/svg-sprites-use-better-icon-fonts/

const spritesheet = () => (
  <svg style={{ display: 'none' }}>
    <defs>
      <Icon id="facebook" path="social" />
      <Icon id="github" path="social" />
      <Icon id="linkedin" path="social" />
      <Icon id="person" path="icons" />
      <Icon id="react" path="logos" />
      <Icon id="nodejs" path="logos" />
      <Octicon id="home" />
      <Octicon id="mail" />
      <Octicon id="calendar" />
      <Octicon id="globe" />
    </defs>
  </svg>
)

const Icon = ({ id, path }) => (
  <g id={id} dangerouslySetInnerHTML={{ __html: require(`!raw!./${path}/${id}.svg`) }} />
)

const Octicon = ({ id }) => (
  <g id={id} dangerouslySetInnerHTML={{ __html: require(`!raw!octicons/build/svg/${id}.svg`) }} />
)

export default spritesheet
