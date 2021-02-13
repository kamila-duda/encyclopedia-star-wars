import styled from "styled-components";

export const Wrapper = styled.div`
    margin:20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const HeaderTitle = styled.p`
    margin:0px 0px 40px 0px;
    font-size: ${({theme})=>theme.fontSize.large};
    text-align: center;
    letter-spacing: 0px;
    text-transform: uppercase;
`;

export const StyledImage = styled.img`
    max-width:100%;
    margin:0px auto;
`;
export const StyledImageContainer = styled.div`
background-color: ${({ theme }) => theme.color.yellow};
width:180px;
height: 180px;
border-radius: 50%;
`;