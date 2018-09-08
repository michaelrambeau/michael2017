import React from "react";
import { Link } from "react-router";
import styled from "styled-components";
import t from "../../utils/typography";
// import SocialNav from "../core/SocialNav";

const StyledNavLink = styled(Link)`
  padding: 0.5rem 0;
  text-decoration: none;
  transition: all 0.3s;
  border-bottom: 3px solid transparent;
  &.active,
  &:hover {
    text-decoration: none;
    &:not(.activeNavLink) {
      border-bottom: 3px solid #f7cf4f;
    }
  }
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const NavLink = ({ path, children }) => (
  <StyledNavLink
    activeClassName={"active"}
    to={path}
    onlyActiveOnIndex={path === "/"}
  >
    {children}
  </StyledNavLink>
);

const StyledHeader = styled.header`
  background-color: white;
  /* background: linear-gradient(90deg, #ffde74, #ffde74 50%, white 50%, #fff); */
`;

const Title = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  a {
    color: #f6ce4e;
    z-index: 1;
  }
  /*position: relative;
  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #f7cf4f;
    transform: skew(-35deg, 0);
    transform-origin: 0 0;
    left: 0;
    width: 180px;*/
  }
`;

const Navbar = styled.div`
  display: flex;
  background-color: white;
  a {
    color: #302d2f;
    text-decoration: none;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Nav = styled.nav`
  display: flex;
`;

const Header = () => {
  return (
    <StyledHeader className="hidden-print">
      <div
        className="container"
        style={{ padding: `${t.rhythm(0)} ${t.rhythm(3 / 4)}` }}
      >
        <Navbar>
          <Title>
            <Link to="/">Michael Rambeau</Link>
          </Title>
          <Nav>
            <NavLink path="/">Home</NavLink>
            <NavLink path="/projects/">Projects</NavLink>
            <NavLink path="/resume/">Resume</NavLink>
            <NavLink path="/japanese/">日本語</NavLink>
          </Nav>
        </Navbar>
      </div>
    </StyledHeader>
  );
};

export default Header;
