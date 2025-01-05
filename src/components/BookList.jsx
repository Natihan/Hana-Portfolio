import React from "react";
import BookCard from "./BookCard";  // Import BookCard

const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return <p className="text-gray-500">No books available. Try searching for something else!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
  {books.map((book) => (
    <BookCard key={book.id} book={book} />
  ))}
</div>

  );
};

export default BookList;
