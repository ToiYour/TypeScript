export interface Iinput {
  type: string;
  name: string;
  min?: string;
  default?: string;
}
export interface Iselect {
  name: string;
  optionTitle: string;
  register: object;
  data: Array<Idataselect>;
}
export interface Idataselect {
  address?: string;
  createdAt?: string;
  name?: string;
  province?: string;
  phone?: string;
  updatedAt?: string;
  __v?: number;
  _id?: string;
}
export interface IFormfields {
  fromStationId: string;
  toStationId: string;
  startTime: string;
  seats: number;
  price: number;
  busHouseId: string;
  busStationId: string;
}
export interface IDataCombobox {
  busStation: {
    address: string;
    createdAt?: string;
    name: string;
    phone: string;
    updatedAt?: string;
    __v?: number;
    _id?: string;
  }[];
  garage: {
    address: string;
    createdAt?: string;
    name: string;
    phone: string;
    updatedAt?: string;
    __v?: number;
    _id?: string;
  }[];
  station: {
    createdAt?: string;
    name: string;
    province: string;
    updatedAt?: string;
    __v?: number;
    _id?: string;
  }[];
  prevTrip?: ITripItem;
}
export interface ITrips {
  _id?: string;
  fromStationId: string;
  toStationId: string;
  startTime: string;
  seats: number;
  price: number;
  busHouseId: string;
  busStationId: string;
}
export interface IBusHouse {
  _id?: string;
  adress: string;
  name: string;
  phone: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface IBusStation {
  _id?: string;
  adress: string;
  name: string;
  phone: string;
}
export interface IStation {
  _id?: string;
  name: string;
  province: string;
}
export interface ITripItem {
  _id: string;
  busHouseId: IBusHouse;
  busStationId: IBusStation;
  fromStationId: IStation;
  price: number;
  seats: number;
  startTime: string;
  toStationId: IStation;
  createdAt?: string;
  updatedAt?: string;
}
export interface ISearchTrips {
  fromStationId: string;
  toStationId: string;
  startTime: string;
}
export interface IUser {
  name?: string;
  email?: string;
  password?: string;
}
export interface IBooking {
  _id?: string;
  name?: string;
  email?: string;
  phone?: string;
  quantity?: number;
  tripId?: string;
  payment?: string;
  price?: number;
}
export interface IBookingData {
  _id?: string;
  name?: string;
  email?: string;
  phone?: string;
  quantity?: number;
  price?: number;
  tripId?: {
    fromStationId: IStation;
    toStationId: IStation;
    busHouseId: IBusHouse;
    busStationId: IBusStation;
    startTime: string;
    price: number;
  };
  payment?: string;
  createdAt?: string;
  updatedAt?: string;
}
