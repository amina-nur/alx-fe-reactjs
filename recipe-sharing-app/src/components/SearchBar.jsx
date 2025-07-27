import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      className="p-2 border rounded w-full mb-4"
      onChange={(event) => setSearchTerm(event.target.value)}
    />
  );
};

export default SearchBar;
