import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import Container from "../../components/Container";
import ErrorPage from "../../components/ErrorPage";
import Loading from "../../components/Loading";
import { Pill } from "../../components/Pill";
import {
  StyledTitle,
  StyledWrapper,
  StyledDetailsBlock,
  StyledTileDetail,
} from "./styled";

const PersonDetails = ({ id }) => {
  const GET_PERSON_DETALS = gql`
    query ($id: ID!) {
      person(id: $id) {
        name
        birthYear
        eyeColor
        gender
        hairColor
        height
        mass
        skinColor
        homeworld {
          name
        }
        species {
          name
        }
        filmConnection {
          films {
            title
          }
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_PERSON_DETALS, {
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
      <StyledTitle>{data.person.name}</StyledTitle>
      <StyledWrapper>
        <StyledDetailsBlock>
          {data.person.birthYear && (
            <Pill>
              Birth year: {data.person.birthYear} <br />
              <small>
                * The birth year of the person, using the in-universe standard
                of BBY or ABY - Before the Battle of Yavin or After the Battle
                of Yavin. The Battle of Yavin is a battle that occurs at the end
                of Star Wars episode IV: A New Hope.
              </small>
            </Pill>
          )}
          {data.person.eyeColor && (
            <Pill>Eye color: {data.person.eyeColor}</Pill>
          )}
          {data.person.gender && <Pill>Gender: {data.person.gender}</Pill>}
          {data.person.hairColor && (
            <Pill>Hair colors: {data.person.hairColor} </Pill>
          )}
          {data.person.height && (
            <Pill>Height: {data.person.height} centimeters</Pill>
          )}
          {data.person.mass && <Pill>Masss: {data.person.mass} kilograms</Pill>}
          {data.person.skinColor && (
            <Pill>Skin color: {data.person.skinColor} </Pill>
          )}
          {data.person.homeworld?.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Homeworld:
                {data.person.homeworld.map((home) => {
                  return <li key={home.name}>{home.name}</li>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.person.species?.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Species:
                {data.person.species.map((specie) => {
                  return <li key={specie.name}>{specie.name}</li>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.person.filmConnection?.films.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Films:
                {data.person.filmConnection.films.map((film) => {
                  return <li key={film.title}>{film.title}</li>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
        </StyledDetailsBlock>
      </StyledWrapper>
    </Container>
  );
};

export default PersonDetails;
