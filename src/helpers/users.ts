import { IUser, IUserData } from "@/interfaces/user";

const harcodedUser: IUser = {
  id: 1,
  name: "User",
  email: "user@mail.com",
  username: "user",
  image: "",
  favorites: [],
  cart: [],
  orders: [],
  pets: [
    {
      id: 1,
      name: "Gamora",
      type: "dog",
      breed: "Golden Retriever",
      age: 6,
      gender: "female",
      image:
        "https://res.cloudinary.com/dxpxzcj2i/image/upload/v1740710816/Captura_de_pantalla_2025-02-27_234521_g2zktx.png",
      appointment: [
        {
          id: 1,
          date: "01/08/24",
          time: "18:30 pm",
          status: "cancelado",
          type: "corte",
        },
      ],
      ownerId: 1,
    },
    {
      id: 2,
      name: "Doki",
      type: "dog",
      breed: "Caniche",
      age: 16,
      gender: "male",
      image:
        "https://res.cloudinary.com/dxpxzcj2i/image/upload/v1740710816/Captura_de_pantalla_2025-02-27_234610_en8aoz.png",
      appointment: [
        {
          id: 2,
          date: "01/08/24",
          time: "18:30 pm",
          status: "cancelado",
          type: "corte",
        },
      ],
      ownerId: 1,
    },
  ],
};

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
    if (userData.username === "user" && userData.password === "@Pass123") {
      return harcodedUser;
    } else {
      throw new Error("Credenciales incorrectas");
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("Error desconocido");
    }
  }
}
