import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { requestRestuarentDetails } from "../../helpers/query";
import styles from "./Restaurant.module.css";

function Restuarant() {
  const { id } = useParams();
  // const details = await requestRestuarentDetails(id);

  return <div>Restuarant</div>;
}

export default Restuarant;
