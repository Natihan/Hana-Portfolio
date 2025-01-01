import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <img
        src={book.cover}
        alt={book.title}
        className="w-full h-64 object-cover mb-4"
      />
      <h3 className="font-semibold text-lg">{book.title}</h3>
      <p><strong>Author:</strong> {book.authors}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
      <Link to={`/book/${book.id}`} className="text-blue-500">
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
