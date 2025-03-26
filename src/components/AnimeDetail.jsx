// AnimeDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../services/peliculasApi';
import styled from 'styled-components';

const DetailContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: #1e1e1e;
  border-radius: 10px;
`;

const AnimeDetail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimeDetail = async () => {
      try {
        const response = await apiService.get(`anime/${id}`);
        setAnime(response.data.data);
      } catch (error) {
        setError('Error al cargar los detalles del anime.');
      } finally {
        setLoading(false);
      }
    };
    fetchAnimeDetail();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <DetailContainer>
      <h1>{anime.title}</h1>
      <img src={anime.images.jpg.image_url} alt={anime.title} width="100%" />
      <p>{anime.synopsis}</p>
    </DetailContainer>
  );
};

export default AnimeDetail;