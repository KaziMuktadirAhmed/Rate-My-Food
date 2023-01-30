import Topbar from "../../components/Topbar/Topbar";
import styles from "./Search.module.css";

function Search() {
  return (
    <>
      <Topbar />
      <h1 className={styles.h1}>This is a Search page</h1>
      <p>This is a simple description for a search page.</p>
      <pre>ok ok ok ok ok ok</pre>
    </>
  );
}

export default Search;
