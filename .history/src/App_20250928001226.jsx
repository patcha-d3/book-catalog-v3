import { useEffect, useState } from "react";
import "./App.css";
import Book from "./book.jsx";
import data from "../data/books.json";
import Modal from "./components/Modal.jsx";
import AddBook from "../AddBook.jsx";

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

export default App;
