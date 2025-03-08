import { ICart, IFavorite, IProduct } from "./products";

export interface IUserData {
  username: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  username: string;
  pets: IUserPet[];
  image: string;
  favorites: IFavorite[];
  cart: ICart[];
  orders: [];
}

export interface IOrder {
  id: number;
  date: string;
  total: number;
  status: string;
  cart: IProduct[];
}

export interface IUserPet {
  id: number;
  name: string;
  type: string;
  breed: string;
  age: number;
  gender: string;
  image: string;
  appointment: IUserPetAppointment[];
  ownerId: number;
}

export interface IUserPetAppointment {
  id: number;
  date: string;
  time: string;
  status: string;
  type: string;
}
