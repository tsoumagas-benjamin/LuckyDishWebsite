import styles from './searchbar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.div}>
            <input type="text" placeholder="Search..." className={styles.input}></input>
        </div>
    )
}

export default SearchBar;