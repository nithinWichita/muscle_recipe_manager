import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecipes } from "../context/RecipesContext";

export default function AddRecipe() {
  const { recipes, setRecipes } = useRecipes();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Dinner");


  function handleSubmit(e) {
    e.preventDefault();

    const newRecipe = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      image: image.trim() || "https://picsum.photos/seed/new/1200/800",
      category,
    };

    setRecipes([newRecipe, ...recipes]);
    navigate(`/recipes/${newRecipe.id}`);
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Add Recipe</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            className="w-full border rounded-lg px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Lemon Rice"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full border rounded-lg px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short description..."
            required
            rows={4}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Image URL (optional)</label>
          <input
            className="w-full border rounded-lg px-3 py-2"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            className="w-full border rounded-lg px-3 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
          </select>
        </div>


        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
}


