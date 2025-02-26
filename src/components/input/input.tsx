
// components/Input.tsx
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // O usa react-icons

interface InputProps {
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPassword?: boolean; // Solo es necesario para los campos de contraseña
  error?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  isPassword = false,
  error,
}) => {
  const [seePassword, setSeePassword] = useState(false);

  const togglePasswordVisibility = () => setSeePassword(!seePassword);
  

  return (
    <div className="relative w-full">
      <input
        id={name}
        name={name}
        type={isPassword ? (seePassword ? "text" : "password") : type}
        // placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg w-full p-2 pr-10"
      />
      {isPassword && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-[32%] transform -translate-y-1/2 text-gray-600"
        >
          {!seePassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
      <div className="min-h-[20px]">
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default Input;