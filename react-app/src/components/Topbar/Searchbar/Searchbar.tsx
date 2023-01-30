import styles from "./Searchbar.module.css";

function Searchbar() {
  return (
    <div className={styles.searchbar}>
      <input
        placeholder="Resturant, Food"
        className={`${styles.search_input} ${styles.border_right}`}
      />
      <input placeholder="Location" className={styles.search_input} />
      <p className={styles.search_icon}>&nbsp; &nbsp; Search &nbsp;</p>
    </div>
  );
}

export default Searchbar;
