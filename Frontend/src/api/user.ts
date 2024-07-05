import { instance } from "./instance";
import { IUser } from "../interfaces";
export const apiLogin = (data: IUser) => {
  const uri = "user/login";
  return instance.post(uri, data);
};
