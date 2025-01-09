import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  if (!book) {
    return (
      <div className="p-4 border rounded shadow text-center">
        No book data available
      </div>
    );
  }

  // Fallback values for missing data
  const { cover, title, authors, publisher, id } = book;

  return (
    <Link
      to={`/book/${id}`}
      className="block hover:no-underline"
    >
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
        {/* Book Cover */}
        <div className="h-64 overflow-hidden rounded-t-lg">
          <img
            src={cover || "https://via.placeholder.com/150"} // Fallback image
            alt={`Cover of ${title || "Untitled"}`} // Fallback for title
            className="w-full h-full object-cover"
          />
        </div>

        {/* Book Info */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 truncate">
            {title || "Untitled"}
          </h3>
          <p className="text-sm text-gray-600 mt-2 truncate">
            <span className="font-medium">Author(s):</span>{" "}
            {authors || "Unknown Author"}
          </p>
          <p className="text-sm text-gray-600 mt-1 truncate">
            <span className="font-medium">Publisher:</span>{" "}
            {publisher || "Unknown Publisher"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
