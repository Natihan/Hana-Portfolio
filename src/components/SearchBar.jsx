import React, { useState } from "react";

/**
 * SearchBar component provides an input field to search for books by title, author, or keywords.
 * It allows the user to select the search type (title, author, or keywords) and enter a search query.
 * Upon form submission, it calls the `onSearch` function passed as a prop with the query and selected search type.
 * 
 * @param {Function} onSearch - A callback function to handle the search query and search type.
 * @returns {JSX.Element} A form for searching books with input fields and a submit button.
 */
const SearchBar = ({ onSearch }) => {
  // State for the search query, search type, and error message
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("title"); // Default search by title
  const [error, setError] = useState("");

  /**
   * Handles the form submission by validating the search query and passing it to the onSearch callback.
   * @param {Event} event - The form submission event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Check if the query is empty and show an error message if true
    if (query.trim() === "") {
      setError("Please enter a search query.");
    } else {
      setError(""); // Clear any previous error messages
      onSearch(query.trim(), searchType); // Pass query and search type to onSearch callback
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Dropdown for selecting search type (Title, Author, Keywords) */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Search By</label>
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="p-2 border rounded w-full"
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="keywords">Keywords</option> {/* New Keywords Option */}
          </select>
        </div>

        {/* Input field for the search query */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Search Query</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter book title, author, or keywords..."
            className="p-2 border rounded w-full"
          />
        </div>

        {/* Search button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Search
          </button>
        </div>
      </form>

      {/* Error message displayed if there's an issue with the search query */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default SearchBar;
