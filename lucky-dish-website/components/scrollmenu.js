import MenuItem from "./MenuItem.js";
import styles from "./ScrollMenu.module.css";

const ScrollMenu = ({ menuItems }) => {
  if (!menuItems || menuItems.length === 0) {
    return <p>No items found</p>;
  }

  return (
    <div className={styles.scrollContainer}>
      {menuItems.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ScrollMenu;
