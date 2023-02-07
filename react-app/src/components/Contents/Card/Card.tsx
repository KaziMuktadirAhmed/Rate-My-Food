import styles from "./Card.module.css";

function Card(props: any) {
  return (
    <div className={styles.container}>
      Card
      <h2>{props.item !== undefined ? props.item : "none"}</h2>
    </div>
  );
}

export default Card;
