import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.69.6.26:3333' // chamar um .env aqui
});

export { api };