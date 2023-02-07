import { getAllRestuarentForALocation } from "../helpers/request.helper";
import { setData } from "../models/contents.model";

let renderContent: any, renderMap: any;

export const linkContentRender = function (setRender: any) {
  renderContent = setRender;
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
  renderMap((prev: boolean) => !prev);
};
