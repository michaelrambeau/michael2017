import React from 'react'

const Icon = ({ id, className, ...others }) => {
  return (
    <svg viewBox="0 0 16 16" className={className} {...others}>
      <use xlinkHref={`#${id}`} />
    </svg>
  )
}

export default Icon
