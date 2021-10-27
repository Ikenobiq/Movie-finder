import { NavLink } from "react-router-dom";
import { route } from "../route";

const Navigation = () => (
  <nav>
    <NavLink exact to={route.HOME_PAGE}>
      Home
    </NavLink>
    <NavLink exact to={route.MOVIES_PAGE}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;