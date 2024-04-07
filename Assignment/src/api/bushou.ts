import { IBusHouse } from "../interfaces";
import { instance } from "./instance";

export const getAllBusHou = () => {
  const uri = "bushouse";
  return instance.get(uri);
};
export const getByIdBusHou = (id: string) => {
  const uri = "bushouse/" + id;
  return instance.get(uri);
};
export const createBusHou = (data: IBusHouse) => {
  const uri = "bushouse";
  return instance.post(uri, data);
};
export const updateBusHou = (id: string, data: IBusHouse) => {
  const uri = "bushouse/" + id;
  return instance.put(uri, data);
};
export const deleteBusHou = (id: string) => {
  const uri = "bushouse/" + id;
  return instance.delete(uri);
};
