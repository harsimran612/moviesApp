import { ENDPOINTS, MOVIE_DB_API_KEY } from "./constants";

const buildURL = (endpoint, type, page = 1, query = null) => {
  const lowerCaseEndpoint = endpoint.toLowerCase();
  const typeEndpoint = ENDPOINTS[endpoint.toLowerCase()]?.[type];
  if (!typeEndpoint) {
    throw new Error("Invalid Url Data");
  }
  const queryString = query ? `&query=${encodeURIComponent(query)}` : "";
  return `${lowerCaseEndpoint}/${typeEndpoint}/?api_key=${MOVIE_DB_API_KEY}&page=${page}${queryString}`;
};

export { buildURL };
