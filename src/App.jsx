import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooks = async (query) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
      const data = await response.json();
      const bookResults = data.docs.map((book) => ({
        id: book.key,
        cover: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "https://via.placeholder.com/150",
        title: book.title,
        authors: book.author_name ? book.author_name.join(", ") : "Unknown",
        publisher: book.publisher ? book.publisher[0] : "Unknown",
      }));
      setBooks(bookResults);
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for displaying the book list */}
          <Route
            path="/"
            element={
              <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Book Library</h1>
                <SearchBar onSearch={fetchBooks} />
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                <BookList books={books} />
              </div>
            }
          />
          {/* Route for displaying book details */}
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
