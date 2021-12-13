import styled from "styled-components";

export const StyledLabel = styled.label`
  width: 60%;
  padding: 5px;
  display: flex;
  align-items: center;
  border-radius: 33px;
  margin: 0 auto 30px;
  border: 1px solid ${({ theme }) => theme.color.yellow};
  background-color: black;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-grow: 1;
  }
`;
export const StyledIcon = styled.img`
  width: 25px;
  height: 25px;
  margin: 10px 15px 10px 10px;
`;
export const Button = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.yellow};
  font-size: 25px;
  cursor: pointer;
`;
export const StyledInput = styled.input`
  border-radius: 33px;
  border: none;
  color: ${({ theme }) => theme.color.yellow};
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.large};
  flex-grow: 0.8;
  width: 75%;
  outline: none;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  :focus:-moz-placeholder {
    color: transparent;
  }

  :focus::-moz-placeholder {
    color: transparent;
  }

  :focus:-ms-input-placeholder {
    color: transparent;
  }
`;
