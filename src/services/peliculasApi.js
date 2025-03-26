import axios from 'axios';

const apiService = axios.create({
    baseURL: 'https://api.jikan.moe/v4/', // URL base de la API de Jikan
    timeout: 10000,
});

export default apiService;