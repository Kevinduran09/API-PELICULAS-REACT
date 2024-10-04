import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #121212; /* Fondo oscuro */
    color: white; /* Color de texto */
    font-family: Arial, sans-serif; /* Fuente */
  }
`;

const Header = styled.header`
  background-color: #282c34;
  padding: 20px;
  text-align: center;
  font-size: 2rem;
`;

const App = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=1b8b158a66c40fa4abbdf5e3b7ef145e&language=es-ES&page=1"
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Header>API PELÍCULAS</Header>

      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />

        <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;
