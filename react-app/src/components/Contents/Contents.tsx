import Card from "./Card/Card";
import styles from "./Contents.module.css";

function Contents() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Heading</h1>
      <Card />
    </div>
  );
}

export default Contents;
