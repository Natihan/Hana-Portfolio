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
  const [noResults, setNoResults] = useState(false);

  const fetchBooks = async (query, searchType = "title") => {
    setLoading(true);
    setError("");
    setNoResults(false);

    if (!query.trim()) {
      setError("Please enter a valid search query.");
      setLoading(false);
      return;
    }

    try {
      const endpoint =
        searchType === "author"
          ? `https://openlibrary.org/search.json?author=${query}`
          : `https://openlibrary.org/search.json?title=${query}`;
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.docs.length === 0) {
        setNoResults(true);
        setBooks([]);
      } else {
        const bookResults = data.docs.map((book) => ({
          id: book.isbn ? book.isbn[0] : book.key,
          cover: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "https://via.placeholder.com/150",
          title: book.title,
          authors: book.author_name ? book.author_name.join(", ") : "Unknown",
          publisher: book.publisher ? book.publisher[0] : "Unknown",
        }));
        setBooks(bookResults);
      }
    } catch (err) {
      setError(
        "Failed to fetch books. Please check your network connection or try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="App bg-gradient-to-b from-blue-100 via-white to-blue-50 min-h-screen">
        {/* Header */}
        <header className="bg-blue-600 text-white py-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center tracking-wide">
            📚 Book Library
          </h1>
          <p className="text-center mt-3 text-lg font-medium">
            Discover your next favorite book!
          </p>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-10 space-y-12">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-center space-y-12">
                  {/* Search Bar */}
                  <SearchBar onSearch={fetchBooks} />

                  {/* Loading Spinner */}
                  {loading && (
                    <div className="flex flex-col justify-center items-center mt-6">
                      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mb-4"></div>
                      <p className="mt-4 text-blue-500 font-medium text-xl">
                        Searching for books...
                      </p>
                    </div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-100 text-red-600 px-6 py-4 mt-6 rounded-lg shadow-md inline-block text-lg">
                      ⚠️ {error}
                    </div>
                  )}

                  {/* No Results Message */}
                  {noResults && (
                    <div className="bg-gray-100 text-gray-600 px-6 py-4 mt-6 rounded-lg shadow-md inline-block text-lg">
                      🔍 No books found for your search. Try another keyword.
                    </div>
                  )}

                  {/* Default Message */}
                  {!loading && !error && books.length === 0 && !noResults && (
                    <p className="text-gray-500 mt-6 text-lg">
                      Start by searching for books using the search bar above.
                    </p>
                  )}

                  {/* Book List */}
                  {!loading && !error && !noResults && books.length > 0 && (
                    <BookList books={books} />
                  )}
                </div>
              }
            />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-blue-600 text-white py-6 text-center">
          <p className="text-sm font-medium">
            © 2025 Book Library. Built with ❤️ by{" "}
            <a
              href="https://github.com/Natihan"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300"
            >
              Natnael
            </a>
            .
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
