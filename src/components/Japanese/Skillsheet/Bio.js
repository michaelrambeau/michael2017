import React from 'react'
import bio from './bio.md'

const Bio = () => (
  <div>
    <h2>自己PR</h2>
    <div dangerouslySetInnerHTML={{ __html: bio.body }} />
  </div>
)

export default Bio
