import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null); // Store book data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the book details from the API
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`/api/books/${id}`); // Replace with your API endpoint
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Publication Date:</strong> {new Date(book.publicationDate).toLocaleDateString()}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <p><strong>Number of Pages:</strong> {book.numberOfPages}</p>
      <p><strong>Subjects:</strong> {book.subjects.join(", ")}</p>
    </div>
  );
};

export default BookDetails;
