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

  let currency, range, photoSrc;

  if (item.mainPhotoSrc !== undefined) photoSrc = item.mainPhotoSrc;
  else if (item.photos !== undefined) photoSrc = item.photos[0].src;

  if (item.currenciesAccepted !== undefined) currency = item.currenciesAccepted;
  else if (item.acceptedCurrency !== undefined)
    currency = item.acceptedCurrency;

  if (item.averagePrice !== undefined) range = item.averagePrice;
  else if (item.priceRange !== undefined) range = item.priceRange;

  return (
    <div className={styles.container}>
      <img
        src={photoSrc}
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
        <p>{`Avarage price range: ${range} ${currency}`}</p>
      </div>
    </div>
  );
}

export default Card;
