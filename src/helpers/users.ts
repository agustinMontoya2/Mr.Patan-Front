import { IUser, IUserData } from "@/interfaces/user";
import { notifyToast } from "./notify/notifyToast";

export async function getUsers() {
  const res = await fetch("http://localhost:3000/users");
  const json = await res.json();
  return json;
}

export async function getPets() {
  const res = await fetch("http://localhost:3000/users/1");
  const json: IUser = await res.json();
  return json?.pets;
}

export async function loginUser(userData: IUserData) {
  const users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users") as string)
    : [];

  const user = users.find((user: IUser) => user.email === userData.email);

  try {
    // const res = await fetch("http://localhost:3000/users/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userData),
    // });
    // if (res.ok) {
    //   return res.json();
    // } else {
    //   const error = await res.json();
    //   throw new Error(error.error);
    // }
    if (userData.email === user?.email && userData.password === user?.password)
      return user;
    else {
      notifyToast.error("Credenciales incorrectas");
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("Error desconocido");
    }
  }
}
