import { useState } from "react";

export default function RecipeForm({
  initialValues,
  onSubmit,
  submitLabel = "Save",
}) {
  const [title, setTitle] = useState(initialValues.title || "");
  const [description, setDescription] = useState(initialValues.description || "");
  const [image, setImage] = useState(initialValues.image || "");
  const [category, setCategory] = useState(initialValues.category || "Dinner");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      image: image.trim() || "https://picsum.photos/seed/new/1200/800",
      category,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          className="w-full border rounded-lg px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          className="w-full border rounded-lg px-3 py-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          required
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
        {submitLabel}
      </button>
    </form>
  );
}
