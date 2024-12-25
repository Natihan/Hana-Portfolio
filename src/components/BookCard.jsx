import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="p-4 border rounded shadow">
      <img
        src={book.cover}
        alt={book.title}
        className="w-full h-40 object-cover mb-2"
      />
      <h3 className="font-semibold">{book.title}</h3>
      <p className="text-gray-600">Author(s): {book.authors}</p>
      <p className="text-gray-600">Publisher: {book.publisher}</p>
    </div>
  );
};

export default BookCard;
