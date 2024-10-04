import React from "react";
import MovieCard from "./MovieCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieList = ({ movies }) => {
  const navigate = useNavigate();

  const handleMovieSelect = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <ListContainer>
      {movies.map((movie) => (
        <div
          key={movie.id}
          onClick={() => handleMovieSelect(movie.id)}
          style={{ cursor: "pointer", border: "none" }}
        >
          <MovieCard
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            description={movie.overview}
            rating={movie.vote_average}
          />
        </div>
      ))}
    </ListContainer>
  );
};

export default MovieList;
