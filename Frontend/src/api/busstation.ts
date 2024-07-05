import { instance } from "./instance";
export const getAllBusstation = () => {
  const uri = "busstation";
  return instance.get(uri);
};
