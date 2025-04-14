import { useState } from "react";
import MenuItem from "./MenuItem.js";
import styles from "./ScrollMenu.module.css";

const ScrollMenu = ({ menuItems }) => {
  return (
    <div className={styles.div}>
      {menuItems && menuItems.length > 0 ? (
        menuItems.map((item) => <MenuItem key={item.id} item={item.recipe} />)
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};

export default ScrollMenu;
