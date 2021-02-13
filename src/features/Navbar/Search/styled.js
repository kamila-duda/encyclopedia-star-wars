import styled from "styled-components";

export const StyledLabel = styled.label`
  width: 60%;
  padding: 5px;
  display: flex;
  align-items: center;
  border-radius: 33px;
  margin: auto;
  border: 1px solid ${({theme})=>theme.color.yellow};
  background-color: none;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    
    flex-grow: 1;
  }
`;
export const StyledIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 5px;
`;
export const StyledInput = styled.input`
  border-radius: 33px;
  border: none;
  color: ${({theme})=>theme.color.yellow};
  background-color: transparent;
  font-size: ${({theme})=>theme.fontSize.large};
  flex-grow: 0.8;
  width: 75%;
  outline: none;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({theme})=>theme.fontSize.small}
  }
`;
