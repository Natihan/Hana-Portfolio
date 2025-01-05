import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition">
      <img
        src={book.cover}
        alt={book.title}
        className="w-full max-w-sm mx-auto rounded"
      />
      <h3 className="font-bold text-lg">{book.title}</h3>
      <p className="text-gray-600">By {book.authors}</p>
      <p className="text-gray-600">Published by {book.publisher}</p>
      <Link
        to={`/book/${book.id}`}
        className="text-blue-500 hover:underline mt-2 block"
      >
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
