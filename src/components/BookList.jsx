import React from "react";
import BookCard from "./BookCard";  // Import BookCard

const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return <div>No books available.</div>;
  }

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {books.map((book) => (
          <li key={book.id}>
            <BookCard book={book} />  {/* Use BookCard for each book */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
