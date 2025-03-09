import { IUserDataContainer } from "@/interfaces/user"
import { UserInformation } from "./user-information"
import { useState } from "react";
import { UserPet } from "./user-pet";

export const UserData: React.FC<IUserDataContainer> = ( {user, setUser}) => {
    const [activeTab, setActiveTab] = useState("pets");
    const tabs = [
      { key: "pets", label: "Mascotas" },
      { key: "info", label: "Información" },
        // { key: "settings", label: "Ajustes" },
    ]
    return (
        
    <div className='w-full lg:w-[60%] h-[50%] flex flex-col items-center justify-between'>
        <div className="w-full h-[10%] flex flex-row items-center justify-around">
        { 
        tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`min-w-[100px] w-1/4 h-full font-semibold font-kanit flex items-center justify-center rounded-xl transition-all 
                ${activeTab === tab.key ? "bg-whiteTransparent border border-solid border-[rgb(0,0,0)] text-black" : "text-whiteTransparent"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {activeTab === "info" && <UserInformation user={user} setUser={setUser} />}
        {activeTab === "pets" && <UserPet />}
</div>
    )
}