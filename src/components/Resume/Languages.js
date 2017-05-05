import React from 'react'
import languages from './data/languages'

const Languages = () => (
  <div>
    <h2>Languages</h2>
    <ul>
      {languages.map((lang, i) => (
        <li key={i}>{lang.name}: {lang.level}</li>
      ))}
    </ul>
  </div>
)

export default Languages
