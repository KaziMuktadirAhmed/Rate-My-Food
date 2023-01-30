import Contents from "../../components/Contents/Contents";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.page_container}>
      <header className={styles.page_header}>
        <Topbar />
      </header>
      <main className={styles.page_content}>
        <nav className={styles.content_navigation}>
          <Navigation />
        </nav>
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
