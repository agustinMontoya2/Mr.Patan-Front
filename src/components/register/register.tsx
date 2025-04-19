"use client";
import { useState } from "react";
import Input from "../input/input";
import { useRouter } from "next/navigation";
import registerValidation from "../../helpers/validate";
import { FormErrors } from "@/interfaces/errors";
import { IUser } from "@/interfaces/user";
import { notifyToast } from "@/helpers/notify/notifyToast";

export const Register = () => {
    const router = useRouter();

    const initialUserData = {email: "", name: "", password: "", confirmPassword: ""};
    const [userData, setUserData] = useState(initialUserData);
    const inputs = [
        { name: "email", type: "email", placeholder: "Correo electrónico" },
        { name: "name", type: "text", placeholder: "Nombre" },
        { name: "password", isPassword: true, placeholder: "Contraseña" },
        { name: "confirmPassword", isPassword: true, placeholder: "Confirmar contraseña" },
    ];

    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    const validationErrors = registerValidation({ ...userData, [name]: value });
    setErrors(validationErrors);
    
    };
    const handleSubmit = async () => {
        const validationErrors = registerValidation(userData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            notifyToast.alert("Completa los campos correctamente");
            return;
        }
        if (Object.keys(validationErrors).length === 0 && userData.password === userData.confirmPassword) {
            
            const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users") as string) : []
            if (users.find((user: IUser) => user.email === userData.email)) {
                notifyToast.error("El correo ya esta registrado");
                return;
            }
            notifyToast.success("¡Bienvenido a Mr.Patan!");
            const user: IUser = {
                id: Math.floor(Math.random() * 1000),
                name: userData.name,
                email: userData.email,
                password: userData.password,
                pets: [],
                image: "",
                favorites: [],
                cart: [],
                orders: [],
            }
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("pets", JSON.stringify([]));
            localStorage.setItem("favorites", JSON.stringify([]));
            localStorage.setItem("cart", JSON.stringify([]));
            localStorage.setItem("orders", JSON.stringify([]));
            const audio = new Audio('/door-chime.mp3');
            await audio.play();
            router.push("/perfil");
            return
        }
    };

    return (
    <div className="bg-whiteTransparent text-[rgb(0,0,0)] w-4/6 min-w-[275px] h-[70%] border-solid border-[rgb(0,0,0)] border-2 rounded-2xl flex flex-col items-center justify-center">
        <form
         onSubmit={(e) => {
             e.preventDefault();
             handleSubmit();
         }
         }
         className="w-full h-5/6 flex flex-col items-center justify-around">
        <div className="flex flex-col items-center justify-around w-[80%] font-kanit">
            {
                inputs.map(({ name, type, placeholder, isPassword }) => (
                    <div key={name} className="w-full">
                        <h2 className="text-2xl font-kanit">{placeholder}</h2>
                    <Input
                    key={name}
                    name={name}
                    type={type}
                    value={userData[name as keyof typeof userData]}
                    onChange={handleChange}
                    isPassword={isPassword}
                    error={errors[name as keyof FormErrors]}
                    />
                    </div>
                ))
            }
        </div>
        
        <div className="flex flex-col items-center justify-center gap-6 w-[80%] h-[30%]">
  <button 
    className="bg-yellow-400 w-full h-[25%] rounded-lg border border-black shadow-md 
               hover:bg-yellow-500 hover:shadow-lg active:scale-95 transition-all duration-300"
  >
    Registrarse
  </button>
  <button 
    type="button"
    onClick={() => router.push('/inicio')} 
    className="bg-green-500 w-full h-[25%] rounded-lg border border-black shadow-md 
               hover:bg-green-600 hover:shadow-lg active:scale-95 transition-all duration-300"
  >
    Iniciar sesión
  </button>
</div>
        </form>
        </div>
        )
};