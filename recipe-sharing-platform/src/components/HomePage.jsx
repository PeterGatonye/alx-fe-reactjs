import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Recipe List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Example Recipe Card */}
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Sample Recipe</h2>
          <p className="text-gray-600 mb-2">Short description...</p>
          <Link to="/recipe/1" className="text-blue-500 underline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
