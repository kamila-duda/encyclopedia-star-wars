import styled from "styled-components";

export const StyledTileContainer = styled.div`
width: 100%;
border: 1px solid ${({theme})=>theme.color.yellow};
border-radius: 15px;
background-color: ${({theme})=>theme.color.dark};
cursor: pointer;
`;

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large};
  text-align: center;
  text-transform: uppercase;
`;
