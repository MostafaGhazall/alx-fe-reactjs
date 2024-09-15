import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => {
        const recipeDetail = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(recipeDetail);
      })
      .catch((error) => console.error('Error fetching recipe data:', error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-6 rounded-lg shadow-md" />
      <p className="text-gray-600 mb-4">{recipe.summary}</p>
      <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
      <ul className="list-disc list-inside mb-6">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
      <ol className="list-decimal list-inside space-y-2">
        {recipe.instructions?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;