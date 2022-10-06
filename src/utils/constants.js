const HEADER_COLOR = "#2c3e50";
const BUTTON_COLOR = "#06b6d4";
const SELECT_COLOR = "#0c897a";

const MOVIE_DB_API_KEY = process.env.MOVIE_DB_API_KEY;
const MOVIE_DB_API_BASE_URL = "https://api.themoviedb.org/3/";
const MOVIE_DB_API_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

const MOVIE_REQUEST_TYPE = ["Now Playing", "Popular", "Top Rated", "Upcoming"];
const TV_REQUEST_TYPE = ["Airing Today", "On The Air", "Popular", "Top Rated"];
const SEARCH_REQUEST_TYPE = ["Movie", "Multi", "TV Shows"];

const ENDPOINTS = {
  movie: {
    "Now Playing": "now_playing",
    Popular: "popular",
    "Top Rated": "top_rated",
    Upcoming: "upcoming",
  },
  search: {
    Movie: "movie",
    Multi: "multi",
    "TV Shows": "tv",
  },
  tv: {
    "Airing Today": "airing_today",
    "On The Air": "on_the_air",
    Popular: "popular",
    "Top Rated": "top_rated",
  },
};

export {
  HEADER_COLOR,
  BUTTON_COLOR,
  SELECT_COLOR,
  MOVIE_DB_API_KEY,
  MOVIE_DB_API_BASE_URL,
  ENDPOINTS,
  MOVIE_REQUEST_TYPE,
  MOVIE_DB_API_IMAGE_BASE_URL,
  TV_REQUEST_TYPE,
  SEARCH_REQUEST_TYPE,
};
