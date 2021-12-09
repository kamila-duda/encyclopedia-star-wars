export const toHomePage = () => "/";
export const toDetailsPage = ({ path, id } = { path: ":path", id: ":id" }) =>
  `${path}/${id}`;
