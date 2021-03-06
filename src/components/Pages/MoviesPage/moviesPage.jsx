import { useHistory, useLocation } from "react-router-dom";
import SearchForm from "../../clients/SearchForm";
import MovieList from "../../clients/MovieList";
import { useState } from "react";
import { useEffect } from "react";
import { searchMovies } from "../../fetch/Fetchtrending";

const MoviesPage = () => {
  const [list, setList] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const onSubmit = (query) => {
    history.push({
      pathname: location.pathname,
      search: `query=${query}`,
    });
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const searchText = searchParams.get("query");
        console.log(searchText);
        const { data } = await searchMovies(searchText);
        setList(data.results);
      } catch (error) {}
    };
    if (location.search) {
      fetchMovies();
    }
  }, [location.search]);

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      <MovieList list={list} />
    </>
  );
};

export default MoviesPage;
