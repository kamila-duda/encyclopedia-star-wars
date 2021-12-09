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
} from "./styled";

const FilmDetails = ({ id }) => {
  const GET_FILM_DETALS = gql`
    query ($id: ID!) {
      film(id: $id) {
        title
        openingCrawl
        director
        producers
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
          <Pill crawler>Opening crawl: {data.film.openingCrawl} </Pill>
        )}
        <StyledDetailsBlock>
          {data.film.director && <Pill>Director: {data.film.director} </Pill>}
          {data.film.producer && <Pill>Producer: {data.film.producer} </Pill>}
          {data.film.release_date && (
            <Pill>Release date: {data.film.release_date} </Pill>
          )}
          {data.film.classification && (
            <Pill>Classification: {data.film.classification} </Pill>
          )}
          {data.film.designation && (
            <Pill>Designation: {data.film.designation} </Pill>
          )}
        </StyledDetailsBlock>
        <StyledDetailsBlock>
          {data.film.speciesConnection?.species.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Species:
                {data.film.speciesConnection.species.map((specie) => {
                  return <li key={specie.name}>{specie.name}</li>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.film.speciesConnection?.species.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Starships:
                {data.film.starshipConnection.starships.map((starship) => {
                  return <li key={starship.name}>{starship.name}</li>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.film.vehilcesConnection?.vehicles.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Vehicles:
                {data.film.vehilcesConnection.vehicles.map((vehicle) => {
                  return <li key={vehicle.name}>{vehicle.name}</li>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.film.characterConnection?.characters.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Characters:
                {data.film.characterConnection.characters.map((character) => {
                  return <li key={character.name}>{character.name}</li>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.film.planetConnection?.planets.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Planets:
                {data.film.planetConnection.planets.map((planet) => {
                  return <li key={planet.name}>{planet.name}</li>;
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
