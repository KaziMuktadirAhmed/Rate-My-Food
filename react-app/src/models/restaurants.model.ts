const resultsPerPage = 10;
const data: any = [];
for (let i = 0; i < 500; i++) data[i] = `data no: ${i}`;

export const getPageRange = function () {
  return Math.ceil(data.length / resultsPerPage);
};

export const getSearchResultsPage = function (page = 1) {
  //   state.search.page = page;
  console.log(getPageRange());
  const start = (page - 1) * resultsPerPage;
  const end = page * resultsPerPage;
  return data.slice(start, end);
};
