import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListContainer from "../../common/ListContainer";
import Tile from "../../common/Tile";
import Container from "../../common/Container";
import { selectResourceContentList, selectResourceContentStatus, selectResourceResults } from "./resourceListSlice";
import { StyledLink, StyledTitle } from "./styled";

const ResourceListPage = () => {
 // const dispatch = useDispatch();
 const status = useSelector(selectResourceContentStatus);
 
 const results = useSelector(selectResourceResults)
const checkResource = useSelector(selectResourceContentList);

  return (
    <>
      {status === "loading" ? (
        <p>wait</p>
      ) : (
        <>
            <StyledTitle>{checkResource}</StyledTitle>
            <Container>
            <ListContainer home={false}>
              {results.map((key) => (
                <StyledLink
                  key={key.name? key.name : key.title}
                 
                >
                  <Tile title={key.name? key.name : key.title} />
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
