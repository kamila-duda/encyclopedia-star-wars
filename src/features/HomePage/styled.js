import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
max-width: 1200px;
margin: auto;
text-align: center;
position: relative;
perspective: 500px;
`;
export const StyledTitle = styled.h1`
font-size: ${({theme})=> theme.fontSize.xxxLarge};
margin: 5px;
`;
export const StyledSubTitle = styled.h2`
font-size: ${({theme})=> theme.fontSize.xlarge};
margin: 5px;
`;
export const StyledHeaderContainer = styled.div`
transform: rotateX(40deg) rotateY(0deg);
width: 80%;
margin: auto;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`;