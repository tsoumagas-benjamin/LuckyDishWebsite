export default async function handler(req, res) {
  const { query, mode } = req.query;  //get query parameters from URL
  const apiKey = "24a3c71e52d942919af44e075bbcb4f4";  //api key

  //return error if no query is provided
  if (!query || query.trim() === "") {
    return res.status(400).json({ error: "Missing query parameter" });  
  }
  //make request to API to search for recipes
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(
        query
      )}&number=10&addRecipeInformation=true&apiKey=${apiKey}`
    );

    const data = await response.json();
    console.log("Query mode:", mode); //confirm mode is passed
    console.log("Spoonacular response:", data);

    //if API response doesnt have a valid result, returns an error
    if (!data.results || !Array.isArray(data.results)) {
      return res
        .status(500)
        .json({ error: "Unexpected Spoonacular response", data });
    }
    //return full recipe data inside hits array
    if (mode === "suggest") {
      const titles = data.results.map((r) => r.title || "Untitled");
      return res.status(200).json({ suggestions: titles });
    }
    //API error
    res.status(200).json({ hits: data.results.map((recipe) => ({ recipe })) });
  } catch (error) {
    console.error("Spoonacular API error:", error);
    res.status(500).json({ error: "Something went wrong fetching recipes" });
  }
}
