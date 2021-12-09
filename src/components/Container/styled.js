import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  ${({ home }) =>
    home &&
    css`
      position: relative;
      perspective: 1000px;
    `}
`;
