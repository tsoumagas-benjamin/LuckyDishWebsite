import { useState, useEffect } from "react";
import Head from "next/head";
import PageHeader from "../../components/pageheader.js";
import MenuBar from "../../components/menubar.js";
import SearchBar from "../../components/searchbar.js";
import ScrollMenu from "../../components/scrollmenu.js";
import NavBar from "../../components/navbar.js";
import MenuItem from "../../components/MenuItem.js";

//main menu component
const Menu = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null); //stores the clicked recipe from search
  const [menuItems, setMenuItems] = useState([]);             //stores all menu items
  const [filteredItems, setFilteredItems] = useState([]);     //stores filtered items for ScrollMenu

  useEffect(() => {
    const fetchMenuItem = async () => {
      const res = await fetch("/api/recipes");
      const data = await res.json();
      setMenuItems(data);
      setFilteredItems(data);
    };

    fetchMenuItem();
  }, []);

  //this function gets triggered when a recipe is selected in the SearchBar
  const handleRecipesFetched = (results) => {
    if (results.length > 0) {
      setSelectedRecipe(results[0].recipe); //use the first result as selected
    }
  };

  //this filters menu items in ScrollMenu based on search input
  const handleSearch = (query) => {
    if (query.trim() === "") {
      setFilteredItems(menuItems);
    } else {
      const filtered = menuItems.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
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
      <SearchBar
        onSearch={handleSearch}
        onRecipesFetched={handleRecipesFetched}
      />
      <ScrollMenu menuItems={filteredItems} />
      <NavBar />

      {/* instead of rendering recipe here, pass it to MenuItem */}
      <MenuItem recipe={selectedRecipe} />
    </>
  );
};

export default Menu;
