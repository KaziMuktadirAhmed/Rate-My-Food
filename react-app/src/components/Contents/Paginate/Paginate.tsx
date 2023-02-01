import { getPageRange } from "../../../models/restaurants.model";
import styles from "./Paginate.module.css";

function Paginate({ page, setPage }: any) {
  const maxPage = getPageRange();
  console.log(maxPage);

  const generateSpans = function () {
    let first = true,
      middle = [],
      last = true;
    let start = page - 2 > 0 ? page - 2 : 1,
      end = page + 2 <= maxPage ? page + 2 : maxPage;

    for (let i = start; i <= end; i++) {
      let stylesStr = `${styles.page_link}`;
      if (i === page) stylesStr += ` ${styles.page_link_active}`;
      middle.push(<span className={stylesStr}>{i}</span>);
    }

    if (start === 1) first = false;
    if (end === maxPage) last = false;

    return { first, middle, last };
  };

  const { first, middle, last } = generateSpans();

  return (
    <div className={styles.container}>
      <button onClick={() => setPage((page: number) => page - 1)}>prev</button>
      {first && (
        <>
          <span className={styles.page_link}>1</span>
          <span>...</span>
        </>
      )}
      {middle}
      {last && (
        <>
          <span>...</span>
          <span className={styles.page_link}>{maxPage}</span>
        </>
      )}
      <button onClick={() => setPage((page: number) => page + 1)}>next</button>
    </div>
  );
}

export default Paginate;
