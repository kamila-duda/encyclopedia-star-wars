import React from "react";
import ListContainer from "../../components/ListContainer";
import Tile from "../../components/Tile";
import Container from "../../components/Container";
import {
  StyledHeader,
  StyledSubTitle,
  StyledLink,
  StyledTitle,
  StyledPerspectiveContainer,
} from "./styled";
import { paths } from "../../core/paths";

const HomePage = () => {
  return (
    <>
      <Container home>
        <StyledPerspectiveContainer>
          <StyledHeader>
            <StyledSubTitle>Welcome to</StyledSubTitle>
            <StyledTitle>The Star Wars</StyledTitle>
            <StyledSubTitle>Encyclopedia</StyledSubTitle>
            <p>A long time ago in a galaxy far, far away....</p>
          </StyledHeader>
          <ListContainer home>
            {paths.map((path) => (
              <StyledLink key={path} to={`/${path}`}>
                <Tile title={path} />
              </StyledLink>
            ))}
          </ListContainer>
        </StyledPerspectiveContainer>
      </Container>
    </>
  );
};

export default HomePage;
