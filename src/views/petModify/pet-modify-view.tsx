"use client"
import { Footer } from "@/components/footer/footer"
import { PetModifyForm } from "@/components/pet-profile/pet-modify-form"
import { NavbarView } from "../navbarView/navbar-view"

export const PetModifyView = () => {
    return (
        <div className='h-screen w-screen flex flex-col items-center justify-between bg-profile'> 
        <NavbarView/>
        <PetModifyForm/>
        <Footer/>
        </div>
    )
}