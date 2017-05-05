import React from 'react'
import { Link } from 'react-router'
import t from '../../utils/typography'
import styles from './header.module.scss'
import SocialNav from '../core/SocialNav'

const NavLink = ({ path, children }) => (
  <Link
    className={styles.navLink}
    activeClassName={styles.activeNavLink}
    to={path}
    onlyActiveOnIndex={path === '/'}
  >
    {children}
  </Link>
)

const Header = () => {
  return (
    <header className={`${styles.Header} hidden-print`}>
      <div className="container" style={{ padding: `${t.rhythm(0.75)} ${t.rhythm(3 / 4)}` }}>
        <div className={styles.navbar}>
          <div className={styles.title}>
            <Link to="/">Michael Rambeau</Link>
          </div>
          <nav className={styles.nav}>
            <NavLink path="/">Home</NavLink>
            <NavLink path="/projects/">Projects</NavLink>
            <NavLink path="/resume/">Resume</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
