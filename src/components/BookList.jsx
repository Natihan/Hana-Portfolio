import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return (
      <div className="text-center mt-8">
        <p className="text-gray-500 text-lg">
          📚 No books found. Start your search to explore the library!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;
