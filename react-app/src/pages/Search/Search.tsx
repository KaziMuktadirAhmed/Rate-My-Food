import Topbar from "../../components/Topbar/Topbar";
import Navigation from "../../components/Navigation/Navigation";
import Contents from "../../components/Contents/Contents";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.page_container}>
      <header className={styles.page_header}>
        <Topbar />
      </header>
      <main className={styles.page_content}>
        <aside className={styles.content_navigation}>
          <Navigation />
        </aside>
        <article className={styles.content_article}>
          <Contents />
        </article>
        <aside className={styles.content_side_bar}>
          <Sidebar />
        </aside>
      </main>
      <footer className={styles.page_footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Search;
