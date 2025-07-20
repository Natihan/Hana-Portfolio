import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6 text-gray-600">Sorry, the page you are looking for doesn't exist.</p>
      <Link to="/" className="text-blue-600 hover:underline">Go back home</Link>
    </div>
  );
};

export default NotFound;
