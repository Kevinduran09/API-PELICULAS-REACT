import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimeList from './components/AnimeList';
import AnimeDetail from './components/AnimeDetail';
import apiService from './services/peliculasApi'; // Instancia de Axios para Jikan
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #121212;
    color: white;
    font-family: Arial, sans-serif;
  }
`;

const Header = styled.header`
  background-color: #282c34;
  padding: 20px;
  text-align: center;
  font-size: 2rem;
`;


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js') // Asegúrate de que la ruta sea correcta
      .then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(error => {
        console.error('Error al registrar el Service Worker:', error);
      });
  });
}


const App = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAnimes = async () => {
    try {
      const response = await apiService.get('top/anime'); // Jikan API
      setAnimes(response.data.data);
    } catch (error) {
      setError('Error al cargar los animes.');
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
    <Router>
      <GlobalStyle />
      <Header>API ANIMES</Header>
      <Routes>
        <Route path="/" element={<AnimeList animes={animes} />} />
        <Route path="/anime/:id" element={<AnimeDetail animes={animes} />} />
      </Routes>
    </Router>
  );
};

export default App;