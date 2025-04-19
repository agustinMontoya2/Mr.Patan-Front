import { CircleAlert } from "lucide-react";
import { toast } from "sonner"

export class notifyToast {
  static success = (message: string) => toast.success(()=> (
    <div className="text-center">
      <h3 className="text-lg font-semibold mb-2">{message}</h3>
    </div>
  ), {
    duration: 5000,
    position: "top-center"
  });
  
  static alert = (message: string) => toast(`${message}`, {
    style: {
      fontSize: "18px",
    },
    icon: "⚠️",
    duration: 5000,
    position: "top-center",
  });

  static error = (message: string) => toast(`${message}`, {
    style: {
      fontSize: "18px",
    },
    icon: <CircleAlert size={20} color="red" />,
    duration: 5000,
    position: "top-center"
  });

  static confirmButton = (succesFunction: () => void, message: string) => {
  const confirmSuccess = () =>{
    succesFunction();
    toast.dismiss();
  }
  return toast(() => (
    <div className="text-center">
      <h3 className="text-lg font-semibold mb-2">{message}</h3>
    </div>
  ), {
    description: () => (
      <div className="w-full flex justify-center gap-6 mt-2">
        <button
          onClick={() => toast.dismiss()}
          className="w-[60px] px-4 py-2 bg-white border border-black text-black rounded-md hover:bg-gray-100 transition-all"
        >
          No
        </button>
        <button
          onClick={() => confirmSuccess()}
          className="w-[60px] px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all"
        >
          Sí
        </button>
      </div>
    ),
    duration: 5000,
    position: "top-right"
  });
} 
}