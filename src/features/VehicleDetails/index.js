import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import Container from "../../components/Container";
import ErrorPage from "../../components/ErrorPage";
import Loading from "../../components/Loading";
import { Pill } from "../../components/Pill";
import { StyledTileDetail } from "./styled";
import { StyledTitle, StyledWrapper, StyledDetailsBlock } from "./styled";

const VehicleDetails = ({ id }) => {
  const GET_VEHICLE_DETALS = gql`
    query ($id: ID!) {
      vehicle(id: $id) {
        name
        model
        vehicleClass
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

  const { loading, data, error } = useQuery(GET_VEHICLE_DETALS, {
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
      <StyledTitle>{data.vehicle.name}</StyledTitle>
      <StyledWrapper>
        <StyledDetailsBlock>
          {data.vehicle.model && <Pill>Model: {data.vehicle.model}</Pill>}
          {data.vehicle.vehicleClass && (
            <Pill>Vehicle class: {data.vehicle.vehicleClass}</Pill>
          )}
          {data.vehicle.length && (
            <Pill>Length: {data.vehicle.length} meters</Pill>
          )}
          {data.vehicle.crew && <Pill>Crew: {data.vehicle.crew} </Pill>}
          {data.vehicle.passengers && (
            <Pill>Passengers: {data.vehicle.passengers} </Pill>
          )}
          {data.vehicle.maxAtmospheringSpeed && (
            <Pill>
              Max atmosphering speed: {data.vehicle.maxAtmospheringSpeed}{" "}
            </Pill>
          )}
          {data.vehicle.cargoCapacity && (
            <Pill>Cargo capacity: {data.vehicle.cargoCapacity} kilograms</Pill>
          )}
          {data.vehicle.manufacturers?.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Manufacturers:
                {data.vehicle.manufacturers.map((manufacturer) => {
                  return <li key={manufacturer}>{manufacturer}</li>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.vehicle.pilotConnection?.pilots.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Pilots:
                {data.vehicle.pilotConnection.pilots.map((pilot) => {
                  return <li key={pilot.name}>{pilot.name}</li>;
                })}
              </StyledTileDetail>
            </Pill>
          )}
          {data.vehicle.filmConnection?.films.length > 0 && (
            <Pill>
              <StyledTileDetail>
                Films:
                {data.vehicle.filmConnection.films.map((film) => {
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

export default VehicleDetails;
