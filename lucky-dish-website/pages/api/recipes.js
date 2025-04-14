//runs on server and calls spoonacular api to get recipes
// runs on server and calls spoonacular api to get recipes
export default async function handler(req, res) {
  const { query } = req.query;

  //API key
  const apiKey = "24a3c71e52d942919af44e075bbcb4f4";

  //if there's no query, it will return an error
  if (!query || query.trim() === "") {
    return res.status(400).json({ error: "Missing query parameter" });
  }

  //calls Spoonacular's recipe search API
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(
        query
      )}&number=10&addRecipeInformation=true&apiKey=${apiKey}`
    );

    const data = await response.json();
    console.log("Spoonacular response:", data); // debugging

    //if results are not in the right format, return an error
    if (!data.results || !Array.isArray(data.results)) {
      return res
        .status(500)
        .json({ error: "Unexpected Spoonacular response", data });
    }

    //formats results so they can be used in front end
    res.status(200).json({ hits: data.results.map((recipe) => ({ recipe })) }); // wraps recipe in an object
  } catch (error) {
    console.error("Spoonacular API error:", error);
    res.status(500).json({ error: "Something went wrong fetching recipes" });
  }
}
