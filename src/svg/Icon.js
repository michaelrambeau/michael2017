import React from 'react'

const Icon = ({ id, className }) => {
  return (
    <svg viewBox="0 0 16 16" className={`svg-icon ${className}`}>
      <use xlinkHref={`#${id}`} />
    </svg>
  )
}

export default Icon
