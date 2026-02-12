import { useParams } from "react-router-dom";

export default function RecipeDetails() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Recipe Details</h1>
      <p className="text-gray-600">Recipe ID: {id}</p>
    </div>
  );
}
