export const toResourceList = ({ path } = { path: ":path" }) =>
  `/${path}/`;
export const toHomePage = () => "/home";
export const toDetailsPage = (
  { path, id } = {path: ":path", id: ":id" }
) => `/${path}/${id}`;
