import { NavLink } from "react-router-dom";
import { route } from "../Route";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav className={styles.nav}>
    <NavLink className={styles.home} exact to={route.HOME_PAGE}>
      Home
    </NavLink>
    <NavLink className={styles.movies} exact to={route.MOVIES_PAGE}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
