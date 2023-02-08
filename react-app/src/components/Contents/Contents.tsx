import { useState } from "react";

import Card from "./Card/Card";
import Paginate from "./Paginate/Paginate";

import { linkContentRender } from "../../controllers/content.controller";
import { getSearchResultsPage } from "../../models/contents.model";

import styles from "./Contents.module.css";

function Contents() {
  const [render, setRender] = useState(false);
  const [page, setPage] = useState(1);

  linkContentRender(setRender, setPage);
  const arr = getSearchResultsPage(page);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Search for restuarents</h1>
      {arr.map((item: any, index: number) => (
        <Card key={index} item={item} />
      ))}
      {arr.length > 0 && <Paginate setPage={setPage} page={page} />}
    </div>
  );
}

export default Contents;
