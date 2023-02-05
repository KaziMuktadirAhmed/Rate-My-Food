import * as query from "./experiment/query";

console.log("ok");

const btnSearchRestuarent = document.querySelector(".search-food-restuarnt");
const btnSearchLocation = document.querySelector(".search-location");

btnSearchLocation.addEventListener("click", async function (event) {
  console.log("search for location");
  const result = query.filterLocationAutocompleteResponse(
    await query.requestAutocomplete("dhaka", "locations")
  );
  console.log(result);
  return true;
});

btnSearchRestuarent.addEventListener("click", async function (event) {
  console.log("search for restuarant");
  const result = query.filterRestuarentAutocompleteResponse(
    await query.requestAutocomplete("burger", "restaurants")
  );
  console.log(result);
  return true;
});
