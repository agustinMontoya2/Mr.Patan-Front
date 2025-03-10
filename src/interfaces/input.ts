export interface InputProps {
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isPassword?: boolean; // Solo es necesario para los campos de contraseña
  error?: string;
  options?: { value: string }[];
}

export interface IInputDate {
  setDate: (date: Date) => void;
}
