import React from 'react'

const Icon = ({ id, className, ...others }) => {
  return (
    <svg className={className} {...others}>
      <use xlinkHref={`#${id}`} />
    </svg>
  )
}

export default Icon
