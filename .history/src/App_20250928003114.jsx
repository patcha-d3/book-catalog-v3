import { useEffect, useState } from "react";
import "./App.css";
import Book from "./book.jsx";
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

  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Catalog v2</h1>
      </header>

      <main className="content">
        <div className="content-add">
          <div>
            <Modal btnLabel="Add" btnClassName="button-add">
              <AddBook />
            </Modal>
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

function BookTile({ label, image, link }) {
  const background = "#f5f5f5";

  function remove(e) {
    if (e.target === e.currentTarget) {
      return; // คลิกพื้นที่ card จะไม่ลบ
    }
    if (e.target.tagName !== "SPAN") {
      return; // ให้ลบเฉพาะตอนกด <span>x</span>
    }
    e.currentTarget.remove(); // ลบการ์ดนี้ออก
  }

  return (
    <div className="book-card" style={{ background }} onClick={remove}>
      <img src={image} alt="book" />
      <p>{label}</p>
      <a href={link} target="_blank" rel="noreferrer">
        Buy now
      </a>
      <span className="btn-remove">x</span>
    </div>
  );
}

export default App;
