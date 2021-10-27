import React from "react";
import { useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { getMovieInfo } from "../../fetch/Fetchtrending";
import {
  NavLink,
  useLocation,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
// import styles from "./MovieDetailsPage.module.css";
import { route } from "../../route";

const CastPage = lazy(() => import("./CastPage"));
const ReviewsPage = lazy(() => import("./ReviewPage"));

const MovieDetailsPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await getMovieInfo(movieId);
        setMovie(data);
      } catch (error) {}
    };
    fetchMovie();
  }, [movieId]);

  const handleBack = () => {
    if (location?.state?.from) {
      const prevLocation = location.state.from;
      history.push(prevLocation);
    } else {
      history.push(route.HOME_PAGE);
    }
  };

  const imagePath = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      {movie && (
        <>
          <button  type="button" onClick={handleBack}>
            Go back
          </button>
          <div >
            <div >
              <img
                src={imagePath + movie.poster_path}
                alt="poster"
                width="250"
              />
            </div>
            <section >
              <h2 >
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p>User Score: {movie.vote_average * 10}%</p>
              <h3 >Overview</h3>
              <span>{movie.overview}</span>
              <h3 >Genres</h3>
              <span>{movie.genres.map((genre) => genre.name).join(" ")}</span>
            </section>
          </div>
          <div>
            <h3 >Additional information</h3>
            <nav >
              <NavLink
                to={{
                  pathname: `/movies/${movieId}/credits`,
                  state: {
                    from: location.state.from,
                  },
                }}
                
              >
                Cast{" "}
              </NavLink>

              <NavLink
                to={{
                  pathname: `/movies/${movieId}/reviews`,
                  state: {
                    from: location.state.from,
                  },
                }}
                
              >
                Reviews{" "}
              </NavLink>
            </nav>
          </div>

          <Suspense>
            <Switch>
              <Route path="/movies/:id/credits">
                <CastPage />
              </Route>

              <Route path="/movies/:id/reviews">
                <ReviewsPage />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;