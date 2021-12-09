import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import Container from "../../components/Container";
import ErrorPage from "../../components/ErrorPage";
import Loading from "../../components/Loading";
import { Pill } from "../../components/Pill";
import {
  StyledTileDetail,
  StyledTitle,
  StyledWrapper,
  StyledDetailsBlock,
  ListItem,
} from "../styled";

const SpeciesDetails = ({ id }) => {
  const GET_SPECIES_DETALS = gql`
    query ($id: ID!) {
      species(id: $id) {
        name
        classification
        eyeColors
        designation
        language
        hairColors
        averageHeight
        averageLifespan
        skinColors
        homeworld {
          name
        }
        personConnection {
          people {
            name
          }
        }
        filmConnection {
          films {
            title
          }
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_SPECIES_DETALS, {
    variables: { id: id },
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorPage />;
  }
  return (
    <Container>
      <StyledTitle>{data.species.name}</StyledTitle>
      <StyledWrapper>
        <StyledDetailsBlock>
          {data.species.classification && (
            <Pill>Classification: {data.species.classification}</Pill>
          )}
          {data.species.designation && (
            <Pill>Designation: {data.species.designation}</Pill>
          )}
          {data.species.language && (
            <Pill>Language: {data.species.language} </Pill>
          )}
          {data.species.averageLifespan && (
            <Pill>Average lifespan: {data.species.averageLifespan} years</Pill>
          )}
          {data.species.averageHeight && (
            <Pill>
              Average height: {data.species.averageHeight} centimeters
            </Pill>
          )}
        </StyledDetailsBlock>
        <StyledDetailsBlock>
          {data.species.eyeColors?.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Eye colors:
                {data.species.eyeColors.map((eye) => {
                  return <ListItem key={eye}>{eye}</ListItem>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.species.hairColors?.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Hair colors:
                {data.species.hairColors.map((color) => {
                  return <ListItem key={color}>{color}</ListItem>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.species.skinColors?.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Skin colors:
                {data.species.skinColors.map((color) => {
                  return <ListItem key={color}>{color}</ListItem>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.species.homeworld?.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Homeworld:
                {data.species.homeworld.map((home) => {
                  return <ListItem key={home.name}>{home.name}</ListItem>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.species.personConnection?.people.length > 0 && (
            <Pill>
              <StyledTileDetail>
                People:
                {data.species.personConnection.people.map((person) => {
                  return <ListItem key={person.name}>{person.name}</ListItem>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.species.filmConnection?.films.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Films:
                {data.species.filmConnection.films.map((film) => {
                  return <ListItem key={film.title}>{film.title}</ListItem>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
        </StyledDetailsBlock>
      </StyledWrapper>
    </Container>
  );
};

export default SpeciesDetails;
