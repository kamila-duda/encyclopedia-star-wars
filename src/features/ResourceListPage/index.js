import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListContainer from "../../common/ListContainer";
import Tile from "../../common/Tile";
import Container from "../../common/Container";
import {
  fetchResourceContent,
  selectResourceContentStatus,
  selectResourceResults,
} from "./resourceListSlice";
import { StyledLink, StyledTitle } from "./styled";
import { toDetailsPage } from "../../core/routes";
import { useParams } from "react-router-dom";
import Loading from "../../common/Loading";

const ResourceListPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectResourceContentStatus);
  const results = useSelector(selectResourceResults);
  const { resource } = useParams();
  useEffect(() => {
    dispatch(fetchResourceContent(resource));
  }, []);
  return (
    <>
      {status === "loading" ? (
        <Loading/>
      ) : (
        <>
          <StyledTitle>{resource}</StyledTitle>
          <Container>
            <ListContainer home={false}>
              {results.map((key) => (
                <StyledLink
                  key={key.name ? key.name : key.title}
                  to={toDetailsPage({ path: resource, id: key.url.substring(21+resource.length+1) })}
                >
                  <Tile title={key.name ? key.name : key.title} />
                </StyledLink>
              ))}
            </ListContainer>
          </Container>
        </>
      )}
    </>
  );
};

export default ResourceListPage;
