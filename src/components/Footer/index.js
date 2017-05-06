import React from 'react'
import SocialNav from '../SocialNav'
import styles from './footer.module.sass'

const Footer = () => (
  <footer className={`hidden-print ${styles.footer}`}>
    <div className="container">
      <SocialNav />
      <div>Last update: {(new Date()).toDateString()}</div>
    </div>
  </footer>
)

export default Footer
