import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Asegura que el botón esté al final */
`;

const MovieImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: fill;
`;

const CardContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Permite que el contenido crezca */
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

const DetailButton = styled.button`
  margin-top: auto; /* Empuja el botón al final */
  padding: 10px 15px;
  background-color: #ff6b01;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e65a00;
  }

  &:active {
    background-color: #cc4f00;
  }
`;

const AnimeCard = ({ title, images, onDetailClick, synopsis }) => {
  return (
    <Card>
      <MovieImage src={images.webp.image_url} alt={title} />
      <CardContent>
        <Title>{title}</Title>
        <Description>{synopsis}</Description>
        <DetailButton onClick={onDetailClick}>Ver Detalle</DetailButton>
      </CardContent>
    </Card>
  );
};

export default AnimeCard;
