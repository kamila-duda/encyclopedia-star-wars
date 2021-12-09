import React from "react";
import ErrorPage from "../components/ErrorPage";
import Loading from "../components/Loading";
import { useQuery, gql } from "@apollo/client";
import ListItems from "../features/ListItems/ListItems";

const Planets = () => {
  // const dispatch = useDispatch();
  // const status = useSelector(selectResourceContentStatus);
  // const results = useSelector(selectResourceResults);
  // const { path } = useParams();
  // const query = useQueryParameter(key);

  const GET_ALL_PLANETS = gql`
    {
      allPlanets {
        planets {
          name
          id
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_ALL_PLANETS);

  if (error) {
    return <ErrorPage />;
  }

  if (loading) {
    return <Loading />;
  }

  return <ListItems data={data.allPlanets.planets} />;
};

export default Planets;
