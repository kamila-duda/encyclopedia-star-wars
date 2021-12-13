import React from "react";
import ListContainer from "../../components/ListContainer";
import Tile from "../../components/Tile";
import Container from "../../components/Container";
import { StyledLink, StyledTitle } from "./styled";
import { toDetailsPage } from "../../core/routes";
import { useLocation } from "react-router-dom";
import Search from "../Search";
import { useQueryParameter } from "../../core/queryParameter";
import { key } from "../Search/searchQueryParameter";

const ListItems = ({ data }) => {
  let location = useLocation();
  const query = useQueryParameter(key);

  return (
    <Container>
      <StyledTitle>{location.pathname.replace("/", "")}</StyledTitle>
      <Search />
      <ListContainer home={false}>
        {data
          .filter((item) =>
            (item.name ?? item.title)
              .toLowerCase()
              .includes(query ?? "".toLowerCase())
          )
          .map((key, i) => (
            <StyledLink
              key={i}
              to={toDetailsPage({ path: location.pathname, id: key.id })}
            >
              <Tile title={key.name ? key.name : key.title} />
            </StyledLink>
          ))}
      </ListContainer>
    </Container>
  );
};

export default ListItems;
