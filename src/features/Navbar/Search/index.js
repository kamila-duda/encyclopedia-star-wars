import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import _ from "lodash";
import search from "../../../assets/search.svg";
import { key } from "./searchQueryParameter";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../../core/queryParameter";
import { StyledIcon, StyledInput, StyledLabel } from "./styled";

const Search = () => {
  const query = useQueryParameter(key);
  const [searchQuery, setSearchQuery] = useState(query);
  const replaceQueryParameter = useReplaceQueryParameter(true);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    setSearchQuery("");
  }, [path]);

  const onInputChange = ({ target }) => {
    setSearchQuery(target.value);
    setTimeout(() => {
      replaceQueryParameter({
        key: key,
        value: target.value.trim() !== "" ? target.value.trim() : "",
      });
    }, 3000);

  };
  return (
    <StyledLabel>
      <StyledIcon src={search} />
      <StyledInput
        placeholder={`Search ${path.substring(1, path.length-1)}...`}
        value={searchQuery || ""}
        onChange={onInputChange}
      />
    </StyledLabel>
  );
};
export default Search;
