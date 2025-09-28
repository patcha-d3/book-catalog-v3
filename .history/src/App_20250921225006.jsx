import { useEffect, useState } from "react";
import "./App.css";
import Book from "./Book.jsx";
import data from "../data/books.json";

const CARD_COUNT = 2;

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Catalog v2</h1>
      </header>

      <main className="content">
        {books.map((book) => (
          <Book
            key={book.isbn13}
            image={book.image}
            title={book.title}
            author={book.subtitle}
            link={book.url}
          />
        ))}
      </main>

      <footer className="footer">
        <p>© Pat Sricome, 2025</p>
      </footer>
    </div>
  );
}

export default App;
