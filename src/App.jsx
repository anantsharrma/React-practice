import { useState, useEffect } from 'react';
import { getAllBooks } from './api/books';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllBooks()
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>My Book Library</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} ({book.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;