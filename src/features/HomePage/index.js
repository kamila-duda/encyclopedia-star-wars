import React from "react";
import ListContainer from "../../common/ListContainer";
import Tile from "../../common/Tile";
import Container from "../../common/Container";
import { toResourceList } from "../../core/routes";
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledSubTitle,
  StyledLink,
  StyledTitle,
} from "./styled";
import { resources } from "../../core/resources";

const HomePage = () => {
  
  return (
    <>
      <StyledHeader>
        <StyledHeaderContainer>
          <StyledSubTitle>Welcome to</StyledSubTitle>
          <StyledTitle>The Star Wars</StyledTitle>
          <StyledSubTitle>Encyclopedia</StyledSubTitle>
          <p>A long time ago in a galaxy far, far away....</p>
        </StyledHeaderContainer>
      </StyledHeader>
      <Container>
        <ListContainer home={true}>
          {Object.keys(resources).map((key) => (
            <StyledLink key={key} to={toResourceList({ path: key })}>
              <Tile title={key} />
            </StyledLink>
          ))}
        </ListContainer>
      </Container>
    </>
  );
};

export default HomePage;
