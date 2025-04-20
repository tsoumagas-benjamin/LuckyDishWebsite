import { useState, useRef, useEffect } from "react";
import styles from "./searchbar.module.css";

const SearchBar = ({ onRecipesFetched }) => {
  const [query, setQuery] = useState(""); //user's input
  const [suggestions, setSuggestions] = useState([]); //list of titles
  const containerRef = useRef(null); //detect outside click
  const debounceTimeout = useRef(null); // API limitation lazy load

  //close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //fetch recipe titles as user types
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Debounce method calling
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // Debounced fetch after 750 ms of no typing
    debounceTimeout.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/recipes?query=${value}&mode=suggest`, {
          cache: "no-store",
        });
        const data = await res.json();
        if (data.suggestions && Array.isArray(data.suggestions)) {
          setSuggestions(data.suggestions);
        } else {
          setSuggestions([]);
        }
      } catch (err) {
        console.error("Error fetching suggestions:", err);
        setSuggestions([]);
      }
    }, 750); // Delay in ms
  };

  //dont show suggestions if input is too short
  if (value.length < 3) {
    setSuggestions([]);
    return;
  }

  //fetch full recipe data when a suggestion is clicked
  const handleSuggestionClick = async (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);

    try {
      const res = await fetch(`/api/recipes?query=${suggestion}`);
      const data = await res.json();

      if (onRecipesFetched) {
        onRecipesFetched(data.hits || []);
      }
    } catch (err) {
      console.error("Error fetching full recipe:", err);
    }
  };

  return (
    <div className={styles.div} ref={containerRef}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search..."
        value={query}
        onChange={handleInputChange} //fetches suggestions while typing
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
