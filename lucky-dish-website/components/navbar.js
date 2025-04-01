import Link from "next/link";
import styles from './navbar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.div}>
                <Link href="/about" className={styles.link}>About Us</Link>
            </div>
            <div className={styles.div}>
                <Link href="/menu" className={styles.link}>Menu</Link>
            </div>
            <div className={styles.div}>
                <Link href="/login" className={styles.link}>Login</Link>
            </div>
        </nav>
    )
}

export default NavBar;