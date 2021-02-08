import React from "react";
import Container from "../../other/Container";
import Tile from "./Tile";
import ListContainer from "./ListContainer";

const ListPage = ({ home, data }) => {
  const dataKeys = Object.keys(data);
  
  return (
    <>
      <Container>
        {home? (<ListContainer home={home}>
          {dataKeys.map((key) => (
            <Tile title={key} key={key}/>
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
