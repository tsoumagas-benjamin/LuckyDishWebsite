//runs on server and calls spoonacular api to get recipes
export default async function handler(req, res) {
  const { query } = req.query;
  const apiKey = process.env.SPOONACULAR_API_KEY; //api key

  //if theres no query, it will return an error
  if (!query || query.trim() === "") {
    return res.status(400).json({ error: "Missing query parameter" });
  }

  //calls spoonacular's recipe search api
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(
        query
      )}&number=10&addRecipeInformation=true&apiKey=${apiKey}`
    );

    const data = await response.json();
    console.log("Spoonacular response:", data); //debugging

    //if results are in the right format, there will be an error
    if (!data.results || !Array.isArray(data.results)) {
      return res
        .status(500)
        .json({ error: "Unexpected Spoonacular response", data });
    }

    //formats results so they can be used in front end
    res.status(200).json({ hits: data.results.map((recipe) => ({ recipe })) }); //wraps recipe in an object
  } catch (error) {
    console.error("Spoonacular API error:", error);
    res.status(500).json({ error: "Something went wrong fetching recipes" });
  }
}
