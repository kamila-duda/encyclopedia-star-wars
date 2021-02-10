import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
max-width: 1200px;
margin: auto;
text-align: center;
`;
export const StyledTitle = styled.h1`
font-size: ${({theme})=> theme.fontSize.xxxLarge};
margin: 5px;
`;
export const StyledSubTitle = styled.h1`
font-size: ${({theme})=> theme.fontSize.xlarge};
margin: 5px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`;