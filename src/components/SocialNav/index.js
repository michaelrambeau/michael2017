import React from 'react'
import { Link } from 'react-router'
import social from './social'
import Icon from '../../svg/Icon'

const providers = ['github', 'facebook', 'linkedin']

const SocialNav = () => (
  <nav>
    {providers.map(provider => <SocialLink id={provider} key={provider} />)}
  </nav>
)

const SocialLink = ({ id }) => {
  const { url } = social[id]
  return (
    <Link to={url} target="_blank">
      <Icon id={id} className="svg-icon" />
    </Link>
  )
}

export default SocialNav
