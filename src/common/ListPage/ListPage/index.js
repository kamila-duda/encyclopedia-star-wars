import React from "react";
import Container from "../../other/Container";
import Tile from "./Tile";
import ListContainer from "./ListContainer";
import { useDispatch } from "react-redux";
import { fetchResourceContent } from "../listSlice";
import { StyledLink } from "./styled";

const ListPage = ({ home, data }) => {
  const dataKeys = Object.keys(data);
  const dispatch = useDispatch();
  
  return (
    <>
      <Container>
        {home? (<ListContainer home={home}>
          {dataKeys.map((key) => (
            <StyledLink
            key={key}
            onClick={() => dispatch(fetchResourceContent(key))}
          >
            <Tile title={key}/></StyledLink>
          ))}
        </ListContainer>):
        (<ListContainer>
          {data.map((item) => (
            <Tile title={item.name} key={item.name}/>
          ))}
        </ListContainer>)}
      </Container>
    </>
  );
};

export default ListPage;
