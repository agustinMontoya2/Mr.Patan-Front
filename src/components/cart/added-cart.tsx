import { IAddedToCart} from "@/interfaces/menu"
import Image from "next/image";
import { useRouter } from "next/navigation";

export const AddedToCart: React.FC<IAddedToCart> = ({menuOpen, setMenuOpen}) => {
    const router = useRouter();
    return (
      <div>
        <div
          className={`fixed top-0 right-0 z-40 bg-white text-black w-[70%] max-w-[400px] h-screen flex flex-col items-center justify-center transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <p className="text-lg font-semibold mb-4">¡Producto agregado al carrito!</p>
          <Image src="/cart-dog.png" alt="cart" width={120} height={120} className="mb-4" />
          <div className="flex gap-4">
            <button
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Seguir comprando
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-all"
              onClick={() => router.push("/perfil/carrito")}
            >
              Ir al carrito
            </button>
          </div>
        </div>
        {menuOpen && (
        <div className="bg-black/50 fixed top-0 left-0 z-30 w-full h-screen">
        </div>
      )}
        </div>
      );
    };
