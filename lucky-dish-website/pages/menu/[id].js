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
    <div className={styles.page}>
      <div className={styles.details}>
        <h1 className={styles.title}>{recipe.title}</h1>
        {recipe.image && (
          <img className={styles.image} src={recipe.image} alt={recipe.title} />
        )}

        {/* Recipe Summary */}
        <div
          className={styles.summary}
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
        ></div>

        {/* Back to Homepage Button */}
        <button
          className={styles.button}
          onClick={() => router.push("/")} // Navigate back to homepage
        >
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
