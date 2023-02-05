import * as query from "./helpers/query";

console.log("ok");

const btnSearchRestuarent = document.querySelector(".search-food-restuarnt");
const btnSearchLocation = document.querySelector(".search-location");

btnSearchLocation.addEventListener("click", async function (event) {
  console.log("search for location");
  //   const result = query.filterLocationAutocompleteResponse(
  //     await query.requestAutocomplete("dhaka", query.QUERY_TYPES.location)
  //   );

  const result = await query.getAutocompleteText(
    "london",
    query.QUERY_TYPES.location
  );

  console.log(result);
  return true;
});

btnSearchRestuarent.addEventListener("click", async function (event) {
  console.log("search for restuarant");
  //   const result = query.filterRestuarentAutocompleteResponse(
  //     await query.requestAutocomplete("burger", query.QUERY_TYPES.restuarent)
  //   );

  const result = await query.getAutocompleteText(
    "pizza",
    query.QUERY_TYPES.restuarent
  );
  console.log(result);
  return true;
});
