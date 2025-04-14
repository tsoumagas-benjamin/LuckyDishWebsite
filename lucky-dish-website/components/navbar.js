import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.div}>
        <Link href="/home" className={styles.link}>
          Homepage
        </Link>
      </div>
      <div className={styles.div}>
        <Link href="/about" className={styles.link}>
          About Us
        </Link>
      </div>
      <div className={styles.div}>
        <Link href="/menu" className={styles.link}>
          Menu
        </Link>
      </div>
      <div className={styles.div}>
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
