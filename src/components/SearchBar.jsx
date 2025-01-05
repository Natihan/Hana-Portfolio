import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("title"); // State for search type
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      setError("Please enter a search query.");
    } else {
      setError("");
      onSearch(query.trim(), searchType); // Pass query and search type to onSearch
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row mb-4 gap-2 items-center">
        {/* Dropdown for Search Type */}
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="p-2 border rounded bg-white w-full sm:w-auto"
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>

        {/* Input Field */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books"
          className="p-2 border rounded w-full sm:w-auto flex-grow"
        />

        {/* Search Button */}
        <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Search
        </button>
      </form>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default SearchBar;
