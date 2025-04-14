import { useState } from "react";
import styles from "./MenuItem.module.css";
import Link from "next/link";

const MenuItem = ({ item }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  // Link to Link module attempt to route from menu id to menuitem for searchbar (potential fix for API)
  return (
    <div>
      <Link href={`/menu/${item.id}`}>
        <a>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
        </a>
      </Link>

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
