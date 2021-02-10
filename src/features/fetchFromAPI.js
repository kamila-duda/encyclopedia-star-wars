const API_URL = "https://swapi.dev/api/";

export const fetchFromAPI = async ({ path }) => {
  try {
    const response = await fetch(`${API_URL}${path}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("ups");
  }
};

export const fetchFromAPIdetail = async (path) => {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("ups");
  }
};
