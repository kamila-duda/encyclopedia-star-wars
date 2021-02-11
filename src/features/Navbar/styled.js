import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
display: flex;
justify-content: space-between;
border-bottom:1px dotted ${({theme})=>theme.color.yellow};
`;
export const StyledNavbarMenu = styled.ul`
display: flex;
padding: 0;
margin: 0;
`;
export const StyledNavbarItem = styled.li`
list-style: none;
margin: 5px;
text-transform: capitalize;
`;
export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName: "active",
  }))`
  text-decoration: none;
  color: inherit;
  width: 100%;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  margin: 5px;
`;