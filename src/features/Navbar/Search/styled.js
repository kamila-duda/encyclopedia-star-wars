import styled from "styled-components";

export const StyledLabel = styled.label`
  width: 50%;
  display: flex;
  align-items: center;
  border-radius: 33px;
  margin: 5px;
  border: 1px solid ${({theme})=>theme.color.yellow};
  background-color: none;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    
    flex-grow: 1;
  }
`;
export const StyledIcon = styled.img`
  width: 15px;
  height: 15px;
  margin: 0 5px;
`;
export const StyledInput = styled.input`
  border-radius: 33px;
  border: none;
  color: ${({theme})=>theme.color.yellow};
  background-color: transparent;
  font-size: 16px;
  flex-grow: 0.8;
  width: 75%;
  outline: none;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 13px;
  }
`;
