import React from "react";
import ErrorPage from "../components/ErrorPage";
import Loading from "../components/Loading";
import { useQuery, gql } from "@apollo/client";
import ListItems from "../features/ListItems/ListItems";

const Vehicles = () => {
  const GET_ALL_VEHICLES = gql`
    {
      allVehicles {
        vehicles {
          name
          id
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_ALL_VEHICLES);

  if (error) {
    return <ErrorPage />;
  }

  if (loading) {
    return <Loading />;
  }

  return <ListItems data={data.allVehicles.vehicles} />;
};

export default Vehicles;
