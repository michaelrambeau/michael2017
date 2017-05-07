import React from 'react'
import Logo from '../../svg/Logo'
import styles from './skills.module.sass'

const SkillCard = ({ title, skills, icon }) => (
  <div className="SkillCard card">
    <p className="header">
      <span className="tag">{title}</span>
    </p>
    <div className={styles.grid}>
      <div
        className={styles.main}
        dangerouslySetInnerHTML={{ __html: skills.body }}
      />
      <div className={styles.logo}>
        <Logo id={icon} className="svg-logo" />
      </div>
    </div>
  </div>
)

export default SkillCard
