"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "../input/input";

export const Login: React.FC = () => {
    const router = useRouter();

    const initialUserData = {username: "", password: ""};
    const [userData, setUserData] = useState(initialUserData);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    }
    const handleSubmit = () => {
        if (userData.username.length === 0 || userData.password.length === 0) {
            alert("Los campos no pueden estar vacios");
            return;
        }
        console.log(userData);
    }
    

    const inputs = [
        { name: "username", type: "text", placeholder: "Nombre de usuario" },
        { name: "password", isPassword: true, placeholder: "Contraseña" },
    ];


    return <div className="bg-whiteTransparent text-[rgb(0,0,0)] w-[40%] min-w-[275px] h-[40%] border-solid border-[rgb(0,0,0)] border-2 rounded-2xl">
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
    </div>
};