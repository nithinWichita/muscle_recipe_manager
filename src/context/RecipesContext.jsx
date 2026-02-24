import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { recipes as initialRecipes } from "../data/recipes";

const RecipesContext = createContext(null);

export function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);

  //  Load from localStorage on first mount
  useEffect(() => {
    const stored = localStorage.getItem("recipes");
    if (stored) {
      const parsed = JSON.parse(stored);

      // MIGRATION: add category if missing
      const migrated = parsed.map((r) => ({
        category: "Dinner", // default for old recipes
        ...r,               // keep existing fields (if r.category exists, it overwrites default)
      }));

      setRecipes(migrated);

      // optional but recommended: write back upgraded data
      localStorage.setItem("recipes", JSON.stringify(migrated));
    } else {
      setRecipes(initialRecipes);
    }
  }, []);

  // Save whenever recipes changes (after it’s loaded)
  useEffect(() => {
    if (recipes.length > 0) {
      localStorage.setItem("recipes", JSON.stringify(recipes));
    }
  }, [recipes]);
  function deleteRecipe(id) {
    setRecipes((prev) => prev.filter((r) => r.id !== id));
  }
  function updateRecipe(id, updates) {
    setRecipes((prev) =>
      prev.map((r) => (r.id === id ? { ...r, ...updates } : r))
    );
  }


  const value = useMemo(() => ({ recipes, setRecipes, deleteRecipe, updateRecipe }), [recipes]);

  return (
    <RecipesContext.Provider value={value}>
      {children}
    </RecipesContext.Provider>
  );
}

export function useRecipes() {
  const ctx = useContext(RecipesContext);
  if (!ctx) throw new Error("useRecipes must be used within RecipesProvider");
  return ctx;
}
