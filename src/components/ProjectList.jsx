import { useState } from "react";
import SearchBar from "./SearchBar";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();
  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term)
  );

  return (
    <section className="overflow-hidden rounded-lg border border-gray-500 bg-white">
      <SearchBar value={search} onChange={setSearch} />

      <div className="flex flex-col gap-4 p-4">
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <ProjectItem key={p.id} title={p.title} description={p.description} />
          ))
        ) : (
          <p className="text-center text-sm text-gray-500">
            No projects match your search.
          </p>
        )}
      </div>
    </section>
  );
}

export default ProjectList;