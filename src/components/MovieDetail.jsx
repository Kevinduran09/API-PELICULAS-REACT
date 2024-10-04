import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
`;

const MovieDetail = ({ movies }) => {
  const { id } = useParams();

  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <p>Película no encontrada</p>;
  }

  return (
    <DetailContainer>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>⭐ {movie.vote_average}/10</p>
      </div>
    </DetailContainer>
  );
};

export default MovieDetail;
