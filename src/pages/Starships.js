import React from "react";
import ErrorPage from "../components/ErrorPage";
import Loading from "../components/Loading";
import { useQuery, gql } from "@apollo/client";
import ListItems from "../features/ListItems/ListItems";

const Starships = () => {
  const GET_ALL_STARSHIPS = gql`
    {
      allStarships {
        starships {
          name
          id
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_ALL_STARSHIPS);

  if (error) {
    return <ErrorPage />;
  }

  if (loading) {
    return <Loading />;
  }

  return <ListItems data={data.allStarships.starships} />;
};

export default Starships;
