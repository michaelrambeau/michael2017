import React from 'react'

import Icon from '../../svg/Icon'
import img from './michael-2017-400x400.png'
import styles from './resume.module.sass'
import data from '../../data/core.json'

const Profile = () => (
  <div style={{ display: 'flex' }}>
    <div style={{ flexGrow: 1 }}>
      <h1>Full-stack web engineer</h1>
      <div className={styles.profileGrid}>
        <Icon id="person" className={styles.profileIcon} />
        <p>Michael Rambeau, 40 years old, French</p>
      </div>
      <p className={styles.profileGrid}>
        <Icon id="home" className={styles.profileIcon} />
        <span>Residing in Ibaraki city, Osaka, Japan since April 2010</span>
      </p>
      <p className={styles.profileGrid}>
        <Icon id="mail" className={styles.profileIcon} />
        <a className="email" href={`mailto:${data.email}`}>{data.email}</a>
      </p>
    </div>
    <div>
      <img src={img} width={150} style={{ margin: 0 }} />
    </div>
  </div>
)

export default Profile
