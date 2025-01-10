import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  if (!book) {
    return <div className="p-4 border rounded shadow">No book data available</div>;
  }

  // Fallback values for missing data
  const { cover, title, authors, publisher, id } = book;

  return (
    <Link to={`/book/${book.id}`} className="block hover:no-underline">
      <div className="p-4 border rounded shadow hover:shadow-lg hover:scale-105 transition transform duration-200">
        <img
          src={cover || "https://via.placeholder.com/150"} // Use placeholder image if cover is missing
          alt={`Cover of ${title || "Untitled"}`} // Provide fallback for missing title
          className="w-full max-w-sm mx-auto rounded mb-4"
        />
        <h3 className="font-bold text-lg text-blue-600">{title || "Untitled"}</h3>
        <p className="text-gray-600 mt-2">By {authors || "Unknown Author"}</p>
        <p className="text-gray-600 mt-1">Published by {publisher || "Unknown Publisher"}</p>
      </div>
    </Link>
  );
};

export default BookCard;
