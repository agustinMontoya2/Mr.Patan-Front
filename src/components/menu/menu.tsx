import { notifyToast } from "@/helpers/notify/notifyToast";
import { IMenuBurguerItem, IMenuItem } from "@/interfaces/menu"
import { IUser, IUserPet } from "@/interfaces/user";
import { ChevronDown, ChevronUp, Plus, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const MenuBurger: React.FC<IMenuItem> = ({menuOpen, toggleMenu}) => {
    const router = useRouter();
  
  const [openProfileMenu, setOpenProfileMenu] = useState(false); 
    const [openPetsMenu, setOpenPetsMenu] = useState(false); 
    const [pets, setPets] = useState<IUserPet[]>([]);
    const [user, setUser] = useState<IUser | null>(null);
    const services: IMenuBurguerItem[] = [
        { title: "Alimentos"},
        { title: "Ropa"},
        { title: "Juguetes"},
        { title: "Accesorios"},
        { title: "Farmacia"},
    ]

    const profileOptions = [
        { title: "Mi perfil", link: "/perfil"},
        // { title: "Mis favoritos", link: "/perfil/favoritos"},
        {title: "Mi carrito", link: "/perfil/carrito"},
        {title: "Mis ordenes", link: "/perfil/ordenes"},
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

    const logout = async () => {
      const users: IUser[] = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users") as string) : [];
      const user: IUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null;
      const pets = localStorage.getItem("pets") ? JSON.parse(localStorage.getItem("pets") as string) : [];
      const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") as string) : [];
      const favorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites") as string) : [];
      const orders = localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders") as string) : [];
      user.pets = pets;
      user.cart = cart;
      user.favorites = favorites;
      user.orders = orders;
      users.find((u: IUser) => u.id === user.id) !== undefined ? users[users.findIndex((u: IUser) => u.id === user.id)] = user : users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("lastPage", window.location.pathname);
        localStorage.removeItem("user");
        localStorage.removeItem("pets");
        localStorage.removeItem("cart");
        localStorage.removeItem("favorites");
        localStorage.removeItem("orders");
        const audio = new Audio('/door-chime.mp3');
        await audio.play();
        router.push("/inicio");
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
        <X onClick={() => toggleMenu()} size={32} color="black" className="absolute top-5 right-5 cursor-pointer" />

        <div className="flex flex-col h-[90%] w-full justify-between pt-10">
            <div className="flex flex-col">
          {/* Servicios directos */}
          {services.map((service, index) => (
            <Link
              key={index}
              className="text-xl py-3 px-4 border-y border-gray-300 hover:bg-gray-200 transition-all duration-300 cursor-pointer"
              href={`/productos/${service.title.toLowerCase()}`} passHref
            >
              {service.title}
            </Link>
          ))}
          </div>
  
          {/* Sección de perfil */}
          <div
            className="w-full text-xl border-y border-gray-300 transition-all duration-300 cursor-pointer"
          >
            <div onClick={toggleProfileMenu} className="flex items-center px-4 min-h-[54px] hover:bg-gray-200 transition-all duration-300">
              {/* Foto de perfil */}
              {
                user?.image ? <Image src={user.image} alt="Perfil" className="w-10 h-10 rounded-full object-cover" width={40} height={40} /> : <Image src="/iconProfile.svg" alt="Perfil" className="w-10 h-10 rounded-full" width={40} height={40} />
              }
              <span className="ml-2">{user?.name}</span>
              <div className="ml-2">
                {openProfileMenu ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
            
          </div>
  
          {/* Menú desplegable de perfil */}
          {openProfileMenu && (
            <div className="mt-2">
              {profileOptions.map((option, index) => (
                <Link passHref
                  href={option.link}
                  key={index}
                  className="pl-16 block text-lg py-2 hover:bg-gray-100 rounded-md transition-all duration-300"
                >
                  {option.title}
                </Link>
              ))}
  
              {/* Menú desplegable de mascotas */}
              <div
                className="text-lg border-t border-gray-300 py-2 hover:bg-gray-100 rounded-md transition-all duration-300 cursor-pointer"
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
                <div className="mt-2 text-lg border-gray-300 max-h-[200px] overflow-y-scroll">
                    
                  {pets.map((pet, index) => (
                    <div key={index} className="flex items-center pl-16 gap-2 hover:bg-gray-100 transition-all duration-300">
                    <Image src={pet.image} alt="pet" width={40} height={40} className='rounded-full' style={{ width: "30px", height: "30px", objectFit: "cover" }}/>
                    <Link href={`/perfil/mascota/${pet.id}`} passHref
                      key={index}
                      className="block py-2 hover:bg-gray-100 rounded-md transition-all duration-300"
                      >
                      {pet.name}
                    </Link>
                        </div>
                  ))}
                  <div className="flex items-center justify-center hover:bg-gray-100">
                      <Link href="/registro/mascota" className="flex items-center gap-2 underline transition-all duration-300 cursor-pointer">
                        <Plus size={20} /> Agregar mascotas
                      </Link>
                  </div>
                  
                </div>
              )}
              <a onClick={() => notifyToast.confirmButton(()=> logout(), "¿Desea cerrar la sesion?")} className="border-t border-gray-300 flex items-center justify-center text-lg py-2 hover:bg-gray-100 rounded-md transition-all duration-300"
                >Cerrar sesion
                </a>
            </div>
          )}
          </div>
        </div>
      </div>
      );
    };
