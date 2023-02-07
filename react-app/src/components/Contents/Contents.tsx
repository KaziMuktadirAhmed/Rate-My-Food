import { useState } from "react";

import Card from "./Card/Card";
import Paginate from "./Paginate/Paginate";

import { getSearchResultsPage } from "../../models/restaurants.model";

import styles from "./Contents.module.css";

function Contents() {
  const [page, setPage] = useState(1);
  const arr = getSearchResultsPage(page);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Search for restuarents</h1>
      {arr.map((item: any, index: number) => (
        <Card key={index} item={item} />
      ))}
      <Paginate setPage={setPage} page={page} />
    </div>
  );
}

export default Contents;
