import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimeList from './components/AnimeList';
import AnimeDetail from './components/AnimeDetail';
import apiService from './services/peliculasApi'; 
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
      .register('/service-worker.js') 
      .then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(error => {
        console.error('Error al registrar el Service Worker:', error);
      });
  });
}


const App = () => {


  return (
    <Router>
      <GlobalStyle />
      <Header>API ANIMES</Header>
      <Routes>
        <Route path="/" element={<AnimeList />} />
        <Route path="/anime/:id" element={<AnimeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;