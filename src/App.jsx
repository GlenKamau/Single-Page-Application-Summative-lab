import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const initialProjects = [
  { id: 1, title: "Brand Identity Redesign", description: "Logo, colors and guidelines for a coffee brand." },
  { id: 2, title: "Mobile Banking App", description: "UI design and prototype for a fintech startup." },
  { id: 3, title: "Portfolio Website", description: "Responsive site for a photography studio." },
];

function App() {
  const [projects, setProjects] = useState(initialProjects);

  function addProject(newProject) {
    setProjects([{ id: Date.now(), ...newProject }, ...projects]);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto grid max-w-5xl gap-6 px-4 py-6 lg:grid-cols-2 lg:items-start">
        <ProjectForm onAdd={addProject} />
        <ProjectList projects={projects} />
      </main>
    </div>
  );
}

export default App;