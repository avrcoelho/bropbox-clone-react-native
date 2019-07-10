import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-andre.herokuapp.com'
});

export default api;
