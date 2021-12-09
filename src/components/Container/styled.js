import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  ${({ home }) =>
    home &&
    css`
      position: relative;
      perspective: 1000px;
    `}
`;
