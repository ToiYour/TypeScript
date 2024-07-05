import { instance } from "./instance";
export const getAllStation = () => {
  const uri = "station";
  return instance.get(uri);
};
