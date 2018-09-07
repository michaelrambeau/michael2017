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
  font-family: sans-serif;
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
`;

const Title = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  font-family: sans-serif;
`;

const Navbar = styled.div`
  display: flex;
  a {
    color: #222;
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
        style={{ padding: `${t.rhythm(0.75)} ${t.rhythm(3 / 4)}` }}
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
