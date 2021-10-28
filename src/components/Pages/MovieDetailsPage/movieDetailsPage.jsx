import React from "react";
import { useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getMovieInfo } from "../../fetch/Fetchtrending";
import {
  NavLink,
  useLocation,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { route } from "../../Route";
import styles from "./MovieDetailsPage.module.css";

const CastPage = lazy(() => import("./CastPage/CastPage"));
const ReviewsPage = lazy(() => import("./ReviewsPage/ReviewsPage"));

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
      } catch (error) {
        console.log(error.message);
      }
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
    <main className={styles.main}>
      {movie && (
        <>
          <button className={styles.buttonn} type="button" onClick={handleBack}>
            Go back
          </button>
          <div className={styles.contentDiv}>
            <div className={styles.imgDiv}>
              <img
                src={imagePath + movie.poster_path}
                alt="poster"
                width="400"
              />
            </div>
            <section>
              <h2 className={styles.movieTitle}>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p className={styles.score}>
                User Score: {movie.vote_average * 10}%
              </p>
              <h3 className={styles.overviewTitle}>Overview:</h3>
              <p className={styles.overview}>{movie.overview}</p>
              <h3 className={styles.genresTitle}>Genres</h3>
              <span className={styles.genresList}>
                {movie.genres.map((genre) => genre.name).join(" ")}
              </span>
              <div>
                <h3 className={styles.info}>Additional information</h3>
                <nav>
                  <NavLink
                    className={styles.navLink}
                    to={{
                      pathname: `/movies/${movieId}/credits`,
                      state: {
                        from: location?.state?.from,
                      },
                    }}>
                    Cast{" "}
                  </NavLink>

                  <NavLink
                    className={styles.navLink}
                    to={{
                      pathname: `/movies/${movieId}/reviews`,
                      state: {
                        from: location?.state?.from,
                      },
                    }}>
                    Reviews{" "}
                  </NavLink>
                </nav>
              </div>
            </section>
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
    </main>
  );
};

export default MovieDetailsPage;
