import RecipeCard from "../components/RecipeCard";
import { useRecipes } from "../context/RecipesContext";

export default function Home() {
  const { recipes } = useRecipes();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">All Recipes</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
