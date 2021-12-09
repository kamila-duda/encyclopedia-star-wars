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
  ListItem,
} from "../styled";

const StarshipDetails = ({ id }) => {
  const GET_STARSHIP_DETALS = gql`
    query ($id: ID!) {
      starship(id: $id) {
        name
        model
        starshipClass
        length
        crew
        passengers
        maxAtmospheringSpeed
        cargoCapacity
        manufacturers
        pilotConnection {
          pilots {
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

  const { loading, data, error } = useQuery(GET_STARSHIP_DETALS, {
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
      <StyledTitle>{data.starship.name}</StyledTitle>
      <StyledWrapper>
        <StyledDetailsBlock>
          {data.starship.model && <Pill>Model: {data.starship.model}</Pill>}
          {data.starship.starshipClass && (
            <Pill>Starship class: {data.starship.starshipClass}</Pill>
          )}
          {data.starship.length && (
            <Pill>Length: {data.starship.length} meters</Pill>
          )}
          {data.starship.crew && <Pill>Crew: {data.starship.crew} </Pill>}
          {data.starship.passengers && (
            <Pill>Passengers: {data.starship.passengers} </Pill>
          )}
          {data.starship.maxAtmospheringSpeed && (
            <Pill>
              Max atmosphering speed: {data.starship.maxAtmospheringSpeed}{" "}
            </Pill>
          )}
          {data.starship.cargoCapacity && (
            <Pill>Cargo capacity: {data.starship.cargoCapacity} kilograms</Pill>
          )}
        </StyledDetailsBlock>
        <StyledDetailsBlock>
          {data.starship.manufacturers?.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Manufacturers:
                {data.starship.manufacturers.map((manufacturer) => {
                  return <ListItem key={manufacturer}>{manufacturer}</ListItem>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.starship.pilotConnection?.pilots.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Pilops:
                {data.starship.pilotConnection.pilots.map((pilot) => {
                  return <ListItem key={pilot.name}>{pilot.name}</ListItem>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.starship.filmConnection?.films.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Films:
                {data.starship.filmConnection.films.map((film) => {
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

export default StarshipDetails;
