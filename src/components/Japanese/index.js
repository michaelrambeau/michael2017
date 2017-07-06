import React from 'react'

import Intro from './Intro'
import History from './History'
import Skillsheet from './Skillsheet'

import styles from './styles.sass'

const Japanese = () => (
  <div className={`${styles.japanese}`}>
    <Intro />
    <History />
    <Skillsheet />
  </div>
)

export default Japanese
