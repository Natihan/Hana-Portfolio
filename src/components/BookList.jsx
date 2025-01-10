import React from "react";
import BookCard from "./BookCard";

/**
 * BookList component renders a list of books in a responsive grid layout.
 * It iterates over the books array and displays a `BookCard` for each book.
 * If no books are available, it shows a message prompting the user to start their search.
 * 
 * @param {Array} books - Array of book objects to display.
 * @returns {JSX.Element} A grid of `BookCard` components or a message if no books are found.
 */
const BookList = ({ books }) => {
  // If no books are found or the books array is empty, display a message
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
    // Responsive grid layout for book cards
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {books.map((book, index) => (
        // Render each book card with a unique key
        <BookCard key={book.id || index} book={book} />
      ))}
    </div>
  );
};

export default BookList;
