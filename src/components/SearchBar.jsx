import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (query.trim() !== "") {
      onSearch(query.trim()); // Call the onSearch function passed via props
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books by title, author, or keyword"
        className="p-2 w-full border rounded"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
