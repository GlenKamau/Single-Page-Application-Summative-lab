import { useState } from "react";

const emptyForm = { title: "", description: "" };

function ProjectForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    if (error) setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.title.trim() || !form.description.trim()) {
      setError("Please fill in both the title and the description.");
      return;
    }

    onAdd({ title: form.title.trim(), description: form.description.trim() });
    setForm(emptyForm);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-gray-400 bg-gray-100 p-5"
    >
      <h2 className="mb-4 text-xl font-semibold text-gray-900">Add Project</h2>

      <div className="mb-4">
        <label htmlFor="title" className="mb-1 block text-sm text-gray-800">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-500 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="mb-1 block text-sm text-gray-800">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={form.description}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-500 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {error && <p className="mb-3 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        className="rounded-md border border-gray-600 bg-white px-8 py-1.5 text-sm hover:bg-gray-200"
      >
        Add
      </button>
    </form>
  );
}

export default ProjectForm;