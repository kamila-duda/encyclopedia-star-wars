import React from 'react';
import { toHomePage, toResourceList } from '../../core/routes';
import {resources} from "../../core/resources";
import { StyledIcon, StyledIconContainer, StyledLink, StyledNavbar, StyledNavbarItem, StyledNavbarMenu, StyledNavLink } from './styled';
import Search from './Search';
import vader from "../../assets/vader.svg"

const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledLink to={toHomePage()}><StyledIconContainer><StyledIcon src={vader}/></StyledIconContainer></StyledLink>
            <StyledNavbarMenu>
            {Object.keys(resources).map((item)=><StyledNavLink key={item} to={toResourceList({ path: item })}><StyledNavbarItem>{item}</StyledNavbarItem></StyledNavLink>)}
            </StyledNavbarMenu>
            <Search/>
        </StyledNavbar>
    );
}

export default Navbar;