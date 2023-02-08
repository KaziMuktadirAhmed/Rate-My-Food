import {
  getAllRestuarentForALocation,
  getAllRestuarentForAName,
} from "../helpers/request.helper";
import { setData } from "../models/contents.model";

let renderContent: any, resetContentPage: any, renderMap: any;

export const linkContentRender = function (
  setRender: any,
  setContentPage: any
) {
  renderContent = setRender;
  resetContentPage = setContentPage;
};

export const linkMapRender = function (setRender: any) {
  renderMap = setRender;
};

export const setLocationSearchResult = async function (searchQuery: any) {
  console.log(`searching resturants in ${searchQuery} ........`);
  const result = await getAllRestuarentForALocation(searchQuery);
  console.log(result);
  setData(result);
  renderContent((prev: boolean) => !prev);
  resetContentPage(1);
  // renderMap((prev: boolean) => !prev);
};

export const setResutarantNameSearchResult = async function (searchQuery: any) {
  console.log(
    `searching resturants with containing '${searchQuery}' in it's title ........`
  );
  const result = await getAllRestuarentForAName(searchQuery);
  console.log(result);
  const resultToSet = result
    .filter((item) => item.restaurant !== undefined)
    .map((item) => item.restaurant);
  console.log(resultToSet);
  setData(resultToSet);
  renderContent((prev: boolean) => !prev);
  resetContentPage(1);
};

export const setBothSearchResult = async function (
  itemQuery: any,
  locationQuery: any
) {
  console.log(
    `searching resturants with containing '${itemQuery}' in it's title and inside ${locationQuery} ........`
  );
  const resultLocation = await getAllRestuarentForALocation(locationQuery);
  const resultItem = await getAllRestuarentForAName(itemQuery);
  console.log("location:", resultLocation);
  console.log("resturant:", resultItem);

  const filtredItemResult = resultItem
    .filter((item) => item.restaurant !== undefined)
    .map((item) => item.restaurant);

  const finalResult = filtredItemResult.concat(resultLocation);
  setData(finalResult);
  renderContent((prev: boolean) => !prev);
  resetContentPage(1);
};
