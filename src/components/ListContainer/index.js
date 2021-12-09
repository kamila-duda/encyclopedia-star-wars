import React from "react";
import { StyledListContainer } from "./styled";

const ListContainer = ({children, home}) => {
  return (
    <>
      <StyledListContainer home={home}>
        {children}
      </StyledListContainer>
    </>
  );
};

export default ListContainer;