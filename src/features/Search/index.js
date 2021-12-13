import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import _ from "lodash";
import search from "../../assets/search.svg";
import { key } from "./searchQueryParameter";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../core/queryParameter";
import { Button, StyledIcon, StyledInput, StyledLabel } from "./styled";

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

  const clearQuery = () => {
    replaceQueryParameter({
      key: key,
      value: "",
    });
    setSearchQuery("");
  };

  return (
    <StyledLabel>
      <StyledIcon src={search} />
      <StyledInput
        placeholder={`Search ${path.replace("/", "")}...`}
        value={searchQuery || ""}
        onChange={onInputChange}
      />
      {query && <Button onClick={() => clearQuery()}>X</Button>}
    </StyledLabel>
  );
};
export default Search;
