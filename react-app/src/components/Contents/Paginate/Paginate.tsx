import { getPageRange } from "../../../models/restaurants.model";
import styles from "./Paginate.module.css";

function Paginate({ page, setPage }: any) {
  const maxPage = getPageRange();
  const windowSpan = 3;

  const changePage = function (changeTo: number) {
    if (changeTo > 0 && changeTo <= maxPage) setPage(changeTo);
  };

  const generateSpans = function () {
    let first = true,
      middle = [],
      last = true;
    let start = page - windowSpan > 0 ? page - windowSpan : 1,
      end = page + windowSpan <= maxPage ? page + windowSpan : maxPage;

    for (let i = start; i <= end; i++) {
      let stylesStr = `${styles.page_link}`;
      if (i === page) stylesStr += ` ${styles.page_link_active}`;
      middle.push(
        <span
          className={stylesStr}
          onClick={(event: any) => changePage(parseInt(event.target.innerText))}
        >
          {i}
        </span>
      );
    }

    if (start === 1) first = false;
    if (end === maxPage) last = false;

    return { first, middle, last };
  };

  const { first, middle, last } = generateSpans();

  return (
    <div className={styles.container}>
      <button onClick={() => changePage(page - 1)}>prev</button>
      {first && (
        <>
          <span
            className={styles.page_link}
            onClick={(event: any) =>
              changePage(parseInt(event.target.innerText))
            }
          >
            1
          </span>
          <span>...</span>
        </>
      )}
      {middle}
      {last && (
        <>
          <span>...</span>
          <span
            className={styles.page_link}
            onClick={(event: any) =>
              changePage(parseInt(event.target.innerText))
            }
          >
            {maxPage}
          </span>
        </>
      )}
      <button onClick={() => changePage(page + 1)}>next</button>
    </div>
  );
}

export default Paginate;
