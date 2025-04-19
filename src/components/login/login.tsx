"use client";
import { useRouter } from "next/navigation";
import {  useState } from "react";
import Input from "../input/input";
import { loginUser } from "@/helpers/users";
import { notifyToast } from "@/helpers/notify/notifyToast";

export const Login: React.FC = () => {
    const router = useRouter();

    const initialUserData = {email: "", password: ""};
    const [userData, setUserData] = useState(initialUserData);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    }
    const handleSubmit = async () => {
        if (userData.email.length === 0 || userData.password.length === 0) {
            notifyToast.alert("Los campos no pueden estar vacios");
            return;
        }
        try {
            const user = await loginUser(userData);
            
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
                if (user.pets) {
                    
                    localStorage.setItem("pets", JSON.stringify(user.pets))
                } else {
                    localStorage.setItem("pets", JSON.stringify([]))
                }
                if (user.favorites) {
                    localStorage.setItem("favorites", JSON.stringify(user.favorites))
                } else {
                    localStorage.setItem("favorites", JSON.stringify([]))
                }
                if (user.cart) {
                    localStorage.setItem("cart", JSON.stringify(user.cart))
                } else {
                    localStorage.setItem("cart", JSON.stringify([]))
                }
                if (user.orders) {
                    localStorage.setItem("orders", JSON.stringify(user.orders))
                } else {
                    localStorage.setItem("orders", JSON.stringify([]))
                }
                window.dispatchEvent(new Event("userSessionUpdated"));
                notifyToast.success(`¡Bienvenido nuevamente ${user.name}!`);
                const lastPage = localStorage.getItem("lastPage");
                const audio = new Audio('/door-chime.mp3');
                await audio.play();
                router.push(lastPage ? lastPage : "/perfil");
            } 
        } catch (error: any) {
            notifyToast.error("Error desconocido al iniciar sesión");
        }
        
        
    }

    

    const inputs = [
        { name: "email", type: "email", placeholder: "Correo electronico" },
        { name: "password", isPassword: true, placeholder: "Contraseña" },
    ];


    return <div className="bg-whiteTransparent flex flex-col items-center justify-center text-[rgb(0,0,0)] w-[40%] min-w-[275px] h-[40%] border-solid border-[rgb(0,0,0)] border-2 rounded-2xl">
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit();
            }}
            className="flex flex-col items-center justify-around w-[80%] h-[95%]">
            <div className="flex flex-col items-center justify-around w-full h-[60%] font-kanit">
            {
                inputs.map(({ name, type, placeholder, isPassword }) => (
                    <div key={name} className="w-full">
                <h2 className="text-2xl font-normal mb-2">{placeholder}</h2>
                    <Input
                        key={name}
                        name={name}
                        type={type}
                        value={userData[name as keyof typeof userData]}
                        onChange={handleChange}
                        isPassword={isPassword}
                    />
                    </div>
                ))
            }
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full h-[40%]">
            <button 
            className="bg-green-500 w-full h-[25%] rounded-lg border border-black shadow-md 
            hover:bg-green-600 hover:shadow-lg active:scale-95 transition-all duration-300"
            >Iniciar sesión
            </button>
            <button type="button"
            onClick={() => router.push('/registro')} 
                className="bg-yellow-400 w-full h-[25%] rounded-lg border border-black shadow-md 
                hover:bg-yellow-500 hover:shadow-lg active:scale-95 transition-all duration-300"
                >Registrarse
            </button>
        </div>
        </form>
    </div>
};