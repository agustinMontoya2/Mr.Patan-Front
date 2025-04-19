"use client"
import { Footer } from "@/components/footer/footer"
import { PetRegisterForm } from "@/components/pet-profile/pet-register-form"
import { NavbarView } from "../navbarView/navbar-view"

export const PetRegisterView = () => {
    return (
        <div className='h-screen w-screen flex flex-col items-center justify-between bg-profile'> 
        <NavbarView/>
        <PetRegisterForm/>
        <Footer/>
        </div>
    )
}