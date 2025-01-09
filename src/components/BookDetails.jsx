import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams(); // Extract ISBN from the route
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
      setBookDetails(data[bookKey]);
    } catch (err) {
      setError("Failed to fetch book details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Retry function for failed fetch
  const handleRetry = () => {
    setLoading(true);
    setError("");
    fetchDetails();
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <p className="text-red-500">{error}</p>
        <button
          onClick={handleRetry}
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!bookDetails) {
    return <p>No details available for this book.</p>;
  }

  const {
    title,
    authors,
    publishers,
    publish_date,
    number_of_pages,
    cover,
    description,
    subjects,
    isbn_13,  // ISBN-13, fallback for ISBN-10
  } = bookDetails;

  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      {cover && cover.large && (
        <img src={cover.large} alt={title} className="mx-auto rounded shadow mb-4" />
      )}
      <p className="text-gray-700">
        <strong>Author(s):</strong> {authors ? authors.map((a) => a.name).join(", ") : "Unknown"}
      </p>
      <p className="text-gray-700">
        <strong>Publisher(s):</strong> {publishers ? publishers.map((p) => p.name).join(", ") : "Unknown"}
      </p>
      <p className="text-gray-700">
        <strong>Published:</strong> {publish_date || "Unknown"}
      </p>
      <p className="text-gray-700">
        <strong>Pages:</strong> {number_of_pages || "Unknown"}
      </p>
      <p className="text-gray-700">
        <strong>ISBN:</strong> {isbn_13 || "Unknown"}
      </p>
      {subjects && subjects.length > 0 && (
        <p className="text-gray-700">
          <strong>Subjects:</strong> {subjects.join(", ")}
        </p>
      )}
      {description && (
        <div className="text-gray-700 mt-4">
          <strong>Description:</strong>
          <p>{description.value || "No description available."}</p>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
