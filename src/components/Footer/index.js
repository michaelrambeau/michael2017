import React from "react";
import styled from "styled-components";
import SocialNav from "../SocialNav";

const StyledFooter = styled.footer`
  padding: 2rem 1rem;
  background-color: #444;
  color: #999;
  box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.5) inset;
  text-align: center;
  nav {
    margin-bottom: 1rem;
  }
  nav a {
    color: #999;
    padding: 0 0.5rem;
  }
`;

const Footer = () => (
  <StyledFooter className={`hidden-print`}>
    <div className="container">
      <SocialNav />
      <div>Last update: September 2019</div>
    </div>
  </StyledFooter>
);

export default Footer;
