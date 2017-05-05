import React from 'react'
import { Link } from 'react-router'
import social from './social'
// import styles from './social.module.sass'
import Icon from '../../../svg/Icon'

const providers = ['github', 'facebook', 'linkedin']

const SocialNav = () => (
  <nav>
    {providers.map(provider => <SocialLink id={provider} key={provider} />)}
  </nav>
)
// const SocialNav = () => (
//   [<div key="q">?</div>]
// )

// const SocialLink = ({ id }) => {
//   const { url, svg } = social[id]
//   return (
//     <Link to={url} target="_blank">
//       <img src={svg} width="24" height="24" className={styles.svg} />
//     </Link>
//   )
// }
const SocialLink = ({ id }) => {
  const { url } = social[id]
  return (
    <Link to={url} target="_blank">
      <Icon id={id} />
    </Link>
  )
}

export default SocialNav
