import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { requestRestuarentDetails } from "../../helpers/query";
import { resturantDetails } from "../../controllers/mockDB";
import styles from "./Restaurant.module.css";

function Restuarant() {
  const { id } = useParams();
  const data = resturantDetails.data.restaurant;
  console.log(data);
  // const details = await requestRestuarentDetails(id);

  return (
    <div>
      Restuarant
      <div
        className={styles.photobanner}
        style={{ backgroundImage: `url(${data.photos[0].src})` }}
      >
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default Restuarant;
