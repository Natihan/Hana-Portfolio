import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
        setBookDetails(data[bookKey]);
      } catch (err) {
        setError("Failed to fetch book details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

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
          onClick={() => window.location.reload()}
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
  } = bookDetails;

  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">{title || "Untitled"}</h1>
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
      {description && (
        <p>
          <strong>Description:</strong> {description.value || description}
        </p>
      )}
    </div>
  );
};

export default BookDetails;
