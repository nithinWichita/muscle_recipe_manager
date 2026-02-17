import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { recipes as initialRecipes } from "../data/recipes";

const RecipesContext = createContext(null);

export function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);

  //  Load from localStorage on first mount
  useEffect(() => {
    const stored = localStorage.getItem("recipes");
    if (stored) {
      setRecipes(JSON.parse(stored));
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

  const value = useMemo(() => ({ recipes, setRecipes }), [recipes]);

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
