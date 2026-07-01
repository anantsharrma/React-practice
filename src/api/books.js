import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export function getAllBooks() {
  return api.get('/books').then((res) => res.data);
}