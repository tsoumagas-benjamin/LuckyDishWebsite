import { useState } from "react";

const MenuItem = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div>
      <img />
      <p>Dish Name and Price Here</p>
      <p>Dietary Tags Here</p>
      <button onclick={toggleFavorite}>
        {isFavorited ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
};

export default MenuItem;
