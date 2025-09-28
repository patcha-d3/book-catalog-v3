import { useEffect, useState } from "react";
import "./App.css";
import Book from "./book.jsx";
import data from "../data/books.json";

const CARD_COUNT = 2;

function App() {
  const [books, setBooks] = useState(data);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Catalog v2</h1>
      </header>

      <main className="content">
        <div className="content-add">
          <div className="button-add">
            <h2>Add</h2>
          </div>
        </div>

        <div className="content-books">
          {books.map((book) => (
            <Book
              key={book.isbn13}
              image={book.image}
              price={book.price}
              link={book.url}
            />
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© Pat Sricome, 2025</p>
      </footer>
    </div>
  );
}

export default App;
