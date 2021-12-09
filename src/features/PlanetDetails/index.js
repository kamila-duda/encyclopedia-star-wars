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
} from "../styled";

const PlanetDetails = ({ id }) => {
  const GET_PLANET_DETALS = gql`
    query ($id: ID!) {
      planet(id: $id) {
        name
        diameter
        rotationPeriod
        orbitalPeriod
        gravity
        population
        climates
        terrains
        surfaceWater
        residentConnection {
          residents {
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

  const { loading, data, error } = useQuery(GET_PLANET_DETALS, {
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
      <StyledTitle>{data.planet.name}</StyledTitle>
      <StyledWrapper>
        <StyledDetailsBlock>
          {data.planet.diameter && (
            <Pill>Diameter: {data.planet.diameter} kilometers</Pill>
          )}
          {data.planet.rotationPeriod && (
            <Pill>Rotation period: {data.planet.rotationPeriod} hours</Pill>
          )}
          {data.planet.orbitalPeriod && (
            <Pill>Orbital period: {data.planet.orbitalPeriod} days</Pill>
          )}
          {data.planet.climates && (
            <Pill>Climates: {data.planet.climates} </Pill>
          )}
          {data.planet.gravity && <Pill>Gravity: {data.planet.gravity} </Pill>}
          {data.planet.terrains && (
            <Pill>Terrains: {data.planet.terrains} </Pill>
          )}
          {data.planet.surfaceWater && (
            <Pill>Surface water: {data.planet.surfaceWater} %</Pill>
          )}
          {data.planet.population && (
            <Pill>Average population: {data.planet.population} </Pill>
          )}
          {data.planet.residentConnection?.residents.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Residents:
                {data.planet.residentConnection.residents.map((resident) => {
                  return <li key={resident.name}>{resident.name}</li>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.planet.filmConnection?.films.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Films:
                {data.planet.filmConnection.films.map((film) => {
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

export default PlanetDetails;
