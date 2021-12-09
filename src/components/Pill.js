import styled, { css } from "styled-components";

export const Pill = styled.div`
  background-color: ${({ theme }) => theme.color.yellow};
  border-radius: 10px;
  flex-grow: 1;
  padding: 10px 15px;
  margin: 5px;
  color: ${({ theme }) => theme.color.dark};
  font-size: ${({ theme }) => theme.fontSize.large};
  height: max-content;
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
