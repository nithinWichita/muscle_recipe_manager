import { useNavigate, useParams } from "react-router-dom";
import { useRecipes } from "../context/RecipesContext";
import RecipeForm from "../components/RecipeForm";

export default function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipes();

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) return <p className="text-red-500">Recipe not found.</p>;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Edit Recipe</h1>

      <RecipeForm
        initialValues={recipe}
        submitLabel="Update Recipe"
        onSubmit={(updates) => {
          updateRecipe(id, updates);
          navigate(`/recipes/${id}`);
        }}
      />
    </div>
  );
}

