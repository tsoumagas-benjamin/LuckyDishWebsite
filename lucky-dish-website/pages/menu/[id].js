import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/RecipePage.module.css";

const RecipeDetail = () => {
  const router = useRouter();
  const { id } = router.query; // grabs the ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch recipe
      fetch(`/api/recipes?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setRecipe(data.recipe); // This is for API
        });
    }
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <h2>{recipe.title}</h2>
      <img className={styles.image} src={recipe.image} alt={recipe.title} />
      <p>{recipe.summary}</p>

      {/* Back to Homepage Button */}
      <button
        className={styles.button}
        onClick={() => router.push("/")} // Navigate back to homepage
      >
        Back to Homepage
      </button>
    </div>
  );
};

export default RecipeDetail;
