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
        <p>wait</p>
      ) : (
        <>
          <StyledTitle>{resource}</StyledTitle>
          <Container>
            <ListContainer home={false}>
              {results.map((key, index) => (
                <StyledLink
                  key={key.name ? key.name : key.title}
                  to={toDetailsPage({ resource: resource, id: index + 1 })}
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
