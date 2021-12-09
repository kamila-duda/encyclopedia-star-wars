import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListContainer from "../../components/ListContainer";
import Tile from "../../components/Tile";
import Container from "../../components/Container";
import ErrorPage from "../../components/ErrorPage";
import {
  fetchResourceContent,
  selectResourceContentStatus,
  selectResourcedata,
} from "./resourceListSlice";
import {
  StyledLink,
  StyledPill,
  StyledSearchLine,
  StyledTitle,
} from "./styled";
import { toDetailsPage, toResourceList } from "../../core/routes";
import { useLocation, useParams } from "react-router-dom";
import { useQueryParameter } from "../../core/queryParameter";
import { key } from "../Navbar/Search/searchQueryParameter";
import Search from "../Navbar/Search";
import EmptyResultsPage from "../../components/EmptyResultsPage";
// import { clearState } from "../DetailsPage/detailsSlice";
// import { useQuery, gql } from "@apollo/client";
// import store from "../../core/store";

const ListItems = ({ data }) => {
  //  const dispatch = useDispatch();
  //const data = useSelector(selectResourcedata);
  let location = useLocation();
  //const query = useQueryParameter(key);
  // useEffect(() => {
  //     if(id) {
  //       dispatch(getDetails({path, id}));
  //     }
  // }, [dispatch, id]);

  return (
    <>
      <StyledTitle>{location.pathname.replace("/", "")}</StyledTitle>
      <Container>
        <ListContainer home={false}>
          {data.map((key) => (
            <StyledLink key={key.name} to={toDetailsPage({ name: key.name })}>
              <Tile title={key.name ? key.name : key.title} />
            </StyledLink>
          ))}
        </ListContainer>
      </Container>
    </>
  );
};

export default ListItems;
