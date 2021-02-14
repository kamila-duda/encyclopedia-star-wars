import React from "react";
import ListContainer from "../../common/ListContainer";
import Tile from "../../common/Tile";
import Container from "../../common/Container";
import { toResourceList } from "../../core/routes";
import {
  StyledHeader,
  StyledSubTitle,
  StyledLink,
  StyledTitle,
  StyledPerspectiveContainer,
} from "./styled";
import { resources } from "../../core/resources";

const HomePage = () => {
  return (
    <>
      <Container home={true}>
        <StyledPerspectiveContainer>
          <StyledHeader>
            <StyledSubTitle>Welcome to</StyledSubTitle>
            <StyledTitle>The Star Wars</StyledTitle>
            <StyledSubTitle>Encyclopedia</StyledSubTitle>
            <p>A long time ago in a galaxy far, far away....</p>
          </StyledHeader>
          <ListContainer home={true}>
            {Object.keys(resources).map((key) => (
              <StyledLink key={key} to={toResourceList({ path: key })}>
                <Tile title={key} />
              </StyledLink>
            ))}
          </ListContainer>
        </StyledPerspectiveContainer>
      </Container>
    </>
  );
};

export default HomePage;
