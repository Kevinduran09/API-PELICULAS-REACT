import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import AnimeCard from './AnimeCard';
import { useNavigate } from 'react-router-dom';

const AnimeList = () => {
  const [animes, setAnimes] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const navigate = useNavigate(); // Hook para redireccionar

  const fetchAnimes = async () => {
    try {
      const response = await axios.get('https://api.jikan.moe/v4/top/anime');
      console.log(response.data.data);
      
      setAnimes(response.data.data); 
    } catch (err) {
      // console.error(err);
      // setError('Error al cargar los animes. Recuperando desde caché...');
      
      // const cacheResponse = await caches.match('https://api.jikan.moe/v4/top/anime');
      // if (cacheResponse) {
      //   const cachedData = await cacheResponse.json();
      //   console.log(cachedData.data);
        
      //   setAnimes(cachedData.data); 
      //   setError(null); 
      // }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimes(); 
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Listado de Animes</h1>
      <div
        className="anime-list"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(250px, 1fr))',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {animes.map((anime) => (
          <AnimeCard
            key={anime.id}
            {...anime}
            onDetailClick={() => navigate(`/anime/${anime.mal_id}`)} // Redirige al detalle
          />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
