"use client"
import React from "react";

import { Services } from "@/components/services/services";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Login } from "@/components/login/login";
import useRedirect from "@/customHooks/useRedirect";


const Inicio: React.FC = () => {
    useRedirect("user", "/perfil", false);
    return (
        <div className="bg-home flex flex-col items-center justify-between h-screen w-screen">
            <Navbar />
            <div className="flex flex-row items-center justify-center sm:justify-between md:w-[80%] w-[90%] h-full">
            <Login />
            <Services />
            </div>
            <Footer />
        </div>
    );
}

export default Inicio