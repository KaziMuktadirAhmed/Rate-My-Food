import styles from "./Card.module.css";

function Card(props: any) {
  if (props.item.name === undefined)
    return (
      <div className={styles.container}>
        Card
        <h2>{props.item !== undefined ? props.item?.name : "none"}</h2>
      </div>
    );

  const { item } = props;
  return (
    <div className={styles.container}>
      <img
        src={item.mainPhotoSrc}
        alt="Resturant image"
        className={styles.image_container}
      />
      <div className={styles.description}>
        <h2 className={styles.title}>{item.name}</h2>
        {item.servesCuisine && (
          <p>
            <span className={styles.tag}>{item.servesCuisine}</span>
          </p>
        )}
        <h3
          className={styles.address}
        >{`${item.address.street}, ${item.address.postalCode}, ${item.address.locality}`}</h3>
        <p>{`Avarage price range: ${item.priceRange} ${item.currenciesAccepted}`}</p>
      </div>
    </div>
  );
}

export default Card;
