import RecipeCard from "../components/RecipeCard";
import { useRecipes } from "../context/RecipesContext";
import { useMemo, useState } from "react";

export default function Home() {
  const { recipes } = useRecipes();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      const matchesQuery =
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.description.toLowerCase().includes(query.toLowerCase());

      const matchesCategory = category === "All" || r.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [recipes, query, category]);



  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">All Recipes</h1>
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          className="border rounded-lg px-3 py-2 w-full"
          placeholder="Search recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          className="border rounded-lg px-3 py-2 md:w-48"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>
      </div>


      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
