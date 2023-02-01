import { getPageRange } from "../../../models/restaurants.model";
import styles from "./Paginate.module.css";

function Paginate({ page, setPage }: any) {
  const maxPage = getPageRange();
  const windowSpan = 2;

  const changePage = function (changeTo: number) {
    if (changeTo > 0 && changeTo <= maxPage) setPage(changeTo);
  };

  const generateSpans = function () {
    let first = true,
      middle = [],
      last = true;
    let start = page - windowSpan > 2 ? page - windowSpan : 1,
      end = page + windowSpan < maxPage - 1 ? page + windowSpan : maxPage;

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
      <span className={styles.break}></span>
      <button className={styles.buttons} onClick={() => changePage(page - 1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill-rule="evenodd"
            d="M15.749 20.5c-.24 0-.48-.086-.673-.26l-8.249-7.496a1 1 0 0 1 0-1.479l8.249-7.504a1 1 0 0 1 1.346 1.478l-7.436 6.765 7.436 6.756a1.002 1.002 0 0 1-.673 1.74"
          ></path>
        </svg>
      </button>
      <button className={styles.buttons} onClick={() => changePage(page + 1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill-rule="evenodd"
            d="M8.25 20.5a1.002 1.002 0 0 1-.673-1.74l7.436-6.756-7.436-6.765a1 1 0 1 1 1.346-1.478l8.249 7.504a1 1 0 0 1 0 1.479L8.923 20.24c-.193.174-.433.26-.673.26"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default Paginate;
