import { useState } from "react";
import Head from "next/head";
import PageHeader from "../../components/pageheader.js";
import MenuBar from "../../components/menubar.js";
import SearchBar from "../../components/searchbar.js";
import ScrollMenu from "../../components/scrollmenu.js";
import NavBar from "../../components/navbar.js";

//state to store recipes selected from suggestions
const Menu = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  //callback function passed to searchbar, gets called when recipe is selected
  const handleRecipesFetched = (results) => {
    if (results.length > 0) {
      setSelectedRecipe(results[0].recipe); //shows first result
    }
  };

  return (
    <>
      <Head>
        <title>Menu</title>
        <meta name="description" content="Lucky Dish Menu Items" />
      </Head>
      <PageHeader />
      <MenuBar />
      <SearchBar onRecipesFetched={handleRecipesFetched} />
      <ScrollMenu />
      <NavBar />

      {/* Render selected recipe here */}
      <div style={{ padding: "1rem", textAlign: "center" }}>
        {selectedRecipe ? (
          <div>
            <h2>{selectedRecipe.title}</h2>
            {selectedRecipe.image && (
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.title}
                style={{ width: "200px", borderRadius: "8px", marginTop: "10px" }}
              />
            )}
          </div>
        ) : (
          <div>
            <h3>Dish Name and Price Here</h3>
            <p>Dietary Tags Here</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
