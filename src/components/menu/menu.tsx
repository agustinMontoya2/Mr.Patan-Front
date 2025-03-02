import { IMenuBurguerItem, IMenuItem } from "@/interfaces/menu"
import { IUser, IUserPet } from "@/interfaces/user";
import { ChevronDown, ChevronUp, Plus, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react";

export const MenuBurger: React.FC<IMenuItem> = ({menuOpen, toggleMenu}) => {
    const [openProfileMenu, setOpenProfileMenu] = useState(false); 
    const [openPetsMenu, setOpenPetsMenu] = useState(false); 
    const [pets, setPets] = useState<IUserPet[]>([]);
    const [user, setUser] = useState<IUser | null>(null);
    const services: IMenuBurguerItem[] = [
        { title: "Alimentacion"},
        { title: "Ropa"},
        { title: "Juguetes"},
        { title: "Accesorios"},
        { title: "Medicamentos"},
    ]

    const profileOptions = [
        { title: "Mi perfil"},
        {title: "Mi carrito"},
        {title: "Mis ordenes"}
    ]
    const handleGetUserData = () => {
        const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null;
        setUser(user);
        const pets = localStorage.getItem("pets") ? JSON.parse(localStorage.getItem("pets") as string) : [];
        setPets(pets);
    }

    const toggleProfileMenu = () => {
        setOpenProfileMenu(!openProfileMenu);
      };
    
      const togglePetsMenu = () => {
        setOpenPetsMenu(!openPetsMenu);
      };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("pets");
        window.location.reload();
    }
    
    useEffect(() => {
        handleGetUserData();
    }, [])
    return (
        <div
        className={`fixed top-0 right-0 z-40 bg-white text-black w-[70%] max-w-[400px] h-screen flex flex-col items-center justify-center transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <X onClick={() => toggleMenu()} size={32} color="black" className="absolute top-5 right-5" />

        <div className="flex flex-col h-[90%] w-full justify-between pt-10">
            <div className="flex flex-col">
          {/* Servicios directos */}
          {services.map((service, index) => (
            <a
              key={index}
              className="text-xl py-3 px-4 hover:bg-gray-200 transition-all duration-300 cursor-pointer"
            >
              {service.title}
            </a>
          ))}
          </div>
  
          {/* Sección de perfil */}
          <div
            className="w-full text-xl py-3 transition-all duration-300 cursor-pointer"
          >
            <div onClick={toggleProfileMenu} className=" flex items-center px-4 hover:bg-gray-200 transition-all duration-300">
              {/* Foto de perfil */}
              {
                user?.image ? <Image src={user.image} alt="Perfil" className="w-10 h-10 rounded-full object-cover" width={40} height={40} /> : <Image src="/iconProfile.svg" alt="Perfil" className="w-10 h-10 rounded-full" width={40} height={40} />
              }
              <span className="ml-2">{user?.username}</span>
              <div className="ml-2">
                {openProfileMenu ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
            
          </div>
  
          {/* Menú desplegable de perfil */}
          {openProfileMenu && (
            <div className="mt-2">
              {profileOptions.map((option, index) => (
                <a
                  key={index}
                  className="pl-16 block text-lg py-2 hover:bg-gray-100 rounded-md transition-all duration-300"
                >
                  {option.title}
                </a>
              ))}
  
              {/* Menú desplegable de mascotas */}
              <div
                className="text-lg py-2 hover:bg-gray-100 rounded-md transition-all duration-300 cursor-pointer"
                onClick={togglePetsMenu}
              >
                <div className="flex items-center pl-16">
                  <span>Mis mascotas</span>
                  <div className="ml-2">
                    {openPetsMenu ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>
              </div>
  
              {/* Lista de mascotas desplegable */}
              {openPetsMenu && (
                <div className="mt-2 text-lg">
                    
                  {pets.map((pet, index) => (
                    <div key={index} className="flex items-center pl-16 gap-2 hover:bg-gray-100 transition-all duration-300">
                    <Image src={pet.image} alt="pet" width={40} height={40} className='rounded-full' style={{ width: "30px", height: "30px", objectFit: "cover" }}/>
                    <a
                      key={index}
                      className="block py-2 hover:bg-gray-100 rounded-md transition-all duration-300"
                      >
                      {pet.name}
                    </a>
                        </div>
                  ))}
                  <div className="flex items-center justify-center hover:bg-gray-100">
                      <a className="flex items-center gap-2 underline transition-all duration-300 cursor-pointer">
                        <Plus size={20} /> Agregar mascotas
                      </a>
                  </div>
                  
                </div>
              )}
              <a onClick={() => logout()} className="block text-lg py-2 hover:bg-gray-100 rounded-md transition-all duration-300"
                >Cerrar sesion
                </a>
            </div>
          )}
          </div>
        </div>
      </div>
      );
    };
