import styled from "styled-components";

export const StyledTileContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.yellow};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.dark};
  cursor: pointer;
  transition: .2s;
  &:hover {
    color: ${({ theme }) => theme.color.dark};
    background-color: ${({ theme }) => theme.color.yellow};
  }
`;

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large};
  text-align: center;
  text-transform: uppercase;
`;
