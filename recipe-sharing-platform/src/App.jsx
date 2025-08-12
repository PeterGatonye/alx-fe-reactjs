import React from "react";
import data from "./data.json";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((recipe) => (
          <div key={recipe.id} className="border rounded p-4 shadow">
            <img src={recipe.image} alt={recipe.title} className="mb-2" />
            <h2 className="text-lg font-semibold">{recipe.title}</h2>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
