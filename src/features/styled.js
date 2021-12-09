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
  width: 100%;
`;
export const StyledTileDetail = styled.ul`
  border-radius: 15px;
  margin: 5px;
  padding: 0px 20px;
`;

export const ListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.normal};
`;

export const StyledTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  text-transform: capitalize;
`;
export const StyledPill = styled.div`
  background-color: ${({ theme }) => theme.color.yellow};
  border-radius: 10px;
  flex-grow: 1;
  padding: 5px;
  margin: 5px;
  color: ${({ theme }) => theme.color.dark};
  ${({ crawler }) =>
    crawler &&
    css`
      background-color: #010101;
      border: 1px solid ${({ theme }) => theme.color.yellow};
      color: ${({ theme }) => theme.color.yellow};
      padding: 20px;
      text-align: justify;
      line-height: 2;
    `}
`;
