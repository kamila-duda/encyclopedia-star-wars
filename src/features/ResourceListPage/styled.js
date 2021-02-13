import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`;

export const StyledTitle = styled.h2`
text-align: center;
font-size: ${({theme})=>theme.fontSize.xxlarge};
text-transform: capitalize;
`;
export const StyledSearchLine = styled.p`
text-align: center;
margin: 10px;
`;

export const StyledPill = styled.button`
background-color: ${({theme})=>theme.color.yellow};
border-radius: 10px;
padding: 2px;
margin: 0 4px;
width: 30px;
height: 30px;
color: ${({theme})=>theme.color.dark};
border: none;
outline: none;
cursor: pointer;
`;