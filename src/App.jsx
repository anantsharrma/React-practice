import { useState, useEffect } from "react";
import { getBooks } from "./api/books";
import Card from "./components/Card";

function App() {

    const [books, setBooks] = useState([]);

    useEffect(() => {

        const fetchBooks = async () => {
            const data = await getBooks();
            setBooks(data);
        };

        fetchBooks();

    }, []);

    return (
        <div className="parent">

            {books.map((book) => (
              console.log(book),
                <Card
                    key={book.id}
                    book={book}
                />
            ))}

        </div>
    );
}
export default App;