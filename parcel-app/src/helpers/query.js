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
    return await (await fetch(url, options)).json();
  } catch (error) {
    throw error;
  }
};

export const requestLocationList = async function (geolocationId) {
  const url = `https://the-fork-the-spoon.p.rapidapi.com/locations/v2/list?google_place_id=${geolocationId}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f85c3077admsha136a2e026f03cbp18484bjsnd14e5b467cd6",
      "X-RapidAPI-Host": "the-fork-the-spoon.p.rapidapi.com",
    },
  };

  try {
    return await (await fetch(url, options)).json();
  } catch (error) {
    throw error;
  }
};

export const requestAllRestuarentsWithCityId = async function (id_city) {
  const url = `https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list?queryPlaceValueCityId=${id_city}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f85c3077admsha136a2e026f03cbp18484bjsnd14e5b467cd6",
      "X-RapidAPI-Host": "the-fork-the-spoon.p.rapidapi.com",
    },
  };

  try {
    return await (await fetch(url, options)).json();
  } catch (error) {
    throw error;
  }
};
