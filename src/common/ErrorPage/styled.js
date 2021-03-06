import styled from "styled-components";

export const Wrapper = styled.section`
    padding:90px 20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ErrorTitle = styled.h1`
    margin-top:38px;
    margin-bottom:0px;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
`;

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
`;
export const StyledImageContainer = styled.div`
background-color: ${({ theme }) => theme.color.yellow};
width:180px;
height: 180px;
border-radius: 50%;
`;
export const ErrorMessage = styled.p`
    margin-top:24px;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    margin-bottom:24px;
`;

export const HomePageButton = styled.button`
    background-color:${({ theme }) => theme.color.yellow};
    color:${({ theme }) => theme.color.dark};
    border:none;
    border-radius: 5px;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    transition: 0.5s filter;

    &:hover{
        filter:brightness(115%);
        cursor: pointer;
    }
`;