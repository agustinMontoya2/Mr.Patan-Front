"use client";
import { useParams, useRouter } from "next/navigation";
import Input from "../input/input";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, SquarePen } from "lucide-react";
import { InputDate } from "../input/input-date";
import { IUserPet } from "@/interfaces/user";
import useRedirect from "@/customHooks/useRedirect";
import { notifyToast } from "@/helpers/notify/notifyToast";

export const PetModifyForm = () => {
    const param = useParams();
    const petId = param.id;

    const pets: IUserPet[] = localStorage.getItem("pets") ? JSON.parse(localStorage.getItem("pets") as string) : [];
    let pet = pets.find((pet: IUserPet) => pet.id === parseInt(petId as string));
    useRedirect("user", "/inicio", true);
    const petBirthdate = pet? pet.birthdate.split("/").reverse() : [];
    const petDate =new Date(petBirthdate[0] as unknown as number, petBirthdate[1] as unknown as number - 1, petBirthdate[2] as unknown as number);
    
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [date, setDate] = useState(petDate);
    
    const [petData, setPetData] = useState<Partial<IUserPet>>({
        birthdate: pet?.birthdate,
        name: pet?.name,
        type: pet?.type,
        breed: pet?.breed,
        gender: pet?.gender,
        weight: pet?.weight,
        image: pet?.image,
    });
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPetData({ ...petData, [e.target.name]: e.target.value });
        
    };
    const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPetData({ ...petData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
      if (!petData.name || !petData.breed || !petData.weight || !petData.birthdate) {
      notifyToast.alert("Completa los campos correctamente");
      return;
      }
      if (!pet) {
        notifyToast.error("Mascota no encontrada")
        return
    };
      try {
        pet = { ...pet, ...petData };
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        pets.find((pet: IUserPet) => pet.id === parseInt(petId as string)) !== undefined ? pets[pets.findIndex((pet: IUserPet) => pet.id === parseInt(petId as string))] = pet : pets.push(pet);
        localStorage.setItem("pets", JSON.stringify(pets));
      const sound = new Audio("/dog-toy.mp3");
      sound.volume = 0.6
      await sound.play();
      notifyToast.success("Mascota modificada con exito");
      router.back();
      } catch (error) {
        alert(error);
      }
    }

    
        const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                if (!e.target.files || !e.target.files[0]) return;
            const file = e.target.files[0];
            const reader = new FileReader();
        
            reader.onloadend = () => {
                setPetData({ ...petData, image: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
        useEffect(() => {
            setPetData({ ...petData, birthdate: date.toISOString().split("T")[0].split("-").reverse().join("/") });
        }, [date]);

    return (
        <div className="bg-whiteTransparent text-[rgb(0,0,0)] w-4/6 min-w-[275px] h-[85%] border-solid border-[rgb(0,0,0)] border-2 rounded-2xl flex flex-col items-center justify-center">
            <ArrowLeft className="absolute top-4 left-4 cursor-pointer" onClick={() => router.back()} />
            <form
             onSubmit={(e) => {
                 e.preventDefault();
                 handleSubmit();
             }
             }
             className="w-full h-[95%] flex flex-col items-center justify-between">
            <div className="flex flex-col items-center justify-around w-[80%] h-/6 font-kanit">
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
                src={petData.image || "/iconPet.png"}
                alt="pet image"
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
            </div>
            <div className="flex flex-col items-center justify-around w-[80%] font-kanit">
                    <div className="w-full mb-4">
                        <h2 className="text-2xl font-kanit">Fecha de nacimiento</h2>
                    <InputDate setDate={setDate} placeholder={date} max={0}
                    />
                    </div>
                    <div className="w-full">
                        <h2 className="text-2xl font-kanit">Nombre</h2>
                    <Input
                    name="name"
                    type="text"
                    placeholder="Pepe"
                    onChange={onChange}
                    value={petData.name || ""}
                    />
                    </div>
                    <div className="w-full">
                        <h2 className="text-2xl font-kanit">Especie</h2>
                    <Input
                    name="type"
                    type="select"
                    options={[{value: "perro"}, {value: "gato"}]}
                    onChangeSelect={onChangeSelect}
                    value={petData.type || ""}
                    />
                    </div>
                    <div className="w-full">
                        <h2 className="text-2xl font-kanit">Raza</h2>
                    <Input
                    name="breed"
                    type="text"
                    placeholder="Labrador/Caniche/Mestizo/etc..."
                    onChange={onChange}
                    value={petData.breed || ""}
                    />
                    </div>
                    <div className="w-full">
                        <h2 className="text-2xl font-kanit">Genero</h2>
                    <Input
                    name="gender"
                    type="select"
                    options={[{value: "macho"}, {value: "hembra"}]}
                    onChangeSelect={onChangeSelect}
                    value={petData.gender || ""}
                    />
                    </div>
                    <div className="w-full">
                        <h2 className="text-2xl font-kanit">Peso</h2>
                    <Input
                    name="weight"
                    type="number"
                    placeholder="0.00kg"
                    onChange={onChange}
                    value={petData.weight || ""}
                    />
                    </div>
        </div>
            <div className="flex flex-col items-center justify-center gap-2 w-[80%] h-[10%]">
      <button 
        className="bg-yellow-400 w-full h-[40px] rounded-lg border border-black shadow-md 
                   hover:bg-yellow-500 hover:shadow-lg active:scale-95 transition-all duration-300"
      >
        Modificar
      </button>
    </div>
            </form>
            </div>
            )
    };