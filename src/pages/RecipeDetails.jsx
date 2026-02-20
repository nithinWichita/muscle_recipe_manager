import {useNavigate,  useParams } from "react-router-dom";
import { useRecipes } from "../context/RecipesContext";

export default function RecipeDetails() {
  const { id } = useParams();
  const { recipes, deleteRecipe } = useRecipes();

  const recipe = recipes.find((r) => r.id === id);
  const navigate = useNavigate();


  if (!recipe) return <p className="text-red-500">Recipe not found.</p>;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-72 w-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "https://picsum.photos/seed/fallback/1200/800";
        }}
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
        <p className="text-gray-600">{recipe.description}</p>
        <button
          onClick={() => {
            deleteRecipe(recipe.id);
            navigate("/");
          }}
          className="mt-6 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-500"
        >
          Delete Recipe
        </button>

      </div>
    </div>
  );
}
