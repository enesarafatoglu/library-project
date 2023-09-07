import React, { useState, useEffect } from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import Books from "./components/Books";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Category from "./pages/Category";

function App() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({
    bookName: "",
    author: "",
    quantity: "",
    section: "",
    comments: "",
  });

  useEffect(() => {
    fetch("/books")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setBooks(jsonRes));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const addBook = (e) => {
    e.preventDefault();
    const newBook = {
      bookName: book.bookName,
      author: book.author,
      quantity: book.quantity,
      section: book.section,
      comments: book.comments,
    };
    axios.post("/newbook", newBook);
    alert(`Book ${book.bookName} added.`);
    setBook({
      bookName: "",
      author: "",
      quantity: "",
      section: "",
      comments: "",
    });
  };

  const deleteBook = (id) => {
    axios.delete("/delete/" + id);
    alert(`Book  id:${id} deleted.`);
  };
  const giveBook = (id) => {
    axios.put("/give/" + id);
    alert(`Book  id:${id} gave.`);
  };
  const bringBook = (id) => {
    axios.put("/bring/" + id);
    alert(`Book  id:${id} brought.`);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Books
                books={books}
                deleteBook={deleteBook}
                giveBook={giveBook}
                bringBook={bringBook}
              />
            }
          />
          <Route
            path="/addbook"
            element={
              <AddBook
                book={book}
                handleChange={handleChange}
                addBook={addBook}
              />
            }
          />
          <Route
            path="/category/:category"
            element={<Category books={books} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
