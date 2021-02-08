import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListPage from "../../common/listPage/ListPage";
import {
  fetchResource,
  selectResource,
  selectResourceStatus,
} from "./homeSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const resource = useSelector(selectResource);
  const status = useSelector(selectResourceStatus);

  useEffect(() => {
    dispatch(fetchResource());
  }, []);
  return (
    <>
      {status === "loading" ? (
        <p>wait</p>
      ) : (
        <ListPage home={true} data={resource} />
      )}
    </>
  );
};

export default HomePage;
