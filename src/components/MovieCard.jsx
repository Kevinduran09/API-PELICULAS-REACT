import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 20px;
  overflow: hidden;
`;

const MovieImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: fill;
`;

const CardContent = styled.div`
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Rating = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #ff6b01;
  margin-top: 10px;
`;

const MovieCard = ({ image, title, description, rating }) => {
  return (
    <Card>
      <MovieImage src={image} alt={title} />
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Rating>⭐ {rating}/10</Rating>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
