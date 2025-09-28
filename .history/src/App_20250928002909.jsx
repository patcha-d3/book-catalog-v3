import { useEffect, useState } from "react";
import "./App.css";
import data from "../data/books.json";

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
        <div className="content-books">
          {books.map((book) => (
            <BookTile
              key={book.isbn13}
              label={book.price}
              image={book.image}
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
