function ProjectItem({ title, description }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-14 w-14 shrink-0 rounded-md border border-gray-500 bg-gray-50">
        <svg viewBox="0 0 56 56" className="h-full w-full text-gray-600">
          <line x1="0" y1="0" x2="56" y2="56" stroke="currentColor" />
          <line x1="56" y1="0" x2="0" y2="56" stroke="currentColor" />
        </svg>
      </div>
      <div className="min-w-0">
        <h3 className="truncate text-lg text-gray-900">{title}</h3>
        <p className="text-xs text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default ProjectItem;