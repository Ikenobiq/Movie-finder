import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MovieList.module.css";

const MovieList = ({ list }) => {
  const location = useLocation();
  const movieElements = list.map((item) => (
    <li className={styles.item} key={item.id}>
      <Link
        className={styles.link}
        to={{
          pathname: `/movies/${item.id}`,
          state: {
            from: location,
          },
        }}>
        {item.original_title ? item.original_title : item.original_name}
      </Link>
    </li>
  ));
  return <ul className={styles.list}>{movieElements}</ul>;
};

export default MovieList;

MovieList.defaultProps = {
  list: [],
};

MovieList.propTypes = {
  list: PropTypes.array,
};
