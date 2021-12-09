import React from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import FilmDetails from "../features/FilmDetails";
import PersonDetails from "../features/PersonDetails";
import PlanetDetails from "../features/PlanetDetails";
import SpeciesDetails from "../features/SpeciesDetails";
import StarshipDetails from "../features/StarshipDetails";
import VehicleDetails from "../features/VehicleDetails";

const DetailsPage = () => {
  const { path, id } = useParams();

  return (
    <Container>
      {path === "planets" && <PlanetDetails id={id} />}
      {path === "people" && <PersonDetails id={id} />}
      {path === "films" && <FilmDetails id={id} />}
      {path === "species" && <SpeciesDetails id={id} />}
      {path === "vehicles" && <VehicleDetails id={id} />}
      {path === "starships" && <StarshipDetails id={id} />}
    </Container>
  );
};

export default DetailsPage;
