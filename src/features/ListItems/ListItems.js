import React from "react";
import ListContainer from "../../components/ListContainer";
import Tile from "../../components/Tile";
import Container from "../../components/Container";
import { StyledLink, StyledTitle } from "./styled";
import { toDetailsPage } from "../../core/routes";
import { useLocation } from "react-router-dom";

const ListItems = ({ data }) => {
  let location = useLocation();
  //const query = useQueryParameter(key);

  return (
    <>
      <StyledTitle>{location.pathname.replace("/", "")}</StyledTitle>
      <Container>
        <ListContainer home={false}>
          {data.map((key, i) => (
            <StyledLink
              key={i}
              to={toDetailsPage({ path: location.pathname, id: key.id })}
            >
              <Tile title={key.name ? key.name : key.title} />
            </StyledLink>
          ))}
        </ListContainer>
      </Container>
    </>
  );
};

export default ListItems;
