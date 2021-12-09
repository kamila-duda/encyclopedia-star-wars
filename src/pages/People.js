import React from "react";
import ErrorPage from "../components/ErrorPage";
import Loading from "../components/Loading";
import { useQuery, gql } from "@apollo/client";
import ListItems from "../features/ListItems/ListItems";

const People = () => {
  // const dispatch = useDispatch();
  // const status = useSelector(selectResourceContentStatus);
  // const results = useSelector(selectResourceResults);
  // const { path } = useParams();
  // const query = useQueryParameter(key);

  const GET_ALL_PEOPLE = gql`
    {
      allPeople {
        people {
          name
          id
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_ALL_PEOPLE);

  if (error) {
    return <ErrorPage />;
  }

  if (loading) {
    return <Loading />;
  }

  return <ListItems data={data.allPeople.people} />;
};

export default People;
