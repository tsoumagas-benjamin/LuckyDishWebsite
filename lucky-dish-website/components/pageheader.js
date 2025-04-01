import styles from './pageheader.module.css';

const PageHeader = () => {
    return (
        <div className={styles.div}>
            <img src="LuckyDish.png" alt="Lucky Dish Logo" className={styles.img}/>
            <h1 className={styles.header}>Lucky Dish</h1>
        </div>
    )
}

export default PageHeader;