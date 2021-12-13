import React from "react";
import empty from "../../assets/empty.svg";

import {
  Wrapper,
  HeaderTitle,
  StyledImage,
  StyledImageContainer,
} from "./styled";

const EmptyResults = ({ query }) => {
  return (
    <Wrapper>
      <HeaderTitle>Sorry, there are no results for "{query}"</HeaderTitle>
      <StyledImageContainer>
        <StyledImage src={empty} alt="Searching Empty image" />
      </StyledImageContainer>
    </Wrapper>
  );
};

export default EmptyResults;
