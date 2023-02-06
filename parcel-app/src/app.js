import * as query from "./helpers/get.response";
import { QUERY_TYPES } from "./helpers/query";

console.log("ok");

const btnSearchRestuarent = document.querySelector(".search-food-restuarnt");
const btnSearchLocation = document.querySelector(".search-location");

btnSearchLocation.addEventListener("click", async function (event) {
  console.log("searching for locations ......");
  //   const result = query.filterLocationAutocompleteResponse(
  //     await query.requestAutocomplete("dhaka", query.QUERY_TYPES.location)
  //   );
  let result;
  try {
    // result = await query.requestLocationList("ChIJD7fiBh9u5kcRYJSMaMOCCwQ");
    // result = await query.getAutocompleteText("New", query.QUERY_TYPES.location);
    result = await query.getAvailableLocationList("paris");
  } catch (error) {
    console.error(error);
  }
  console.dir(result);
});

btnSearchRestuarent.addEventListener("click", async function (event) {
  console.log("searching for restuarants ........");
  let result;
  try {
    result = await query.getAutocompleteText("panda", QUERY_TYPES.restuarent);
  } catch (error) {
    console.error(error);
  }

  console.log(result);
});
