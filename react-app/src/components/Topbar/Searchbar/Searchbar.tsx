import { ReactEventHandler, SyntheticEvent } from "react";
import styles from "./Searchbar.module.css";

function handleClick(event: SyntheticEvent, ...prams: any) {
  event.preventDefault();
  console.log(event, prams);
}

function Searchbar() {
  return (
    <div className={styles.searchbar}>
      <input
        placeholder="Resturant, Food"
        className={`${styles.search_input} ${styles.border_right}`}
      />
      <input placeholder="Location" className={styles.search_input} />
      <button
        className={styles.search_btn}
        type="submit"
        onClick={(e) => handleClick(e)}
      >
        <svg width="24" height="24" className={styles.search_icon}>
          <path d="M21.853 20.355l-3.444-3.443a9.428 9.428 0 10-16.761-6.171 9.428 9.428 0 0015.348 7.586l3.443 3.442a1 1 0 101.414-1.414zM5.82 16.245a7.429 7.429 0 115.253 2.175 7.38 7.38 0 01-5.253-2.176z"></path>
        </svg>
      </button>
    </div>
  );
}

export default Searchbar;
