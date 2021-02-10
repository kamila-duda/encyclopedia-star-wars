export const toResourceList = ({ resource } = { resource: ":resource" }) =>
  `/${resource}`;
export const toHomePage = () => "/home";
export const toDetailsPage = (
  { resource, id } = { resource: ":resource", id: ":id" }
) => `/${resource}/${id}`;
