import React from "react";
import { Link } from "react-router-dom";

const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return <div>No books available.</div>;
  }

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ marginBottom: "20px" }}>
            <Link to={`/book/${book.id}`}>
              <h3>{book.title}</h3>
            </Link>
            <p><strong>Author:</strong> {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
