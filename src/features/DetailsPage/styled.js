import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  padding: 15px;
  margin: auto;
`;
export const StyledDetailsBlock = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  padding: 15px;
  margin: auto;
`;
export const StyledTileDetail = styled.ul`
border-radius: 15px;
min-height: 100px;
margin: 5px;
`;
export const StyledTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  text-transform: capitalize;
`;