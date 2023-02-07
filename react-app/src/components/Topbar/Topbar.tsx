import TopRight from "./Layout/Right/TopRight";
import TopCenter from "./Layout/Center/TopCenter";
import TopLeft from "./Layout/Left/TopLeft";

import Searchbar from "./Searchbar/Searchbar";

import styles from "./Topbar.module.css";

function Topbar() {
  return (
    <div className={styles.topbar}>
      <TopLeft>
        <b>LOGO</b>
      </TopLeft>
      <TopCenter>
        <Searchbar />
      </TopCenter>
      <TopRight>
        <button className={styles.btn_signup}>Sign up</button>
        <button className={styles.btn_login}>Log in</button>
      </TopRight>
    </div>
  );
}

export default Topbar;
