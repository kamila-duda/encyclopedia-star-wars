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