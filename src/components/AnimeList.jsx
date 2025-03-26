import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Usamos Axios para hacer las peticiones a la API

const App = () => {
  const [animes, setAnimes] = useState([]); // Estado para almacenar los animes
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  const fetchAnimes = async () => {
    try {
      const response = await axios.get('https://api.jikan.moe/v4/top/animy');
      console.log(response.data.data);
      
      setAnimes(response.data.data); // Actualiza el estado con los datos de la API
    } catch (err) {
      console.error(err);
      setError('Error al cargar los animes. Recuperando desde caché...');

      // Si hay un error, intenta obtener los datos de la caché
      const cacheResponse = await caches.match('https://api.jikan.moe/v4/top/anime');
      if (cacheResponse) {
        const cachedData = await cacheResponse.json();
        console.log(cachedData.data);
        
        setAnimes(cachedData.data); // Establece los datos en el estado desde la caché
        setError(null); // Elimina el mensaje de error
      }
    } finally {
      setLoading(false); // Termina el estado de carga
    }
  };

  useEffect(() => {
    fetchAnimes(); // Llamamos a la función cuando el componente se monta
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Listado de Animes</h1>
      <div className="anime-list">
        {animes.map((anime) => (
          <div key={anime.mal_id} className="anime-item">
            <img src={anime.images.webp.image_url} alt={anime.title} />
            <h2>{anime.title}</h2>
            <p>{anime.synopsis}</p>
            <a href={`/anime/${anime.mal_id}`}>Ver detalles</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
