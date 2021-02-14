const API_URL = "https://swapi.dev/api/";

export const fetchFromAPI = async ({ path, id, query }) => {
  try {
    console.log(`${API_URL}${path}?search=${query}`)
    const response = query
      ? await fetch(`${API_URL}${path}?search=${query}`)
      : id
      ? await fetch(`${API_URL}${path}/${id}`)
      : await fetch(`${API_URL}${path}`);
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

export const fetchExtraDetailFromAPI = async (array, fieldName) => {
  try {
    const response = await Promise.all(
      array.map((item) =>
        fetch(item)
          .then((res) => res.json())
          .then((r) => r[fieldName])
      )
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
