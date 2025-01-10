import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/**
 * BookDetails component fetches and displays detailed information about a specific book.
 * It uses the book's ISBN (passed as a route parameter) to make a request to the OpenLibrary API.
 * If the data is successfully fetched, it displays the details. If an error occurs, it provides an error message and a retry option.
 * 
 * @returns {JSX.Element} Book details or a loading/error message.
 */
const BookDetails = () => {
  const { id } = useParams(); // Retrieve the book ID from the URL parameters
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /**
   * Fetches book details from the OpenLibrary API.
   */
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://openlibrary.org/api/books?bibkeys=ISBN:${id}&format=json&jscmd=data`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch book details");
        }

        const data = await response.json();
        const bookKey = `ISBN:${id}`;
        setBookDetails(data[bookKey]); // Set the fetched book details in state
      } catch (err) {
        setError("Failed to fetch book details. Please try again.");
      } finally {
        setLoading(false); // Mark the loading state as complete
      }
    };

    fetchDetails();
  }, [id]); // Refetch if the ID parameter changes

  // Loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Error state
  if (error) {
    return (
      <div>
        <p className="text-red-500">{error}</p>
        <button
          onClick={() => window.location.reload()} // Reload to retry
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  // No details found for this book
  if (!bookDetails) {
    return <p>No details available for this book.</p>;
  }

  // Destructure book details for easy access
  const {
    title,
    authors,
    publishers,
    publish_date,
    number_of_pages,
    cover,
    description,
    subjects,
  } = bookDetails;

  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">{title || "Untitled"}</h1>
      {/* Display cover image if available */}
      {cover && cover.large && (
        <img
          src={cover.large}
          alt={title}
          className="mx-auto rounded shadow mb-4"
        />
      )}
      <p>
        <strong>Authors:</strong>{" "}
        {authors ? authors.map((a) => a.name).join(", ") : "Unknown"}
      </p>
      <p>
        <strong>Publishers:</strong>{" "}
        {publishers ? publishers.map((p) => p.name).join(", ") : "Unknown"}
      </p>
      <p>
        <strong>Published:</strong> {publish_date || "Unknown"}
      </p>
      <p>
        <strong>Pages:</strong> {number_of_pages || "N/A"}
      </p>
      <p>
        <strong>Subjects:</strong>{" "}
        {subjects ? subjects.map((s) => s.name).join(", ") : "N/A"}
      </p>
      {/* Display description if available */}
      {description && (
        <p>
          <strong>Description:</strong> {description.value || description}
        </p>
      )}
    </div>
  );
};

export default BookDetails;
