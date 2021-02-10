import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../common/Container";
import { fetchFromAPIdetail } from "../fetchFromAPI";
import { getDetails, selectDetailsResults } from "./detailsSlice";
import { StyledTitle } from "./styled";

const DetailsPage = () => {
  const dispatch = useDispatch();

  const results = useSelector(selectDetailsResults);

  const getHomeworld = () => {
    const homeworld = fetchFromAPIdetail(results.homeworld);
    //console.log(`to jest 1 ${homeworld}`);
    const homeworldName = homeworld;
    // console.log(homeworldName)
    return homeworldName.name;
  };
  
  const { resource, id } = useParams();

  useEffect(() => {
    dispatch(getDetails(`${resource}/${id}`));
  }, []);

  const items = [];

  for (const [key, value] of Object.entries(results)) {
    items.push(
      <li key={key}>
        {key}: {value}
      </li>
    );
  }
  return (
    <>
      <StyledTitle>test</StyledTitle>
      <Container>
        <ul>{items}</ul>
        <p>{results.name ? results.name : ""}</p>
        <p>{results.height ? results.height : ""}</p>
        <p>{results.mass ? results.mass : ""}</p>
        <p>{results.hair_color ? results.hair_color : ""}</p>
        <p>{results.skin_color ? results.skin_color : ""}</p>
        <p>{results.eye_color ? results.eye_color : ""}</p>
        <p>{results.birth_year ? results.birth_year : ""}</p>
        <p>{results.gender ? results.gender : ""}</p>
        <p>{results.homeworld ? getHomeworld() : ""}</p>
        <p>{results.films ? results.films : ""}</p>
      </Container>
    </>
  );
};

export default DetailsPage;
