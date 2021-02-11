import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../common/Container";
import Loading from "../../common/Loading";
import { fetchExtraDetailFromAPI, fetchFromAPIdetail } from "../fetchFromAPI";
import {
  getDetails,
  selectDetailsResults,
  selectDetailsStatus,
  selectDetailsState,
} from "./detailsSlice";
import { StyledTitle, StyledWrapper,  StyledTileDetail } from "./styled";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { path, id } = useParams();

  useEffect(() => {
    dispatch(getDetails(`${path}/${id}`));
  }, []);

  const results = useSelector(selectDetailsResults);
  const status = useSelector(selectDetailsStatus);
  const {starships, characters, vehicles, films, planets, species, homeworld} = useSelector(selectDetailsState);

  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : (
        <>
          <Container>
            <StyledTitle>
              {results.name ? results.name : results.title}
            </StyledTitle>
            <StyledWrapper>
            {results.opening_crawl ? <p>Opening crawl: {results.opening_crawl} </p> : ""}
              {results.height ? <StyledTileDetail>Height:<li> {results.height}</li></StyledTileDetail> : ""}
              {results.mass ? <StyledTileDetail>Mass:<li> {results.mass} kg</li></StyledTileDetail> : ""}
              {results.hair_color ? <StyledTileDetail>Hair color: <li>{ results.hair_color}</li></StyledTileDetail> : ""}
              {results.skin_color ? <StyledTileDetail>Skin color:<li> {results.skin_color}</li></StyledTileDetail> : ""}
              {results.eye_color ? <StyledTileDetail>Eye color:<li> {results.eye_color}</li></StyledTileDetail> : ""}
              {results.birth_year ? <StyledTileDetail>Birth year:  <li>{results.birth_year}</li></StyledTileDetail> : ""}
              {results.gender ? <StyledTileDetail>Gender: <li>{results.gender}</li> </StyledTileDetail> : ""}
              {results.homeworld ? <StyledTileDetail>Homeworld: <li>{homeworld}</li> </StyledTileDetail> : ""}
              {results.model ? <StyledTileDetail>Model: <li>{results.model}</li> </StyledTileDetail> : ""}
              {results.manufacturer ? <StyledTileDetail>Manufacturer: <li>{results.manufacturer}</li> </StyledTileDetail> : ""}
              {results.length ? <StyledTileDetail>Length: <li>{results.length}</li> </StyledTileDetail> : ""}
              {results.max_atmosphering_speed ? <StyledTileDetail>Max_atmosphering_speed: <li>{results.max_atmosphering_speed}</li> </StyledTileDetail> : ""}
              {results.crew ? <StyledTileDetail>Crew: <li>{results.crew}</li> </StyledTileDetail> : ""}
              {results.passengers ? <StyledTileDetail>Passengers: <li>{results.passengers}</li> </StyledTileDetail> : ""}
              {results.cargo_capacity ? <StyledTileDetail>Cargo capacity: <li>{results.cargo_capacity}</li> </StyledTileDetail> : ""}
              {results.vehicle_class ? <StyledTileDetail>Vehicle_class: <li>{results.vehicle_class}</li> </StyledTileDetail> : ""}
              {results.rotation_period ? <StyledTileDetail>Rotation_period: <li>{results.rotation_period}</li> </StyledTileDetail> : ""}
              {results.orbital_period ? <StyledTileDetail>Orbital_period: <li>{results.orbital_period}</li> </StyledTileDetail> : ""}
              {results.diameter ? <StyledTileDetail>Diameter: <li>{results.diameter}</li> </StyledTileDetail> : ""}
              {results.climate ? <StyledTileDetail>Climate: <li>{results.climate}</li> </StyledTileDetail> : ""}
              {results.gravity ? <StyledTileDetail>Gravity: <li>{results.gravity}</li> </StyledTileDetail> : ""}
              {results.terrain ? <StyledTileDetail>Terrain: <li>{results.terrain}</li> </StyledTileDetail> : ""}
              {results.surface_watern ? <StyledTileDetail>Surface water: <li>{results.surface_water}</li> </StyledTileDetail> : ""}
              {results.population ? <StyledTileDetail>Population: <li>{results.population}</li> </StyledTileDetail> : ""}
              {results.hyperdrive_rating ? <StyledTileDetail>Hyperdrive rating: <li>{results.hyperdrive_rating}</li> </StyledTileDetail> : ""}
              {results.MGLT ? <StyledTileDetail>MGLT: <li>{results.MGLT}</li> </StyledTileDetail> : ""}
              {results.starship_class ? <StyledTileDetail>Starship class: <li>{results.starship_class}</li> </StyledTileDetail> : ""}
              {results.episode_id ? <StyledTileDetail>Episode: <li>{results.episode_id}</li> </StyledTileDetail> : ""}
              {results.director ? <StyledTileDetail>Director: <li>{results.director}</li> </StyledTileDetail> : ""}
              {results.producer ? <StyledTileDetail>Producer: <li>{results.producer}</li> </StyledTileDetail> : ""}
              {results.release_date ? <StyledTileDetail>Release date: <li>{results.release_date}</li> </StyledTileDetail> : ""}
              {results.classification ? <StyledTileDetail>Classification: <li>{results.classification}</li> </StyledTileDetail> : ""}
              {results.designation ? <StyledTileDetail>Designation: <li>{results.designation}</li> </StyledTileDetail> : ""}
              {results.average_height ? <StyledTileDetail>Average height: <li>{results.average_height}</li> </StyledTileDetail> : ""}
              {results.skin_colors ? <StyledTileDetail>Skin colors: <li>{results.skin_colors}</li> </StyledTileDetail> : ""}
              {results.hair_colors ? <StyledTileDetail>Hair colors: <li>{results.hair_colors}</li> </StyledTileDetail> : ""}
              {results.eye_colors ? <StyledTileDetail>Eye colors: <li>{results.eye_colors}</li> </StyledTileDetail> : ""}
              {results.language ? <StyledTileDetail>Language: <li>{results.language}</li> </StyledTileDetail> : ""}

              {starships ? (
                <StyledTileDetail>
                  STARSHIPS:
                  {starships.map((starship) => (
                    <li key={starship}>{`${starship}, `}</li>
                  ))}
                </StyledTileDetail>
              ) : (
                ""
              )}
              {characters ? (
                <ul>
                  CHARACTERS:
                  {characters.map((person) => (
                    <li key={person}>{`${person}, `}</li>
                  ))}
                </ul>
              ) : (
                ""
              )}
              {planets ? (
                <ul>
                  PLANETS:
                  {planets.map((planet) => (
                    <li key={planet}>{`${planet}, `}</li>
                  ))}
                </ul>
              ) : (
                ""
              )}
              {vehicles ? (
                <ul>
                  VEHICLES:
                  {vehicles.map((vehicle) => (
                    <li key={vehicle}>{`${vehicle}, `}</li>
                  ))}
                </ul>
              ) : (
                ""
              )}
              {films ? (
                <ul>
                  FILMS:
                  {films.map((film) => (
                    <li key={film}>{`${film}, `}</li>
                  ))}
                </ul>
              ) : (
                ""
              )}
              {species ? (
                <ul>
                  SPECIES:
                  {species.map((specie) => (
                    <li key={specie}>{`${specie}, `}</li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </StyledWrapper>
          </Container>
        </>
      )}
    </>
  );
};

export default DetailsPage;
