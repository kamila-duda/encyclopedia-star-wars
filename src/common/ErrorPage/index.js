
import React from "react";
import { Link } from "react-router-dom";
import { StyledImage, StyledImageContainer, ErrorTitle, Wrapper, ErrorMessage, HomePageButton } from "./styled";
import vader from "../../assets/vader.svg";
import { toHomePage } from "../../core/routes";

const ErrorPage = () => {
    return (
        <Wrapper>
            <StyledImageContainer><StyledImage src={vader} alt="ConnectionErrorImage" /></StyledImageContainer>
            <ErrorTitle>Ooops! Something went wrong...</ErrorTitle>
            <ErrorMessage>Please check your network connection and try again</ErrorMessage>
                <Link
                    to={toHomePage()}
                >
                    <HomePageButton>Back to home page</HomePageButton>
                </Link>
        </Wrapper>
    )
};

export default ErrorPage