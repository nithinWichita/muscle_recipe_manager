import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipes/${recipe.id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{recipe.title}</h2>
          <p className="text-gray-600 text-sm mt-1">
            {recipe.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
