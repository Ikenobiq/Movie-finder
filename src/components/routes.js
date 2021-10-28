import { Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { route } from "./Route";
const HomePage = lazy(() => import("../components/Pages/homePage/HomePage"));
const MoviesPage = lazy(() =>
  import("../components/Pages/MoviesPage/moviesPage")
);
const MovieDetailsPage = lazy(() =>
  import("./Pages/MovieDetailsPage/movieDetailsPage")
);
const NotFound = lazy(() => import("./Pages/notFound/notFound"));

const Routes = () => {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <Switch>
        <Route path={route.HOME_PAGE} exact>
          <HomePage title="Home Page" />
        </Route>
        <Route path={route.MOVIES_PAGE} exact>
          <MoviesPage title="Movies Page" />
        </Route>
        <Route path={route.MOVIE_DETAILS_PAGE}>
          <MovieDetailsPage title="Movie Details Page" />
        </Route>
        <Route>
          <NotFound title="Not Found" />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
