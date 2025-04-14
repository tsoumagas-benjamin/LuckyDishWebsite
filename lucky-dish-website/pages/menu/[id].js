import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.summary}</p>
    </div>
  );
};

export default RecipeDetail;
