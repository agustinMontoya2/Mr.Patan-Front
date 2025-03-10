
// components/Input.tsx
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // O usa react-icons
import { InputProps } from "@/interfaces/input";


const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  onChangeSelect,
  isPassword = false,
  error,
  options
}) => {
  const [seePassword, setSeePassword] = useState(false);
  const today14 = new Date();
  today14.setDate(today14.getDate() + 14);
  const maxDate = today14.toISOString().split("T")[0];
  const togglePasswordVisibility = () => setSeePassword(!seePassword);
  console.log(type);
  
  return (
    <div className="relative w-full">
      {
      type === "select" && options ? (
        <select name= {name} id=""
        onChange={onChangeSelect}
        className="border border-gray-300 rounded-lg w-full p-3 pr-10"
        value={value}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      ) : type === "date" ? (
        <input
          id={name}
          name={name}
          type="date"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          min={new Date().toISOString().split("T")[0]}
          max={maxDate}
          className="border border-gray-300 rounded-lg w-full p-2 pr-10"
        />
      ) : (
      <input
        id={name}
        name={name}
        type={isPassword ? (seePassword ? "text" : "password") : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg w-full p-2 pr-10"
      /> )}
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