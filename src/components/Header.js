import React, { useState } from "react";

const MOVIE_API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=90f0d968a7369326970f2fbe5ed0f445&query=";

const Header = ({ setMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSumbit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      fetch(MOVIE_API_SEARCH + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
    setSearchTerm("");
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="Header">
      <div className="watchlistIcon">
        <button>
          <i className="gg-film"></i>
        </button>
      </div>
      <form onSubmit={handleOnSumbit}>
        <input
          className="search"
          type="search"
          placeholder="🔍"
          onChange={handleOnChange}
          value={searchTerm}
        />
      </form>
    </div>
  );
};
export default Header;
