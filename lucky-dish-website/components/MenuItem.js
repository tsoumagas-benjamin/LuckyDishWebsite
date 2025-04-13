import { useState } from "react";
import styles from "./MenuItem.module.css";

const MenuItem = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div>
      <img />
      <span className={styles.name}>Dish Name</span>
      <span className={styles.price}>Dish Price</span>
      <p className={styles.tags}>Dietary Tags Here</p>
      <button onclick={toggleFavorite}>
        {isFavorited ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
};

export default MenuItem;
