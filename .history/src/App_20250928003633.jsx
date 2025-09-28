import { useEffect, useState } from "react";
import "./App.css";
import data from "../data/books.json";
import Modal from "./components/modal.jsx";
import AddBook from "./components/addbook.jsx";

const CARD_COUNT = 2;

function App() {
  const [books, setBooks] = useState(data);

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // ฟังก์ชันลบหนังสือจาก state
  const removeBook = (isbn13) => {
    setBooks((prev) => prev.filter((book) => book.isbn13 !== isbn13));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Catalog v2</h1>
      </header>

      <main className="content">
        <div className="content-add">
          <Modal btnLabel="Add" btnClassName="button-add">
            <AddBook />
          </Modal>
        </div>

        {/* ใช้ BookTile ที่รวม className="content-books" */}
        <BookTile books={books} onRemove={removeBook} />
      </main>

      <footer className="footer">
        <p>© Pat Sricome, 2025</p>
      </footer>
    </div>
  );
}

function BookTile({ books, onRemove }) {
  return (
    <div className="content-books">
      {books.map((book) => (
        <div key={book.isbn13} className="book-card">
          <img src={book.image} alt="book" />
          <p>{book.price}</p>
          <a href={book.url} target="_blank" rel="noreferrer">
            Buy now
          </a>
          {/* ปุ่ม x */}
          <span className="btn-remove" onClick={() => onRemove(book.isbn13)}>
            x
          </span>
        </div>
      ))}
    </div>
  );
}

export default App;
