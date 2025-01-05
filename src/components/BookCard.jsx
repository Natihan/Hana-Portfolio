import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link to={`/book/${book.id}`} className="block hover:no-underline">
      <div className="p-4 border rounded shadow hover:shadow-lg hover:scale-105 transition transform duration-200">
        <img
          src={book.cover}
          alt={`Cover of ${book.title}`}
          className="w-full max-w-sm mx-auto rounded mb-4"
        />
        <h3 className="font-bold text-lg text-blue-600">{book.title}</h3>
        <p className="text-gray-600 mt-2">By {book.authors || "Unknown Author"}</p>
        <p className="text-gray-600 mt-1">Published by {book.publisher || "Unknown Publisher"}</p>
      </div>
    </Link>
  );
};

export default BookCard;
