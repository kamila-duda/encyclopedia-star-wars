export const toResourceList = ({ resource } = { resource: ":resource" }) =>
  `/${resource}`;
export const toHomePage = () => "/home";
export const toDetailsPage = (
  { path, id } = {path: ":path", id: ":id" }
) => `/${path}/${id}`;
