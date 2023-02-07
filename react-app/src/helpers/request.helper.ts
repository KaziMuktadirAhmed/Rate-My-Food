import {
  requestAutocomplete,
  requestLocationList,
  requestAllRestuarentsWithCityId,
  requestRestuarentDetails,
  QUERY_TYPES,
} from "./query";

import {
  filterLocationAutocompleteResponse,
  filterRestuarentAutocompleteResponse,
} from "./filter.response";

/**
 * @param {string} queryString The query string
 * @param {QUERY_TYPES} queryType The query type
 * @param {number} latitude Optional Latitude value for sorting result
 * @param {number} longitude Optional Longitude value for sorting result
 */
export const getAutocompleteText = async function (
  queryString: string,
  queryType: string,
  latitude: number = NaN,
  longitude: number = NaN
) {
  let result;
  try {
    result = await requestAutocomplete(
      queryString,
      queryType,
      latitude,
      longitude
    );
  } catch (error) {
    console.error(error);
    throw error;
  }

  if (queryType === QUERY_TYPES.location) {
    return filterLocationAutocompleteResponse(result).map((item: any) => {
      let { location } = item;
      return location;
    });
  } else if (queryType === QUERY_TYPES.restuarent) {
    return filterRestuarentAutocompleteResponse(result).map((item: any) => {
      let { restuarent } = item;
      return restuarent;
    });
  }
};

export const getAvailableLocationList = async function (
  queryString: string,
  latitude = NaN,
  longitude = NaN
) {
  const initialList = filterLocationAutocompleteResponse(
    await requestAutocomplete(
      queryString,
      QUERY_TYPES.location,
      latitude,
      longitude
    )
  );

  const promises = initialList.map((item: any) => requestLocationList(item.id));
  const filtred = (await Promise.allSettled(promises))
    .filter(
      (item) => item.status === "fulfilled" && item.value.id_city !== undefined
    )
    .map((item: any) => {
      let {
        value: {
          coordinates,
          id_city,
          prediction: { formatted_address },
        },
      } = item;
      return { coordinates, id: id_city, location: formatted_address };
    });

  return filtred;
};

export const getAllRestuarentForALocation = async function (
  queryString: string,
  latitude = NaN,
  longitude = NaN
) {
  const availableLocation = await getAvailableLocationList(
    queryString,
    latitude,
    longitude
  );

  const promises = availableLocation.map((item) =>
    requestAllRestuarentsWithCityId(item.id)
  );

  const resolved = (await Promise.allSettled(promises))
    .filter((item) => item.status === "fulfilled")
    .reduce((accum, item: any) => accum.concat(item.value.data), []);

  return resolved;
};

export const getAllRestuarentForAName = async function (
  queryString: string,
  latitude = NaN,
  longitude = NaN
) {
  const availableRestuarents = filterRestuarentAutocompleteResponse(
    await requestAutocomplete(
      queryString,
      QUERY_TYPES.restuarent,
      latitude,
      longitude
    )
  );

  const promises = availableRestuarents.map((item: any) =>
    requestRestuarentDetails(item.id)
  );
  const resolved = (await Promise.allSettled(promises))
    .filter(
      (item) => item.status === "fulfilled" && item.value.data !== undefined
    )
    .map((item: any) => item.value.data);

  return resolved;
};
