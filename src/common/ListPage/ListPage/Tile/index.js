import React from "react";
import { StyledTileContainer, StyledTitle } from "./styled";

const Tile = ({ title}) => {
  
  return (
    <>
      <StyledTileContainer>
        <StyledTitle >{title}</StyledTitle>
      </StyledTileContainer>
    </>
  );
};

export default Tile;
