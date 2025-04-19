import { useState } from "react";
import styles from "./MenuItem.module.css";

const MenuItem = ({ item, recipe, dietaryTags, price}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const data = recipe || item;

  if (!data) return null;

  return (
    <div className={styles.card}>
      {data.image && (
        <img className={styles.image} src={data.image} alt={data.title} />
      )}
      <div className={styles.details}>
        <h2 className={styles.title}>{data.title}</h2>

        {/*display summary from spoonacular */}
        {data.summary && (
          <div
            className={styles.summary}
            dangerouslySetInnerHTML={{ __html: data.summary }}
          />
        )}

        <p className={styles.tags}>{dietaryTags}</p>
        <p className={styles.price}>{price}</p>

        <button onClick={toggleFavorite} className={styles.favoriteBtn}>
          {isFavorited ? "Unfavorite" : "Favorite"}
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
