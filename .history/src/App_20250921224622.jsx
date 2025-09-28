import { useEffect, useState } from "react";
import "./App.css";
import Book from "./Book.jsx";
import data from "./data/books.json";

const CARD_COUNT = 2;

function App() {
  const [books, setBooks] = useState([]);

  async function fetchBookDetails(isbn13) {
    try {
      const res = await fetch(`https://api.itbook.store/1.0/books/${isbn13}`);
      const data = await res.json();
      if (data.error && data.error !== "0") return null;
      return data;
    } catch {
      return null;
    }
  }

  async function fetchRandomNewBooks(count = CARD_COUNT) {
    try {
      const res = await fetch("https://api.itbook.store/1.0/new");
      const data = await res.json();
      const list = Array.isArray(data.books) ? data.books : [];
      if (!list.length) return;

      // สุ่ม ISBN
      const want = Math.min(count, list.length);
      const picked = new Set();
      while (picked.size < want) {
        const { isbn13 } = list[Math.floor(Math.random() * list.length)];
        picked.add(isbn13);
      }

      const details = await Promise.all(
        [...picked].map((isbn) => fetchBookDetails(isbn))
      );

      setBooks(details.filter(Boolean));
    } catch {
      console.error("Error fetching random books");
    }
  }

  useEffect(() => {
    fetchRandomNewBooks();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Catalog</h1>
      </header>

      <main className="content">
        <button
          className="button-add"
          type="button"
          onClick={() => fetchRandomNewBooks()}
        >
          <h2>Add</h2>
        </button>

        {books.map((book) => (
          <Book
            key={book.isbn13}
            image={book.image}
            title={book.title}
            author={book.authors}
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
