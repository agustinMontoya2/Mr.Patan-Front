import { Footer } from "@/components/footer/footer"
import { Pet } from "@/components/pet-profile/pet"
import { NavbarView } from "../navbarView/navbar-view"

export const PetView = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-between bg-profile">
            <NavbarView/>
            <Pet/>
            <Footer/>
        </div>
    )
}