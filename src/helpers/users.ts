import { IUser, IUserData } from "@/interfaces/user";

export async function getUsers() {
  const res = await fetch("http://localhost:3000/users");
  const json = await res.json();
  console.log(json);
  return json;
}

export async function getPets() {
  const res = await fetch("http://localhost:3000/users/1");
  const json: IUser = await res.json();
  console.log(json);
  return json?.pets;
}

export async function loginUser(userData: IUserData) {
  try {
    const res = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (res.ok) {
      return res.json();
    } else {
      const error = await res.json();
      throw new Error(error.error);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("Error desconocido");
    }
  }
}
