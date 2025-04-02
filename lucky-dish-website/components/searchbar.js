import { useState, useRef, useEffect } from 'react';
import styles from './searchbar.module.css';

const SearchBar = ({ onRecipesFetched }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);   //suggestions from API
  const containerRef = useRef(null);    //detects click outside search bar

    //hide dropdown when you click somewhere else on page
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //fetch and display suggestions in dropdown as you type
  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    //dont search unless theres more than 3 characters
    if (value.length < 3) {
      setSuggestions([]);
      return;
    }

    //calls API route to fetch recipe suggestions
    try {
      const res = await fetch(`/api/recipes?query=${value}`);
      const data = await res.json();

      if (data.hits && Array.isArray(data.hits)) {
        setSuggestions(data.hits.map(hit => hit.recipe.title || hit.recipe.label || "Untitled"));
      } else {
        console.warn('Unexpected data format:', data);
        setSuggestions([]);
      }
    } catch (err) {
      console.error('Error fetching suggestions:', err);
      setSuggestions([]);
    }
  };

  //this runs when user clicks on a suggestion
  const handleSuggestionClick = async (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);

    //gets full recipe data from the backend
    try {
      const res = await fetch(`/api/recipes?query=${suggestion}`);
      const data = await res.json();
      if (onRecipesFetched) {   //sends recipe data back to menu page
        onRecipesFetched(data.hits || []);
      }
    } catch (err) {
      console.error('Error fetching full recipes:', err);
    }
  };

  return (
    <div className={styles.div} ref={containerRef}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul className={styles.dropdown}>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;