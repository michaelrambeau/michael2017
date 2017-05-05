import React from 'react'
import Icon from '../../svg/Icon'
import img from './michael-2017-400x400.png'
import styles from './resume.module.sass'

const Profile = () => (
  <div style={{ display: 'flex' }}>
    <div style={{ flexGrow: 1 }}>
      <h1>Resume</h1>
      <div className={styles.profileGrid}>
        <Icon id="person" className={styles.profileIcon} />
        <p>Michael Rambeau, 40 years old, French, IT engineer</p>
      </div>
      <p className={styles.profileGrid}>
        <Icon id="home" className={styles.profileIcon} />
        <span>Residing in Ibaraki city, Osaka, Japan since April 2010</span>
      </p>
      <p className={styles.profileGrid}>
        <Icon id="mail" className={styles.profileIcon} />
        <a className="email" href="mailto:michael.rambeau@gmail.com">michael.rambeau@gmail.com</a>
      </p>
    </div>
    <div>
      <img src={img} width={150} style={{ margin: 0 }} />
    </div>
  </div>
)

export default Profile
