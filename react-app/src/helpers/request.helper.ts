export const something = "ok";

export const requestAutocomplete = async function (
  queryString: string,
  type: string,
  latitude: number = NaN,
  longitude: number = NaN
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
  let resturantes = data.filter(
    (item: any) => item.__typename === "SearchAutocompleteRestaurant"
  );
  return resturantes;
};