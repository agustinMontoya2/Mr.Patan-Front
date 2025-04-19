import { ICart, IFavorite, IProduct } from "./products";

export interface IUserData {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
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
  gender: string;
  image: string;
  birthdate: string;
  weight: number;
  medicalHistory: { date: string; description: string; vet: string }[];
  hairCuts: { date: string; description: string; groomer: string }[];
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

export interface IUserInformation {
  user: IUser;
  setUser: (user: IUser) => void;
}

export interface IUserProfile {
  user: IUser;
  handleGetUser: () => void;
}

export interface IUserDataContainer {
  user: IUser;
  setUser: (user: IUser) => void;
}

export interface IPetData {
  pet: IUserPet;
  medicalHistory: { date: string; description: string; vet: string }[];
  hairCuts: { date: string; description: string; groomer: string }[];
}

// export interface IUserPetComponent {
//   // setSelectedPet: (pet: IUserPet) => void;
// }
