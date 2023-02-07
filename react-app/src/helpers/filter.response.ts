export const filterLocationAutocompleteResponse = function (res: any) {
  let {
    data: { geolocation },
  } = res;
  let filteredRes = geolocation.map((item: any) => {
    let {
      id: { id, type },
      name: { text },
    } = item;
    return { id, type, location: text };
  });
  return filteredRes;
};

export const filterRestuarentAutocompleteResponse = function (res: any) {
  let {
    data: { autocomplete: data },
  } = res;
  let resturantes = data
    .filter((item: any) => item.__typename === "SearchAutocompleteRestaurant")
    .map((item: any) => {
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
