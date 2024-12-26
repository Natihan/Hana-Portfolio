import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img
        src={book.cover}
        alt={`${book.title} cover`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{book.title}</h3>
        <p className="text-sm text-gray-700">
          <strong>Author:</strong> {book.authors}
        </p>
        <p className="text-sm text-gray-700">
          <strong>Publisher:</strong> {book.publisher}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
