import React, { ChangeEvent, FC } from "react";

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
  setCategory: (category: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ setSearchQuery, setCategory }) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <div className="mb-4 flex flex-col items-start justify-center space-y-2 rounded-lg border-2 border-white/20 bg-zinc-900 p-2 text-white shadow-md transition-colors hover:bg-zinc-800 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
      <div className="flex w-full flex-grow space-x-2">
        <input
          type="search"
          className="flex-grow rounded-md border border-white/20 bg-zinc-900 py-1 text-white placeholder-white shadow-sm focus:border-white focus:outline-none focus:ring-white"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          onChange={handleSearchChange}
        />
        <button className="hidden items-center rounded-md border border-transparent bg-white px-3 py-1 text-sm font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:inline-flex">
          Enter
        </button>
      </div>
      <div className="w-full sm:w-auto">
        <select
          id="category"
          name="category"
          className="block w-full rounded-md border border-white/20 bg-zinc-900 px-2 py-1 text-white shadow-sm focus:border-white focus:outline-none focus:ring-white sm:text-sm"
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          <option>Health and Fitness</option>
          <option>Creative and social</option>
          <option>Academics and Professional</option>
          <option>Other</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
