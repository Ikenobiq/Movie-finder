import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const MovieList = ({ list }) => {
  const location = useLocation();
  const movieElements = list.map((item) => (
    <li  key={item.id}>
      <Link
        to={{
          pathname: `/movies/${item.id}`,
          state: {
            from: location,
          },
        }}
        
      >
        {item.original_title ? item.original_title : item.original_name}
      </Link>
    </li>
  ));
  return <ul>{movieElements}</ul>;
};

export default MovieList;

MovieList.defaultProps = {
  list: [],
};

MovieList.propTypes = {
  list: PropTypes.array,
};