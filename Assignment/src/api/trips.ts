import { ITrips } from "../interfaces";
import { instance } from "./instance";
export const getAllTrips = () => {
  const uri = "trip";
  return instance.get(uri);
};
export const getHistoryTrips = () => {
  const uri = "trip/history";
  return instance.get(uri);
};
export const getByIdTrip = (id: string) => {
  const uri = "trip/" + id;
  return instance.get(uri);
};
export const getSearchTrips = (search: string) => {
  const uri = "trip/search" + search;
  return instance.get(uri);
};
export const createTrips = (data: ITrips) => {
  const uri = "trip";
  return instance.post(uri, data);
};
export const updateTrips = (id: string, data: ITrips) => {
  const uri = "trip/" + id;
  return instance.put(uri, data);
};
export const deleteTrips = (id: string) => {
  const uri = "trip/" + id;
  return instance.delete(uri);
};
