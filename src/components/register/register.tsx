"use client";
import { useState } from "react";
import Input from "../input/input";
import { useRouter } from "next/navigation";
import registerValidation from "../../helpers/validate";
import { FormErrors } from "@/interfaces/errors";
import useRedirect from "@/customHooks/useRedirect";

export const Register = () => {
    const router = useRouter();
    useRedirect("user", "/perfil", false);

    const initialUserData = {email: "", name: "", username: "", password: "", confirmPassword: ""};
    const [userData, setUserData] = useState(initialUserData);
    const inputs = [
        { name: "email", type: "email", placeholder: "Correo electrónico" },
        { name: "name", type: "text", placeholder: "Nombre" },
        { name: "username", type: "text", placeholder: "Nombre de usuario" },
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
    const handleSubmit = () => {
        const validationErrors = registerValidation(userData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            alert("Los campos no pueden estar vacios");
        }
        if (Object.keys(validationErrors).length === 0 && userData.password === userData.confirmPassword) {
            console.log(userData);
        }
    };

    return (
    <div className="bg-whiteTransparent text-[rgb(0,0,0)] w-4/6 min-w-[275px] h-[70%] border-solid border-[rgb(0,0,0)] border-2 rounded-2xl flex flex-col items-center justify-around">
        <div className="flex flex-col items-center justify-around w-[80%] h-/6 font-kanit">
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
        
        <div className="flex flex-col items-center justify-around w-[80%] h-1/6">
            <button onClick={handleSubmit} className="bg-[#F5D418] w-1/2 h-1/3 rounded-lg border border-solid border-[rgb(0,0,0)]">Registrarse</button>
            <button onClick={() => router.push("/inicio")} className="bg-[#9ace17] min-w-[105px] w-[40%] h-[30%] rounded-lg border border-solid border-[rgb(0,0,0)]">Iniciar sesion</button>
        </div>
        </div>
        )
};