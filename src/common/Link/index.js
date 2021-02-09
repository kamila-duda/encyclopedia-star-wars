import React from "react";
import { StyledLink } from "./styled";

const Link = (props) => {
  return (
    <>
      <StyledLink>{props.children}</StyledLink>
    </>
  );
};

export default Link;
