import { IUser, IUserData } from "@/interfaces/user";

const harcodedUser: IUser = {
  id: 1,
  name: "User",
  email: "user@mail.com",
  password: "@Pass123",
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
      birthdate: "01/08/24",
      medicalHistory: [
        {
          date: "01/08/24",
          description: "Descripción de la consulta",
          vet: "Veterinaria 1",
        },
        {
          date: "02/08/24",
          description: "Descripción de la consulta",
          vet: "Veterinaria 2",
        },
        {
          date: "03/08/24",
          description: "Descripción de la consulta",
          vet: "Veterinaria 1",
        },
        {
          date: "04/08/24",
          description: "Descripción de la consulta",
          vet: "Veterinaria 2",
        },
      ],
      hairCuts: [
        {
          date: "01/08/24",
          description: "Descripción del corte",
          groomer: "Groomer 1",
        },
        {
          date: "02/08/24",
          description: "Descripción del corte",
          groomer: "Groomer 2",
        },
      ],
      weight: 20,
      image:
        "https://res.cloudinary.com/dxpxzcj2i/image/upload/v1740710816/Captura_de_pantalla_2025-02-27_234521_g2zktx.png",
      appointment: [
        {
          id: 1,
          date: "01/08/24",
          time: "12:30",
          status: "cancelado",
          type: "corte",
        },
        {
          id: 2,
          date: "01/08/24",
          time: "13:30",
          status: "confirmado",
          type: "consulta",
        },
        {
          id: 3,
          date: "01/08/24",
          time: "14:30",
          status: "pendiente",
          type: "baño",
        },
        {
          id: 4,
          date: "02/08/24",
          time: "18:30",
          status: "confirmado",
          type: "corte y baño",
        },
        {
          id: 1,
          date: "03/08/24",
          time: "19:30",
          status: "cancelado",
          type: "corte",
        },
        {
          id: 2,
          date: "04/08/24",
          time: "10:30",
          status: "confirmado",
          type: "consulta",
        },
        {
          id: 3,
          date: "01/09/24",
          time: "18:30",
          status: "pendiente",
          type: "baño",
        },
        {
          id: 4,
          date: "01/01/24",
          time: "18:30",
          status: "confirmado",
          type: "corte y baño",
        },
        {
          id: 1,
          date: "01/08/25",
          time: "18:30",
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
      birthdate: "01/08/24",
      weight: 20,
      medicalHistory: [
        {
          date: "01/09/24",
          description: "Descripción de la consulta",
          vet: "Veterinaria 1",
        },
      ],
      hairCuts: [
        {
          date: "01/10/24",
          description: "Descripción del corte",
          groomer: "Groomer 1",
        },
        {
          date: "01/11/24",
          description: "Descripción del corte",
          groomer: "Groomer 2",
        },
        {
          date: "01/12/24",
          description: "Descripción del corte",
          groomer: "Groomer 1",
        },
        {
          date: "01/01/25",
          description: "Descripción del corte",
          groomer: "Groomer 2",
        },
        {
          date: "01/02/25",
          description: "Descripción del corte",
          groomer: "Groomer 1",
        },
        {
          date: "01/03/25",
          description: "Descripción del corte",
          groomer: "Groomer 2",
        },
      ],
      image:
        "https://res.cloudinary.com/dxpxzcj2i/image/upload/v1740710816/Captura_de_pantalla_2025-02-27_234610_en8aoz.png",
      appointment: [
        {
          id: 2,
          date: "01/08/24",
          time: "18:30 pm",
          status: "cancelado",
          type: "peluqueria",
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
  const users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users") as string)
    : [];
  console.log(users);

  const user = users.find((user: IUser) => user.email === userData.email);
  console.log(user);

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
    if (
      userData.email === harcodedUser.email &&
      userData.password === harcodedUser.password
    ) {
      return harcodedUser;
    }
    if (userData.email === user?.email && userData.password === user?.password)
      return user;
    else {
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
