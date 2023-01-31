import Card from "./Card/Card";
import styles from "./Contents.module.css";
import Paginate from "./Paginate/Paginate";

function Contents() {
  let count = 0;
  const arr = new Array(5);
  for (let i = 0; i < 5; i++) arr[i] = i;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Heading</h1>
      {arr.map((item) => (
        <Card item={item} />
      ))}
      <Card />
      <Paginate />
    </div>
  );
}

export default Contents;
