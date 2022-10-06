import axios from "axios";
import { MOVIE_DB_API_BASE_URL, MOVIE_DB_API_KEY } from "./constants";
import { buildURL } from "./util";

const apiRequest = axios.create({
  baseURL: MOVIE_DB_API_BASE_URL,
});

const getListing = async (endpoint, type, page = 1, query = null) => {
  try {
    const url = buildURL(endpoint, type, page, query);
    const { data } = await apiRequest.get(url);
    return data;
  } catch (error) {
    console.log({ error });
  }
  return {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
};

const getDetail = async (id, type) => {
  try {
    const url = `${type.toLowerCase()}/${id}?api_key=${MOVIE_DB_API_KEY}`;
    const { data } = await apiRequest.get(url);
    return data;
  } catch (error) {
    console.log({ error });
  }
  return {};
};

export { getListing, getDetail };
