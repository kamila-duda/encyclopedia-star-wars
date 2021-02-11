import React from 'react';
import { toHomePage, toResourceList } from '../../core/routes';
import {resources} from "../../resources";
import { StyledLink, StyledNavbar, StyledNavbarItem, StyledNavbarMenu, StyledNavLink } from './styled';

const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledLink to={toHomePage()}>Home</StyledLink>
            <StyledNavbarMenu>
            {Object.keys(resources).map((item)=><StyledNavLink key={item} to={toResourceList({ resource: item })}><StyledNavbarItem>{item}</StyledNavbarItem></StyledNavLink>)}
            </StyledNavbarMenu>
        </StyledNavbar>
    );
}

export default Navbar;