import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  color: #fff;
  background-color: #121212;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Synopsis = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 20px 0;
`;

const Info = styled.div`
  margin: 20px 0;
  font-size: 1rem;
  color: #ccc;
`;

const Trailer = styled.div`
  
  iframe {
    width: 100%;
    max-width: 800px;
    height: 450px;
    border: none;
    border-radius: 10px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  max-width: 400px;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const RightSection = styled.div`
  flex: 2;
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const AnimeDetail = () => {
  const { id } = useParams(); // Recupera el id de la ruta
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeDetail = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        setAnime(response.data.data);
      } catch (error) {
        console.error('Error al cargar el detalle del anime:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeDetail();
  }, [id]);

  if (loading) {
    return <Container>Cargando detalle...</Container>;
  }

  if (!anime) {
    return <Container>Error al cargar el detalle del anime.</Container>;
  }

  return (
    <Container>
      <Title>{anime.title}</Title>
      <ContentWrapper>
        <LeftSection>
          <Image src={anime.images.jpg.large_image_url} alt={anime.title} />
        </LeftSection>
        <RightSection>
          {anime.trailer.embed_url && (
            <Trailer>
              <iframe
                src={anime.trailer.embed_url}
                title="Anime Trailer"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </Trailer>
          )}
        </RightSection>
      </ContentWrapper>
      <Info>
        <p><strong>Tipo:</strong> {anime.type}</p>
        <p><strong>Episodios:</strong> {anime.episodes}</p>
        <p><strong>Duración:</strong> {anime.duration}</p>
        <p><strong>Calificación:</strong> {anime.rating}</p>
        <p><strong>Puntaje:</strong> {anime.score} ({anime.scored_by} usuarios)</p>
        <p><strong>Popularidad:</strong> #{anime.popularity}</p>
      </Info>
      <Synopsis>{anime.synopsis}</Synopsis>
    </Container>
  );
};

export default AnimeDetail;
