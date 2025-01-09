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
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Dropdown for Search Type */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Search By  </label>
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="p-2 border rounded w-full"
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
        </div> <br />

        {/* Input Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Search Query </label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter book title or author..."
            className="p-2 border rounded w-full"
          />
        </div> <br />

        {/* Search Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Search
          </button>
        </div>
      </form>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default SearchBar;
