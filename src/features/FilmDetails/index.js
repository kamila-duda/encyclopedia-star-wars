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
  StyledTileDetail,
  StyledDetailsBlock,
  ListItem,
} from "../styled";

const FilmDetails = ({ id }) => {
  const GET_FILM_DETALS = gql`
    query ($id: ID!) {
      film(id: $id) {
        title
        openingCrawl
        director
        releaseDate
        speciesConnection {
          species {
            name
          }
        }
        starshipConnection {
          starships {
            name
          }
        }
        vehicleConnection {
          vehicles {
            name
          }
        }
        characterConnection {
          characters {
            name
          }
        }
        planetConnection {
          planets {
            name
          }
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_FILM_DETALS, {
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
      <StyledTitle>{data.film.title}</StyledTitle>
      <StyledWrapper>
        {data.film.openingCrawl && (
          <Pill as="p" crawler>
            {data.film.openingCrawl}
          </Pill>
        )}
        <StyledDetailsBlock>
          {data.film.director && <Pill>Director: {data.film.director} </Pill>}
          {data.film.releaseDate && (
            <Pill>Release date: {data.film.releaseDate} </Pill>
          )}
        </StyledDetailsBlock>
        <StyledDetailsBlock>
          {data.film.speciesConnection?.species.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Species:
                {data.film.speciesConnection.species.map((specie) => {
                  return <ListItem key={specie.name}>{specie.name}</ListItem>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.film.starshipConnection?.starships.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Starships:
                {data.film.starshipConnection.starships.map((starship) => {
                  return (
                    <ListItem key={starship.name}>{starship.name}</ListItem>
                  );
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.film.vehilcesConnection?.vehicles.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Vehicles:
                {data.film.vehilcesConnection.vehicles.map((vehicle) => {
                  return <ListItem key={vehicle.name}>{vehicle.name}</ListItem>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.film.characterConnection?.characters.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Characters:
                {data.film.characterConnection.characters.map((character) => {
                  return (
                    <ListItem key={character.name}>{character.name}</ListItem>
                  );
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.film.planetConnection?.planets.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Planets:
                {data.film.planetConnection.planets.map((planet) => {
                  return <ListItem key={planet.name}>{planet.name}</ListItem>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
        </StyledDetailsBlock>
      </StyledWrapper>
    </Container>
  );
};

export default FilmDetails;
