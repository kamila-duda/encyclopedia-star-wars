import React from "react";
import ErrorPage from "../components/ErrorPage";
import Loading from "../components/Loading";
import { useQuery, gql } from "@apollo/client";
import ListItems from "../features/ListItems/ListItems";

const Species = () => {
  const GET_ALL_SPECIES = gql`
    {
      allSpecies {
        species {
          name
          id
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_ALL_SPECIES);

  if (error) {
    return <ErrorPage />;
  }

  if (loading) {
    return <Loading />;
  }

  return <ListItems data={data.allSpecies.species} />;
};

export default Species;
