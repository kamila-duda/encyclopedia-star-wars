import React from "react";
import { StyledContainer } from "./styled";

const Container = ({children, home}) => {
  return <StyledContainer home={home}>{children}</StyledContainer>;
};

export default Container;
