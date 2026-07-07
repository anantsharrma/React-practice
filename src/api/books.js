import axios from "axios";

const API_URL = "http://localhost:3000/books";
const api = axios.create({
  baseURL: API_URL,
});

export async function getBooks() {
  try {
    const response = await api.get("");
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }}
export async function getBookById(id) {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book with ID ${id}:`, error);
    throw error;
  }}
export async function createBook(bookData) {
  try {
    const response = await api.post("/", bookData);
    return response.data;
  } catch (error) {
    console.error("Error creating book:", error);
    throw error;
  }}
export async function updateBook(id, bookData) {
  try {
    const response = await api.put(`/${id}`, bookData);
    return response.data;
  } catch (error) {
    console.error(`Error updating book with ID ${id}:`, error);
    throw error;
  }}
export async function deleteBook(id) {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting book with ID ${id}:`, error);
    throw error;
  }}