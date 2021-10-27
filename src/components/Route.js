import { Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { routes } from "./routes";
const HomePage = lazy(() => import("../components/Pages/homePage"));
const MoviesPage = lazy(() => import("../components/Pages/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./Pages/MovieDetailsPage/movieDetailsPage")
);
// const NotFoundPage = lazy(() => import("./Pages/NotFoundPage/NotFoundPage"));

const Routes = () => {
  return (
    <Suspense>
      <Switch>
        <Route path={routes.HOME_PAGE} exact>
          <HomePage title="Home Page" />
        </Route>
        <Route path={routes.MOVIES_PAGE} exact>
          <MoviesPage title="Movies Page" />
        </Route>
        <Route path={routes.MOVIE_DETAILS_PAGE}>
          <MovieDetailsPage title="Movie Details Page" />
        </Route>
        {/* <Route>
          <NotFoundPage title="Not Found Page" />
        </Route> */}
      </Switch>
    </Suspense>
  );
};

export default Routes;
