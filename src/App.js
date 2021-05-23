import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";

const MOVIE_API_LIST =
  "https://api.themoviedb.org/3/movie/popular?api_key=90f0d968a7369326970f2fbe5ed0f445";

function App() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    fetch(MOVIE_API_LIST + `&language=${language}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [language, page]);

  return (
    <div className="App">
      <Header setMovies={setMovies} />
      <div className="movieContainer">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
