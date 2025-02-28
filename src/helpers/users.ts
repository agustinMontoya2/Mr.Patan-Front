import { IUser } from "@/interfaces/user";

export async function getUsers() {
  const res = await fetch("http://localhost:3000/users/1");
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
