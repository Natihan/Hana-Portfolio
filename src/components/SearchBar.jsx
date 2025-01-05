import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(""); // State for error messages

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (query.trim() === "") {
      setError("Please enter a search query."); // Show error message if query is empty
    } else {
      setError(""); // Clear error if query is valid
      onSearch(query.trim()); // Call the onSearch function passed via props
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row mb-4 gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books by title, author, or keyword"
          className="p-2 border rounded w-full sm:w-auto flex-grow"
        />
        <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Search
        </button>
      </form>
      
      {/* Display error message if query is empty */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default SearchBar;
