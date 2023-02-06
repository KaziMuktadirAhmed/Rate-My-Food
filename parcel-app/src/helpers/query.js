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
      "X-RapidAPI-Key": "9f1d12a30dmsh9ec2333159aab52p17f79ajsn738ef0eb69cf",
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
      "X-RapidAPI-Key": "9f1d12a30dmsh9ec2333159aab52p17f79ajsn738ef0eb69cf",
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
      "X-RapidAPI-Key": "9f1d12a30dmsh9ec2333159aab52p17f79ajsn738ef0eb69cf",
      "X-RapidAPI-Host": "the-fork-the-spoon.p.rapidapi.com",
    },
  };

  try {
    return await (await fetch(url, options)).json();
  } catch (error) {
    throw error;
  }
};

export const requestRestuarentDetails = async function (id_restuarent) {
  const url = `https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/get-info?restaurantId=${id_restuarent}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9f1d12a30dmsh9ec2333159aab52p17f79ajsn738ef0eb69cf",
      "X-RapidAPI-Host": "the-fork-the-spoon.p.rapidapi.com",
    },
  };

  try {
    return await (await fetch(url, options)).json();
  } catch (error) {
    throw error;
  }
};
