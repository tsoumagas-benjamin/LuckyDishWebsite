import { useState } from "react";
import styles from "./menubar.module.css";

const MenuBar = () => {
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button}>Breakfast</button>
      <button className={styles.button}>Lunch</button>
      <button className={styles.button}>Dinner</button>
      <button className={styles.button}>Dessert</button>
      <button className={styles.button}>Drinks</button>
    </div>
  );
};

export default MenuBar;
