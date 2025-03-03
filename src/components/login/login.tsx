"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Input from "../input/input";
import { loginUser } from "@/helpers/users";

export const Login: React.FC = () => {
    const router = useRouter();

    const initialUserData = {username: "", password: ""};
    const [userData, setUserData] = useState(initialUserData);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    }
    const handleSubmit = async () => {
        if (userData.username.length === 0 || userData.password.length === 0) {
            alert("Los campos no pueden estar vacios");
            return;
        }
        try {
            const user = await loginUser(userData);
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
                user.pets ?
                    localStorage.setItem("pets", JSON.stringify(user.pets)) :
                    localStorage.setItem("pets", JSON.stringify([]))
                user.favorites ?
                    localStorage.setItem("favorites", JSON.stringify(user.favorites)) :
                    localStorage.setItem("favorites", JSON.stringify([]))
                user.cart?
                    localStorage.setItem("cart", JSON.stringify(user.cart)) : 
                    localStorage.setItem("cart", JSON.stringify([]))
                
                window.dispatchEvent(new Event("userSessionUpdated"));
                alert("Bienvenido");
                router.push("/perfil");
            } else {
                throw new Error("Error al iniciar sesión");
            }
        } catch (error) {
            alert(error);
        }
        
        
    }

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            router.push("/perfil");
        }
    }, [router]);
    

    const inputs = [
        { name: "username", type: "text", placeholder: "Nombre de usuario" },
        { name: "password", isPassword: true, placeholder: "Contraseña" },
    ];


    return <div className="bg-whiteTransparent text-[rgb(0,0,0)] w-[40%] min-w-[275px] h-[40%] border-solid border-[rgb(0,0,0)] border-2 rounded-2xl">
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit();
            }}
            className="flex flex-col items-center justify-around w-full h-full">
            <div className="flex flex-col items-center justify-around w-full h-2/3 font-kanit">
            
            {
                inputs.map(({ name, type, placeholder, isPassword }) => (
                    <div key={name} className="w-[80%]">
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
        <div className="flex flex-col items-center justify-around w-full h-1/3">
            <button onClick={() => handleSubmit()} className="bg-[#9ace17] w-1/2 h-1/3 rounded-lg border border-solid border-[rgb(0,0,0)]">Iniciar Sesion</button>
            <button onClick={() => router.push("/registro")} className="bg-[#F5D418] w-[40%] h-[30%] rounded-lg border border-solid border-[rgb(0,0,0)]">Registrarse</button>
        </div>
        </form>
    </div>
};