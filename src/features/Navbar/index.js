import React from "react";
import { paths } from "../../core/paths";
import {
  StyledIcon,
  StyledIconContainer,
  StyledLink,
  StyledNavbar,
  StyledNavbarItem,
  StyledNavbarMenu,
  StyledNavLink,
} from "./styled";
import vader from "../../assets/vader.svg";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink to={"/"}>
        <StyledIconContainer>
          <StyledIcon src={vader} />
        </StyledIconContainer>
      </StyledLink>
      <StyledNavbarMenu>
        {paths.map((item) => (
          <StyledNavLink key={item} to={`/${item}`}>
            <StyledNavbarItem>{item}</StyledNavbarItem>
          </StyledNavLink>
        ))}
      </StyledNavbarMenu>
    </StyledNavbar>
  );
};

export default Navbar;
