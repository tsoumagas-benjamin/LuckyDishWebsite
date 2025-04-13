import { useState } from "react";
import MenuItem from "./MenuItem.js";
import styles from "./ScrollMenu.module.css";

const ScrollMenu = () => {
  return (
    <div className={styles.div}>
      {MenuItem.length > 0 ? (
        MenuItem.map((item) => <MenuItem key={item.id} item={item} />)
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};

export default ScrollMenu;
