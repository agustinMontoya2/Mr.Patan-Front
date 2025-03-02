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
