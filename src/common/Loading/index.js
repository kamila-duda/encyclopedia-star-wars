import React from "react";
import spinner from "../../assets/spinner.svg";
import { StyledWrapper, StyledSpinner } from "./styled";

const Loading = () => {
  return <StyledWrapper>
    <StyledSpinner src={spinner} alt="loading" />
  </StyledWrapper>;
};

export default Loading;
