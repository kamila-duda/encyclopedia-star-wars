import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListContainer from "../../common/ListContainer";
import Tile from "../../common/Tile";
import Container from "../../common/Container";
import { toResourceList } from "../../core/routes";
import { fetchResourceContent } from "../ResourceListPage/resourceListSlice";
import {
  fetchResource,
  selectResource,
  selectResourceStatus,
} from "./homeSlice";
import { StyledHeader, StyledLink } from "./styled";

const HomePage = () => {
  const dispatch = useDispatch();
  const resource = useSelector(selectResource);
  const status = useSelector(selectResourceStatus);
  

  useEffect(() => {
    dispatch(fetchResource());
  }, []);

  return (
    <>
      {status === "loading" ? (
        <p>wait</p>
      ) : (
        <>
          <StyledHeader>
            <h1>Welcome to The Star Wars Encyclopedia</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus
              erat, efficitur sed posuere id, feugiat id orci. Curabitur
              bibendum libero in gravida ultrices. Duis eu odio sit amet lorem
              dignissim dignissim ac in orci. Cras sit amet cursus enim. Morbi
              eu elit eu erat facilisis hendrerit.
            </p>
          </StyledHeader>
          <Container>
            <ListContainer home={true}>
              {Object.keys(resource).map((key) => (
                <StyledLink
                  key={key}
                  onClick={() => dispatch(fetchResourceContent(key))}
                  to={toResourceList({key: key})}
                >
                  <Tile title={key} />
                </StyledLink>
              ))}
            </ListContainer>
          </Container>
        </>
      )}
    </>
  );
};

export default HomePage;
