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
export const StyledPill = styled.p`
background-color: ${({theme})=>theme.color.yellow};
border-radius: 10px;
flex-grow: 1;
padding: 5px;
margin: 5px;
color: ${({theme})=>theme.color.dark};
${({crawler})=>
  crawler && css`
  background-color: transparent;
  border: 1px solid ${({theme})=>theme.color.yellow};
  color: ${({theme})=>theme.color.yellow};
  text-align: justify;
  line-height: 2;
  `}
`;