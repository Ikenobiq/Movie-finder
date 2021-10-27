import { useState } from "react";
import PropTypes from "prop-types";
const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState("");
  
    const handleChange = (e) => {
      setQuery(e.target.value);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(query);
    };
  return (
    <form onSubmit={handleSubmit}>
      <input name="query" value={query} onChange={handleChange} type="text" />
    </form>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};