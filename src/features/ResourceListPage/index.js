import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListContainer from "../../common/ListContainer";
import Tile from "../../common/Tile";
import Container from "../../common/Container";
import ErrorPage from "../../common/ErrorPage";
import {
  fetchResourceContent,
  selectResourceContentStatus,
  selectResourceResults,
} from "./resourceListSlice";
import {
  StyledLink,
  StyledPill,
  StyledSearchLine,
  StyledTitle,
} from "./styled";
import { toDetailsPage, toResourceList } from "../../core/routes";
import { useParams } from "react-router-dom";
import Loading from "../../common/Loading";
import { useQueryParameter } from "../../core/queryParameter";
import { key } from "../Navbar/Search/searchQueryParameter";
import Search from "../Navbar/Search";
import EmptyResultsPage from "../../common/EmptyResultsPage";

const ResourceListPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectResourceContentStatus);
  const results = useSelector(selectResourceResults);
  const { path } = useParams();
  const query = useQueryParameter(key);

  useEffect(() => {
    dispatch(fetchResourceContent({ path, query }));
  }, [dispatch, path, query]);

  if (status === "error") {
    return <ErrorPage />;
  }

  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : (
        <>
          <StyledTitle>{path}</StyledTitle>
          {query ? (
            <StyledSearchLine>
              {`searching word: ${query} (${results.length})`}
              <StyledLink to={toResourceList({ path })}>
                <StyledPill>❌</StyledPill>
              </StyledLink>
            </StyledSearchLine>
          ) : (
            ""
          )}
          <Container>
            <Search />
            {results.length===0 ? <EmptyResultsPage query={query}/>:(<ListContainer home={false}>
              {results.map((key) => (
                <StyledLink
                  key={key.name ? key.name : key.title}
                  to={toDetailsPage({
                    path: path,
                    id: key.url.substring(21 + path.length + 1),
                  })}
                >
                  <Tile title={key.name ? key.name : key.title} />
                </StyledLink>
              ))}
            </ListContainer>)}
          </Container>
        </>
      )}
    </>
  );
};

export default ResourceListPage;
