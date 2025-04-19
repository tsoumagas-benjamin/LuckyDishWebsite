import { useState, useRef, useEffect } from "react";
import styles from "./searchbar.module.css";

const SearchBar = ({ onRecipesFetched }) => {
  const [query, setQuery] = useState(""); //user's input
  const [suggestions, setSuggestions] = useState([]); //list of titles
  const containerRef = useRef(null); //detect outside click

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
  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);
    //dont show suggestions if input is too short
    if (value.length < 3) {
      setSuggestions([]);
      return;
    }
    //make API request to get title suggestions
    try {
      const res = await fetch(
        `/api/recipes?query=${value}&mode=suggest`,
        { cache: "no-store" } //prevent caching
      );
      const data = await res.json();
      console.log("API Suggest Response:", data); //debug

      //if there are valid suggestions then updates the state
      if (data.suggestions && Array.isArray(data.suggestions)) {
        setSuggestions(data.suggestions);
      } else {
        setSuggestions([]);
      }
    } catch (err) {
      console.error("Error fetching suggestions:", err);  //error handling
      setSuggestions([]);
    }
  };

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
