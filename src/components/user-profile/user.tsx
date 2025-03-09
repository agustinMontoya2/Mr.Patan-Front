import { IUserProfile } from "@/interfaces/user"
import { SquarePen } from "lucide-react";
import Image from "next/image"
import { useEffect, useRef, useState } from "react";

export const User: React.FC<IUserProfile> = ( {user, handleGetUser}) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [image, setImage] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (!e.target.files || !e.target.files[0]) return;
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
            const newUser = { ...user, image: reader.result as string };
            localStorage.setItem("user", JSON.stringify(newUser));
            setImage(reader.result as string);
            handleGetUser();
        };
        reader.readAsDataURL(file);
    }

    useEffect(() => {
        setImage(user.image);
    })
    return (
        <div className="bg-whiteTransparent border-2 border-solid border-[rgb(0,0,0)] rounded-2xl w-full lg:w-[35%] h-[40%] lg:h-[50%] flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative w-[100px] h-[100px] group cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
            >
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
                />
  {/* Imagen de perfil */}
                <Image
                src={image || "/iconProfile.svg"}
                alt="user"
                width={100}
                height={100}
                className="rounded-full w-full h-full object-cover"
                />

                {/* Capa de oscurecimiento y icono (se muestra en hover) */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                <SquarePen className="text-white w-6 h-6" />
                </div>

                {/* Input de archivo (oculto) */}
                </div>
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-xl text-black font-bold font-kanit">{user.name}</h2>
                    <h2 className="text-lg text-gray-500 font-kanit">{user.email}</h2>
                </div>
            </div>
        </div>
    )
}