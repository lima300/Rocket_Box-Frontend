import axios from 'axios';

const api = axios.create({
    baseURL: "https://drive-emackers.herokuapp.com",
});

export default api;