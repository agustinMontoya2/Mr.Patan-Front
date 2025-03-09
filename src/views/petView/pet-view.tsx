import { Footer } from "@/components/footer/footer"
import { Navbar } from "@/components/navbar/navbar"
import { Pet } from "@/components/pet-profile/pet"

export const PetView = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-between bg-profile">
            <Navbar/>
            <Pet/>
            <Footer/>
        </div>
    )
}