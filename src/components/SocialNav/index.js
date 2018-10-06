import React from "react";
import social from "./social";
import Icon from "../../svg/Icon";

const providers = ["github", "facebook", "linkedin"];

const SocialNav = () => (
  <nav>
    {providers.map(provider => (
      <SocialLink id={provider} key={provider} />
    ))}
  </nav>
);

const SocialLink = ({ id }) => {
  const { url } = social[id];
  return (
    <a href={url} target="_blank">
      <Icon id={id} className="svg-icon" />
    </a>
  );
};

export default SocialNav;
