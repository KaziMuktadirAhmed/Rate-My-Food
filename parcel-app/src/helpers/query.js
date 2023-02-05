export const QUERY_TYPES = Object.freeze({
  location: "locations",
  restuarent: "restaurants",
});

export const requestAutocomplete = async function (
  queryString,
  type,
  latitude = NaN,
  longitude = NaN
) {
  let url = `https://the-fork-the-spoon.p.rapidapi.com/${type}/v2/auto-complete?text=${queryString}`;
  if (!Number.isNaN(latitude) && !Number.isNaN(longitude))
    url += `&latitude=${latitude}&longitude=${longitude}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f85c3077admsha136a2e026f03cbp18484bjsnd14e5b467cd6",
      "X-RapidAPI-Host": "the-fork-the-spoon.p.rapidapi.com",
    },
  };

  try {
    const data = await (await fetch(url, options)).json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const filterLocationAutocompleteResponse = function (res) {
  let {
    data: { geolocation },
  } = res;
  let filteredRes = geolocation.map((item) => {
    let {
      id: { id, type },
      name: { text },
    } = item;
    return { id, type, location: text };
  });
  return filteredRes;
};

export const filterRestuarentAutocompleteResponse = function (res) {
  let {
    data: { autocomplete: data },
  } = res;
  let resturantes = data
    .filter((item) => item.__typename === "SearchAutocompleteRestaurant")
    .map((item) => {
      const {
        id,
        name: { text },
        zipCode,
        cityName,
        countryName,
      } = item;

      return {
        id,
        restuarent: text,
        addresss: { zip: zipCode, city: cityName, country: countryName },
      };
    });
  return resturantes;
};

/**
 * @param {string} queryString The query string
 * @param {QUERY_TYPES} queryType The query type
 * @param {number} latitude Optional Latitude value for sorting result
 * @param {number} longitude Optional Longitude value for sorting result
 */
export const getAutocompleteText = async function (
  queryString,
  queryType,
  latitude = NaN,
  longitude = NaN
) {
  const result = await requestAutocomplete(
    queryString,
    queryType,
    latitude,
    longitude
  );

  if (queryType === QUERY_TYPES.location) {
    return filterLocationAutocompleteResponse(result).map((item) => {
      let { location } = item;
      return location;
    });
  } else if (queryType === QUERY_TYPES.restuarent) {
    return filterRestuarentAutocompleteResponse(result).map((item) => {
      let { restuarent } = item;
      return restuarent;
    });
  }
};
