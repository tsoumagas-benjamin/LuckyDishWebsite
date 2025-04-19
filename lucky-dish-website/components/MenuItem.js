import { useState } from "react";
import styles from "./MenuItem.module.css";

//define menuitem component
const MenuItem = ({ item, recipe }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  //use recipe or item, whatever is available 
  const data = recipe || item;
  //return nothing if no data
  if (!data) return null;

  //array to store dietary tags 
  const dietaryTags = [];
  if (data.vegetarian) dietaryTags.push("Vegetarian");
  if (data.vegan) dietaryTags.push("Vegan");
  if (data.glutenFree) dietaryTags.push("Gluten-Free");
  if (data.dairyFree) dietaryTags.push("Dairy-Free");
  if (data.veryHealthy) dietaryTags.push("Very Healthy");

  //format price per serving
  const price = data.pricePerServing
    ? `$${(data.pricePerServing / 100).toFixed(2)}`
    : "Price not available";

  return (
    <div className={styles.card}>
      {data.image && (
        <img className={styles.image} src={data.image} alt={data.title} />
      )}
      <div className={styles.details}>
        <h2 className={styles.title}>{data.title}</h2>

        {/* Summary or fallback */}
        {data.summary ? (
          <div
            className={styles.summary}
            dangerouslySetInnerHTML={{ __html: data.summary }}
          />
        ) : (
          <p className={styles.summary}>No description available for this recipe.</p>
        )}

        {/* Dietary tags */}
        <p className={styles.tags}>
          {dietaryTags.length > 0 ? dietaryTags.join(", ") : "No dietary tags available"}
        </p>

        {/* Price */}
        <p className={styles.price}>{price}</p>

        {/* Favorite button */}
        <button onClick={toggleFavorite} className={styles.favoriteBtn}>
          {isFavorited ? "Unfavorite" : "Favorite"}
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
