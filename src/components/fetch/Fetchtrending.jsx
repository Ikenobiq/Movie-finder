import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = { api_key: "302099a3cae86a11e9b200070fd82750" };
export const fetchTrending = () => {
  return axios.get("/trending/all/day").then((response) => {
    console.log(response);
    return response.data.results;
  });
};
export const searchMovie = (query) => {
  return axios.get("/search/movie", { params: { language: "en - US", query } });
};

export const getMovieInfo = (id) => {
  return axios.get(`/movie/${id}`, {
    params: {
      language: "ru-RU",
    },
  });
};

export const getMovieCast = (id) => {
  return axios.get(`/movie/${id}/credits`, {
    params: {
      language: "ru-RU",
    },
  });
};

export const getMovieReviews = (id, page = 1) => {
  return axios.get(`/movie/${id}/reviews`, {
    params: {
      language: "en-EN",
      page,
    },
  });
};
