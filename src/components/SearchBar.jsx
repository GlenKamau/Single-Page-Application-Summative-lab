function SearchBar({ value, onChange }) {
  return (
    <div className="border-b border-gray-400 bg-gray-50 p-2">
      <input
        type="text"
        placeholder="Search Projects"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-gray-600 bg-white px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>
  );
}

export default SearchBar;