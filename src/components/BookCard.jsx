import React from "react";
import { Link } from "react-router-dom";

/**
 * BookCard component displays individual book details such as cover image, title, authors, and publisher.
 * It is wrapped in a Link to allow navigation to a detailed view of the book.
 * 
 * @param {Object} book - The book object containing book details (cover, title, authors, publisher, id).
 * @returns {JSX.Element} A styled card for the book with a link to its details page.
 */
const BookCard = ({ book }) => {
  // Return a placeholder if no book data is provided
  if (!book) {
    return <div className="p-4 border rounded shadow">No book data available</div>;
  }

  // Destructure the necessary fields from the book object, providing fallback values when necessary
  const { cover, title, authors, publisher, id } = book;

  return (
    <Link to={`/book/${id}`} className="block hover:no-underline">
      <div className="p-4 border rounded shadow hover:shadow-lg hover:scale-105 transition transform duration-200">
        {/* Book Cover Image */}
        <img
          src={cover || "https://via.placeholder.com/150"} // Use a placeholder if the cover is missing
          alt={`Cover of ${title || "Untitled"}`} // Provide a fallback alt text if the title is missing
          className="w-full max-w-sm mx-auto rounded mb-4"
        />
        {/* Book Title */}
        <h3 className="font-bold text-lg text-blue-600">{title || "Untitled"}</h3>
        {/* Book Author */}
        <p className="text-gray-600 mt-2">By {authors || "Unknown Author"}</p>
        {/* Book Publisher */}
        <p className="text-gray-600 mt-1">Published by {publisher || "Unknown Publisher"}</p>
      </div>
    </Link>
  );
};

export default BookCard;
