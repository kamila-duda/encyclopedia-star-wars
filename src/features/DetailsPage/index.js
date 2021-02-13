import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Container from "../../common/Container";
import Loading from "../../common/Loading";
import { useQueryParameter } from "../../core/queryParameter";
import { fetchExtraDetailFromAPI, fetchFromAPIdetail } from "../fetchFromAPI";
import { key } from "../Navbar/Search/searchQueryParameter";
import { fetchResourceContent } from "../ResourceListPage/resourceListSlice";
import {
  getDetails,
  selectDetailsResults,
  selectDetailsStatus,
  selectDetailsState,
} from "./detailsSlice";
import { StyledTitle, StyledWrapper,  StyledTileDetail, StyledDetailsBlock } from "./styled";


const DetailsPage = () => {

  const dispatch = useDispatch();
  const { path, id } = useParams();
  const query = useQueryParameter(key);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const history = useHistory();
  useEffect(() => {
      if(id) {
        dispatch(getDetails({path, id}));
      }
  }, [dispatch, id]);

  const results = useSelector(selectDetailsResults);
  const status = useSelector(selectDetailsStatus);
  const {starships, characters, vehicles, films, planets, species, homeworld} = useSelector(selectDetailsState);

  useEffect(() => {
    if (query !== null) {
      console.log(searchParams.toString())
      history.push(`/${path}/?${searchParams.toString()}`);
    }
  }, [path]);

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
            <StyledDetailsBlock>
              {results.height ? <p>Height: {results.height}</p> : ""}
              {results.mass ? <p>Mass: {results.mass} kg</p> : ""}
              {results.hair_color ? <p>Hair color: { results.hair_color}</p> : ""}
              {results.skin_color ? <p>Skin color: {results.skin_color}</p> : ""}
              {results.eye_color ? <p>Eye color: {results.eye_color}</p> : ""}
              {results.birth_year ? <p>Birth year:  {results.birth_year}</p> : ""}
              {results.gender ? <p>Gender: {results.gender} </p> : ""}
              {results.homeworld ? <p>Homeworld: {homeworld} </p> : ""}
              {results.model ? <p>Model: {results.model} </p> : ""}
              {results.manufacturer ? <p>Manufacturer: {results.manufacturer} </p> : ""}
              {results.length ? <p>Length: {results.length} </p> : ""}
              {results.max_atmosphering_speed ? <p>Max_atmosphering_speed: {results.max_atmosphering_speed} </p> : ""}
              {results.crew ? <p>Crew: {results.crew} </p> : ""}
              {results.passengers ? <p>Passengers: {results.passengers} </p> : ""}
              {results.cargo_capacity ? <p>Cargo capacity: {results.cargo_capacity} </p> : ""}
              {results.vehicle_class ? <p>Vehicle_class: {results.vehicle_class} </p> : ""}
              {results.rotation_period ? <p>Rotation_period: {results.rotation_period} </p> : ""}
              {results.orbital_period ? <p>Orbital_period: {results.orbital_period} </p> : ""}
              {results.diameter ? <p>Diameter: {results.diameter} </p> : ""}
              {results.climate ? <p>Climate: {results.climate} </p> : ""}
              {results.gravity ? <p>Gravity: {results.gravity} </p> : ""}
              {results.terrain ? <p>Terrain: {results.terrain} </p> : ""}
              {results.surface_watern ? <p>Surface water: {results.surface_water} </p> : ""}
              {results.population ? <p>Population: {results.population} </p> : ""}
              {results.hyperdrive_rating ? <p>Hyperdrive rating: {results.hyperdrive_rating} </p> : ""}
              {results.MGLT ? <p>MGLT: {results.MGLT} </p> : ""}
              {results.starship_class ? <p>Starship class: {results.starship_class} </p> : ""}
              {results.episode_id ? <p>Episode: {results.episode_id} </p> : ""}
              {results.director ? <p>Director: {results.director} </p> : ""}
              {results.producer ? <p>Producer: {results.producer} </p> : ""}
              {results.release_date ? <p>Release date: {results.release_date} </p> : ""}
              {results.classification ? <p>Classification: {results.classification} </p> : ""}
              {results.designation ? <p>Designation: {results.designation} </p> : ""}
              {results.average_height ? <p>Average height: {results.average_height} </p> : ""}
              {results.skin_colors ? <p>Skin colors: {results.skin_colors} </p> : ""}
              {results.hair_colors ? <p>Hair colors: {results.hair_colors} </p> : ""}
              {results.eye_colors ? <p>Eye colors: {results.eye_colors} </p> : ""}
              {results.language ? <p>Language: {results.language} </p> : ""}
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
                <ul>
                  CHARACTERS:
                  {characters.map((person) => (
                    <li key={person}>{`${person}, `}</li>
                  ))}
                </ul>
              ) : (
                ""
              )):""}
              {planets? (planets.length>0 ? (
                <ul>
                  PLANETS:
                  {planets.map((planet) => (
                    <li key={planet}>{`${planet}, `}</li>
                  ))}
                </ul>
              ) : (
                ""
              )):""}
              {vehicles? (vehicles.length>0 ? (
                <ul>
                  VEHICLES:
                  {vehicles.map((vehicle) => (
                    <li key={vehicle}>{`${vehicle}, `}</li>
                  ))}
                </ul>
              ) : (
                ""
              )):""}
              {films? (films.length>0 ? (
                <ul>
                  FILMS:
                  {films.map((film) => (
                    <li key={film}>{`${film}, `}</li>
                  ))}
                </ul>
              ) : (
                ""
              )):""}
              {species? (species.length>0 ? (
                <ul>
                  SPECIES:
                  {species.map((specie) => (
                    <li key={specie}>{`${specie}, `}</li>
                  ))}
                </ul>
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
