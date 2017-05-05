import React from 'react'
import octicons from 'octicons'

const Icon = ({ id, width = 16, height = 16 }) => {
  const options = { width }
  return (
    <span
      dangerouslySetInnerHTML={{ __html: octicons[id].toSVG(options) }}
      style={{ marginRight: '.3rem' }}
    />
  )
}

export default Icon
