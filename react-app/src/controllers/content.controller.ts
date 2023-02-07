import { getAllRestuarentForALocation } from "../helpers/request.helper";
import { setData } from "../models/restaurants.model";

let renderContent: any;

export const linkRender = function (setRender: any) {
  renderContent = setRender;
};

export const setLocationSearchResult = async function (searchQuery: any) {
  console.log(`searching resturants in ${searchQuery} ........`);
  const result = await getAllRestuarentForALocation(searchQuery);
  console.log(result);
  setData(result);
  renderContent((prev: boolean) => !prev);
};
