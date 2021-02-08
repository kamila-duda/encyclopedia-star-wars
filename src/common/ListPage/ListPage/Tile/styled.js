import styled from "styled-components";

export const StyledTileContainer = styled.div`
width: 120px;
border: 1px solid ${({theme})=>theme.color.yellow};
border-radius: 15px;
cursor: pointer;
`;

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large};
  text-align: center;
  text-transform: uppercase;
`;