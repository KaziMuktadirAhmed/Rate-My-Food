console.log("ok");

const btnSearchRestuarent = document.querySelector(".search-food-restuarnt");
const btnSearchLocation = document.querySelector(".search-location");

btnSearchLocation.addEventListener("click", function (event) {
  console.log("search for location");
});

btnSearchRestuarent.addEventListener("click", function (event) {
  console.log("search for restuarant");
});
