import React, { useState } from "react";
import { fetchBooks } from "./services/bookService";
import { login, logout, register } from "./services/authService";
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFetchBooks = async () => {
    try {
      const data = await fetchBooks();
      setBooks(data);
    }
    catch (err) {
      console.error("Error fetching books:", err);
    };
  }

  const handleLogin = () => {
    login("hadar", "1234");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Book Site</h1>
      <button onClick={handleFetchBooks}>Get books</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={register}>Register</button>

      {isLoggedIn && (
        <div className="book-list">
          {books.map((book, index) => (
            <div key={index} className="book-card">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
