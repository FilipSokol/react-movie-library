import React from "react";
import imdb from "../icons/imdb.svg";
import filmweb from "../icons/filmweb.svg";

const MOVIE_API_IMAGES = "https://image.tmdb.org/t/p/w500";

const Movie = ({ title, poster_path, vote_average, overview }) => {
  return (
    <div className="Movie">
      <div className="movieDescription">
        <div className="filmwebButton">
          <a
            href={"https://www.filmweb.pl/search?q=" + title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={filmweb} alt="filmweb"></img>
          </a>
        </div>
        <div className="imdbButton">
          <a
            href={"https://www.imdb.com/find?q=" + title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imdb} alt="imdb"></img>
          </a>
        </div>
        {overview.length < 500 ? overview : overview.slice(0, 500) + "..."}
      </div>

      <div
        className="scoreBadge"
        style={{
          backgroundColor: vote_average > 6.5 ? "#0abe8e" : "#f72585",
        }}
      >
        {vote_average}
      </div>
      <div className="watchlistBadge">
        <i className="gg-eye" style={{ color: "white" }}></i>
      </div>
      <img
        src={
          poster_path != null
            ? MOVIE_API_IMAGES + poster_path
            : "https://i.imgur.com/nxArlzv.jpg"
        }
        alt={title}
      ></img>

      <div
        className="movieInfo"
        style={{ fontSize: title.length > 25 ? "0.8rem" : "1rem" }}
      >
        <h3>{title}</h3>
      </div>
    </div>
  );
};
export default Movie;
