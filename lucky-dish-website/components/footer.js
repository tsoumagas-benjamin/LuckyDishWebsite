import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <h3 className={styles.name}>Lucky Dish</h3>
                <p className={styles.slogan}>
                    Your go-to spot for comforting, flavorful meals made with
                    love.
                </p>
                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Lucky Dish. Crafted for
                    today’s taste.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
