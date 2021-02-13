import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../common/Container";
import ErrorPage from "../../common/ErrorPage";
import Loading from "../../common/Loading";
import {
  getDetails,
  selectDetailsResults,
  selectDetailsStatus,
  selectDetailsState,
} from "./detailsSlice";
import { StyledTitle, StyledWrapper, StyledPill, StyledTileDetail, StyledDetailsBlock } from "./styled";


const DetailsPage = () => {

  const dispatch = useDispatch();
  const { path, id } = useParams();
  useEffect(() => {
      if(id) {
        dispatch(getDetails({path, id}));
      }
  }, [dispatch, id]);

  const results = useSelector(selectDetailsResults);
  const status = useSelector(selectDetailsStatus);
  const {starships, characters, vehicles, films, planets, species, homeworld} = useSelector(selectDetailsState);

  if (status === "error") {
    return <ErrorPage />;
  }

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
            {results.opening_crawl ? <StyledPill crawler={true}>Opening crawl: {results.opening_crawl} </StyledPill> : ""}
            <StyledDetailsBlock>
              {results.height ? <StyledPill>Height: {results.height}</StyledPill> : ""}
              {results.mass ? <StyledPill>Mass: {results.mass} kg</StyledPill> : ""}
              {results.hair_color ? <StyledPill>Hair color: { results.hair_color}</StyledPill> : ""}
              {results.skin_color ? <StyledPill>Skin color: {results.skin_color}</StyledPill> : ""}
              {results.eye_color ? <StyledPill>Eye color: {results.eye_color}</StyledPill> : ""}
              {results.birth_year ? <StyledPill>Birth year:  {results.birth_year}</StyledPill> : ""}
              {results.gender ? <StyledPill>Gender: {results.gender} </StyledPill> : ""}
              {results.homeworld ? <StyledPill>Homeworld: {homeworld} </StyledPill> : ""}
              {results.model ? <StyledPill>Model: {results.model} </StyledPill> : ""}
              {results.manufacturer ? <StyledPill>Manufacturer: {results.manufacturer} </StyledPill> : ""}
              {results.length ? <StyledPill>Length: {results.length} </StyledPill> : ""}
              {results.max_atmosphering_speed ? <StyledPill>Max_atmosphering_speed: {results.max_atmosphering_speed} </StyledPill> : ""}
              {results.crew ? <StyledPill>Crew: {results.crew} </StyledPill> : ""}
              {results.passengers ? <StyledPill>Passengers: {results.passengers} </StyledPill> : ""}
              {results.cargo_capacity ? <StyledPill>Cargo capacity: {results.cargo_capacity} </StyledPill> : ""}
              {results.vehicle_class ? <StyledPill>Vehicle_class: {results.vehicle_class} </StyledPill> : ""}
              {results.rotation_period ? <StyledPill>Rotation_period: {results.rotation_period} </StyledPill> : ""}
              {results.orbital_period ? <StyledPill>Orbital_period: {results.orbital_period} </StyledPill> : ""}
              {results.diameter ? <StyledPill>Diameter: {results.diameter} </StyledPill> : ""}
              {results.climate ? <StyledPill>Climate: {results.climate} </StyledPill> : ""}
              {results.gravity ? <StyledPill>Gravity: {results.gravity} </StyledPill> : ""}
              {results.terrain ? <StyledPill>Terrain: {results.terrain} </StyledPill> : ""}
              {results.surface_watern ? <StyledPill>Surface water: {results.surface_water} </StyledPill> : ""}
              {results.population ? <StyledPill>Population: {results.population} </StyledPill> : ""}
              {results.hyperdrive_rating ? <StyledPill>Hyperdrive rating: {results.hyperdrive_rating} </StyledPill> : ""}
              {results.MGLT ? <StyledPill>MGLT: {results.MGLT} </StyledPill> : ""}
              {results.starship_class ? <StyledPill>Starship class: {results.starship_class} </StyledPill> : ""}
              {results.episode_id ? <StyledPill>Episode: {results.episode_id} </StyledPill> : ""}
              {results.director ? <StyledPill>Director: {results.director} </StyledPill> : ""}
              {results.producer ? <StyledPill>Producer: {results.producer} </StyledPill> : ""}
              {results.release_date ? <StyledPill>Release date: {results.release_date} </StyledPill> : ""}
              {results.classification ? <StyledPill>Classification: {results.classification} </StyledPill> : ""}
              {results.designation ? <StyledPill>Designation: {results.designation} </StyledPill> : ""}
              {results.average_height ? <StyledPill>Average height: {results.average_height} </StyledPill> : ""}
              {results.skin_colors ? <StyledPill>Skin colors: {results.skin_colors} </StyledPill> : ""}
              {results.hair_colors ? <StyledPill>Hair colors: {results.hair_colors} </StyledPill> : ""}
              {results.eye_colors ? <StyledPill>Eye colors: {results.eye_colors} </StyledPill> : ""}
              {results.language ? <StyledPill>Language: {results.language} </StyledPill> : ""}
              </StyledDetailsBlock>
              <StyledDetailsBlock>
              {starships? (starships.length>0 ? (
                <StyledTileDetail>
                  STARSHIPS:
                  {starships.map((starship) => (
                    <li key={starship}>{`${starship}, `}</li>
                  ))}
                </StyledTileDetail>
              ) : (
                ""
              )):""}
              {characters? (characters.length>0 ? (
                <StyledTileDetail>
                  CHARACTERS:
                  {characters.map((person) => (
                    <li key={person}>{`${person}, `}</li>
                  ))}
                </StyledTileDetail>
              ) : (
                ""
              )):""}
              {planets? (planets.length>0 ? (
                <StyledTileDetail>
                  PLANETS:
                  {planets.map((planet) => (
                    <li key={planet}>{`${planet}, `}</li>
                  ))}
                </StyledTileDetail>
              ) : (
                ""
              )):""}
              {vehicles? (vehicles.length>0 ? (
                <StyledTileDetail>
                  VEHICLES:
                  {vehicles.map((vehicle) => (
                    <li key={vehicle}>{`${vehicle}, `}</li>
                  ))}
                </StyledTileDetail>
              ) : (
                ""
              )):""}
              {films? (films.length>0 ? (
                <StyledTileDetail>
                  FILMS:
                  {films.map((film) => (
                    <li key={film}>{`${film}, `}</li>
                  ))}
                </StyledTileDetail>
              ) : (
                ""
              )):""}
              {species? (species.length>0 ? (
                <StyledTileDetail>
                  SPECIES:
                  {species.map((specie) => (
                    <li key={specie}>{`${specie}, `}</li>
                  ))}
                </StyledTileDetail>
              ) : (
                ""
              )):""}
              </StyledDetailsBlock>
            </StyledWrapper>
          </Container>
        </>
      )}
    </>
  );
};

export default DetailsPage;
