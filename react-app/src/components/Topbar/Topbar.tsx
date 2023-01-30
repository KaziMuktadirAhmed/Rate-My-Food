import TopRight from "./Layout/Right/TopRight";
import TopCenter from "./Layout/Center/TopCenter";
import TopLeft from "./Layout/Left/TopLeft";

import Searchbar from "./Searchbar/Searchbar";

import styles from "./Topbar.module.css";

function Topbar() {
  return (
    <div className={styles.topbar}>
      <TopLeft>
        <b>user</b>
        <b>ok</b>
      </TopLeft>
      <TopCenter>
        <Searchbar />
      </TopCenter>
      <TopRight>
        <b>user</b>
        <b>ok</b>
        <b>oki</b>
        <b>dokie</b>
      </TopRight>
    </div>
  );
}

export default Topbar;
