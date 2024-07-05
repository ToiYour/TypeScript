import { IBooking } from "../interfaces";
import { instance } from "./instance";
export const createBooking = (data: IBooking) => {
  const uri = "booking";
  return instance.post(uri, data);
};
export const getByIdBooking = (id: string) => {
  const uri = "booking/" + id;
  return instance.get(uri);
};
export const getIsBooking = (id: string) => {
  const uri = "booking/isbooking/" + id;
  return instance.get(uri);
};
export const getSearchBooking = (url: string) => {
  const uri = "booking/search" + url;
  return instance.get(uri);
};
