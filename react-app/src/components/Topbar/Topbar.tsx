import TopRight from "./Layout/Right/TopRight";
import TopCenter from "./Layout/Center/TopCenter";
import TopLeft from "./Layout/Left/TopLeft";

import Searchbar from "./Searchbar/Searchbar";

import styles from "./Topbar.module.css";

function Topbar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.topbar_contents}>
        <TopLeft>
          <b>user</b>
          <b>ok</b>
        </TopLeft>
      </div>
      <div className={styles.topbar_contents}>
        <TopCenter>
          <Searchbar />
        </TopCenter>
      </div>
      <div className={styles.topbar_contents}>
        <TopRight>
          <b>user</b>
          <b>ok</b>
          <b>oki</b>
          <b>dokie</b>
        </TopRight>
      </div>
    </header>
  );
}

export default Topbar;
