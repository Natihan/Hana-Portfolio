import React from "react";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return <div>No books available.</div>;
  }

  return (
    <div>
      <h1>Book List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {books.map((book) => (
          <Link to={`/book/${book.id}`} key={book.id}>
            <BookCard book={book} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookList;
