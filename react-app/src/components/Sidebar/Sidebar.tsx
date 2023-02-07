import Map from "./Map/Map";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.container}>
      <Map />
    </div>
  );
}

export default Sidebar;
