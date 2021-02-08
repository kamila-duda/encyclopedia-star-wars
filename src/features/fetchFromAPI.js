const API_URL = "https://swapi.dev/api/";

export const fetchFromAPI = async ({ path }) => {
 try {
        
  const response = await fetch(`${API_URL}${path}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  
  const configurationFile = await response.json();
  return configurationFile;
 }
 catch (error) {
     console.error("ups");
 }
};
