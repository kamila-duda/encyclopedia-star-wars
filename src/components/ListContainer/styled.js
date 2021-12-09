import styled, { css } from "styled-components";

export const StyledListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 15px;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ home }) =>
    home &&
    css`
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      grid-auto-rows: 150px;
      @media (max-width: ${({ theme }) => theme.media.tablet}) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
        grid-auto-rows: unset;
      }
    `}
`;
