import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
border-bottom:1px dotted ${({theme})=>theme.color.yellow};
`;
export const StyledNavbarMenu = styled.ul`
display: flex;
flex-wrap: wrap;
padding: 0;
margin: 0;
justify-content: center;
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
  &.active {
    border-left: 1px solid ${({ theme }) => theme.color.yellow};
    border-right: 1px solid ${({ theme }) => theme.color.yellow};
    box-sizing: border-box;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 5px;
`;
export const StyledIcon = styled.img`
width: 100%;
height: 100%;
color: ${({ theme }) => theme.color.yellow};
`;
export const StyledIconContainer = styled.div`
width: 30px;
height: 30px;
background-color: ${({ theme }) => theme.color.yellow};
border-radius: 50%;
`;